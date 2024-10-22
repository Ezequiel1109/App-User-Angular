import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { UsersEffects } from './store/users/users.effects';
import { AuthEffects } from './store/auth/auth.effects';
import { usersReducer } from './store/users/users.reduce';
import { authReducer } from './store/auth/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    provideEffects(UsersEffects, AuthEffects),
    provideStore({
      users: usersReducer,
      auth: authReducer
  }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
