import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr'
import { routes } from './app.routes';
import { provideSpinnerConfig } from 'ngx-spinner';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment.development';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';



export const appConfig: ApplicationConfig = {
  
    providers: [
  
      provideRouter(routes),
      provideAnimations(),
      provideToastr(),
      provideSpinnerConfig(
        { type: 'timer' }
      ),
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideStorage(() => getStorage()),
      { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
    ]
  }