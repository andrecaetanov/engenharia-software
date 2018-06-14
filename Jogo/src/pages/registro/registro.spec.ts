import { IonicModule, NavController, NavParams, ToastController } from 'ionic-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from '../../firebase-config';
import { AngularFireAuth } from 'angularfire2/auth';

describe('RegistroPage', () => {
  let comp: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        IonicModule.forRoot(RegistroPage)
      ],
      providers: [
        AngularFireAuth,
        ToastController,
        NavController,
        { provide: NavParams, useClass: class { NavParams = jasmine.createSpy('NavParams'); } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPage);
    comp = fixture.componentInstance;
  });

  it('deve criar componente', () => expect(comp).toBeDefined());

  it('deve chamar a função createUserWithEmailAndPassword passando email e senha', () => {
    let angularFireAuth = fixture.debugElement.injector.get(AngularFireAuth).auth;

    spyOn(angularFireAuth, 'createUserWithEmailAndPassword');

    comp.usuario.email = 'email teste';
    comp.usuario.senha = 'senha teste';
    comp.usuario.confirmacaoSenha = 'senha teste';

    comp.registrar(comp.usuario);

    expect<any>(angularFireAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      'email teste',
      'senha teste'
    );
  });

  it('não deve chamar a função createUserWithEmailAndPassword', () => {
    let angularFireAuth = fixture.debugElement.injector.get(AngularFireAuth).auth;

    spyOn(angularFireAuth, 'createUserWithEmailAndPassword');

    comp.usuario.email = 'email teste';
    comp.usuario.senha = 'senha teste';
    comp.usuario.confirmacaoSenha = '';

    comp.registrar(comp.usuario);

    expect<any>(angularFireAuth.createUserWithEmailAndPassword).not.toHaveBeenCalled();
  });
});
