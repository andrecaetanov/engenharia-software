import { IonicModule, NavController, NavParams } from 'ionic-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from '../../firebase-config';
import { AngularFireAuth } from 'angularfire2/auth';

describe('LoginPage', () => {
  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        AngularFireModule.initializeApp(FIREBASE_CONFIG),
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        AngularFireAuth,
        NavController,
        { provide: NavParams, useClass: class { NavParams = jasmine.createSpy('NavParams'); } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;
  });

  it('deve criar componente', () => expect(comp).toBeDefined());

  it('deve chamar a função signInWithEmailAndPassword passando email e senha', () => {
    let angularFireAuth = fixture.debugElement.injector.get(AngularFireAuth).auth;

    spyOn(angularFireAuth, 'signInWithEmailAndPassword');

    comp.usuario.email = 'email teste';
    comp.usuario.senha = 'senha teste';

    comp.login(comp.usuario);

    expect<any>(angularFireAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      'email teste',
      'senha teste'
    );
  });
});
