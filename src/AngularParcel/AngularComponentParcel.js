import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';
import { AppModule } from './app.module.ts';

export const angularParcel = singleSpaAngular({
  angularPlatform: platformBrowserDynamic(),
  mainModule: AppModule,
  template: `<app-root />`
});
