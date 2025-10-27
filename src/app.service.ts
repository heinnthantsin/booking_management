import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 class="text-center">Hello Bro Kyaw</h1>';
  }

  callMe(): string {
    return "Call Me Function";
  }
}
