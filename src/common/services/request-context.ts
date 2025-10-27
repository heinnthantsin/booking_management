import { Injectable } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { User } from 'src/users/user.entity';
import { DEFAULT_SYSTEM_USER_ID, DEFAULT_SYSTEM_USER_NAME } from '../constant';

@Injectable()
export class RequestContext {
  private static als = new AsyncLocalStorage<Map<string, any>>();

  static run(user: User, callback: () => void) {
    RequestContext.als.run(new Map([['user', user]]), callback);
  }

  static getCurrentUser(): User {
    const store = RequestContext.als.getStore();
    const user = store?.get('user');
    if (user) return user;

    // Return default system user if no user in context
    const systemUser = new User();
    systemUser.id = DEFAULT_SYSTEM_USER_ID;
    systemUser.name = DEFAULT_SYSTEM_USER_NAME;
    return systemUser;
  }
}
