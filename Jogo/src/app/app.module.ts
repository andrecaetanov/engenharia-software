import { PerguntaPage } from './../pages/pergunta/pergunta';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MenuPrincipalPage } from '../pages/menu-principal/menu-principal';
import { SelecionarDificuldadePage } from '../pages/selecionar-dificuldade/selecionar-dificuldade';
import { OpcoesPage } from '../pages/opcoes/opcoes';

@NgModule({
  declarations: [
    MyApp,
    MenuPrincipalPage,
    PerguntaPage,
    SelecionarDificuldadePage,
    OpcoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPrincipalPage,
    PerguntaPage,
    SelecionarDificuldadePage,
    OpcoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
