import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcoesPage } from './opcoes';

@NgModule({
  declarations: [
    OpcoesPage,
  ],
  imports: [
    IonicPageModule.forChild(OpcoesPage),
  ],
})
export class OpcoesPageModule {}
