import { LoginPage } from './../login/login';
import { OpcoesPage } from './../opcoes/opcoes';
import { InstrucoesPage } from './../instrucoes/instrucoes';
import { NavMock } from './../../../test-config/mocks-ionic';
import { NativeAudio } from '@ionic-native/native-audio';
import { MenuPrincipalPage } from './menu-principal';
import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SelecionarDificuldadePage } from '../selecionar-dificuldade/selecionar-dificuldade';

describe('MenuPrincipalPage', () => {
  let comp: MenuPrincipalPage;
  let fixture: ComponentFixture<MenuPrincipalPage>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPrincipalPage],
      imports: [
        IonicModule.forRoot(MenuPrincipalPage)
      ],
      providers: [
        { provide: NavController, useClass: NavMock },
        { provide: NavParams, useClass: class { NavParams = jasmine.createSpy('NavParams'); } },
        NativeAudio
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrincipalPage);
    comp = fixture.componentInstance;
  });

  it('deve criar componente', () => expect(comp).toBeDefined());

  it('deve chamar a página SelecionarDificuldade', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);

    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('button'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(SelecionarDificuldadePage);
  });

  /*it('deve chamar a página Instrucoes', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);

    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('button'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(InstrucoesPage);
  });

  it('deve chamar a página Opcoes', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);

    spyOn(navCtrl, 'push');

    de = fixture.debugElement.query(By.css('button'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.push).toHaveBeenCalledWith(OpcoesPage);
  });

  it('deve retornar para a página Login', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);

    spyOn(navCtrl, 'setRoot');

    de = fixture.debugElement.query(By.css('button'));

    de.triggerEventHandler('click', null);

    expect(navCtrl.setRoot).toHaveBeenCalledWith(LoginPage);
  });*/
});
