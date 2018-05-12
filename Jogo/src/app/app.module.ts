import { PerguntaPage } from './../pages/pergunta/pergunta';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { SelecionarDificuldadePage } from '../pages/selecionar-dificuldade/selecionar-dificuldade';
import { LoginPage } from '../pages/login/login';
import { FIREBASE_CONFIG } from '../firebase-config';
import { RegistroPage } from '../pages/registro/registro';

@NgModule({
  declarations: [
    MyApp,
    MenuPrincipalPage,
    PerguntaPage,
    SelecionarDificuldadePage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPrincipalPage,
    PerguntaPage,
    SelecionarDificuldadePage,
    LoginPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
