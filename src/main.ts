/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  ...appConfig,                    // merge config
  providers: [
    ...(appConfig.providers || []),
    provideRouter(routes)          // routing here
  ]
}).catch(err => console.error(err));
