import { ResultadoPage } from './../pages/resultado/resultado';
import { PerguntaPage } from './../pages/pergunta/pergunta';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { NativeAudio } from '@ionic-native/native-audio';
import { PontuacaoPage } from '../pages/pontuacao/pontuacao';
import { MyApp } from './app.component';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { SelecionarDificuldadePage } from '../pages/selecionar-dificuldade/selecionar-dificuldade';
import { InstrucoesPage } from '../pages/instrucoes/instrucoes';
import { OpcoesPage } from '../pages/opcoes/opcoes';
import { LoginPage } from '../pages/login/login';
import { FIREBASE_CONFIG } from '../firebase-config';
import { RegistroPage } from '../pages/registro/registro';

@NgModule({
  declarations: [
    MyApp,
    MenuPrincipalPage,
    PerguntaPage,
    SelecionarDificuldadePage,
    InstrucoesPage,
    OpcoesPage,
    LoginPage,
    RegistroPage,
    ResultadoPage,
    PontuacaoPage
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
    InstrucoesPage,
    OpcoesPage,
    LoginPage,
    RegistroPage,
    ResultadoPage,
    PontuacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    NativeAudio,
  ]
})
export class AppModule {}
