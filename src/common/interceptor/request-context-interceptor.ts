// src/common/request-context.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RequestContext } from '../services/request-context';

@Injectable()
export class RequestContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const user = req.user; // Passport/JWT sets req.user

    return new Observable(observer => {
      RequestContext.run(user, () => {
        next.handle().subscribe({
          next: val => observer.next(val),
          error: err => observer.error(err),
          complete: () => observer.complete(),
        });
      });
    });
  }
}
