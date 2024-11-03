import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

const appConfig = {
  providers: [
    provideAnimations()
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));