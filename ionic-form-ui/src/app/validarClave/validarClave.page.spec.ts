import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidarClavePage } from './validarClave.page';


describe('ValidarClavePage', () => {
  let component: ValidarClavePage;
  let fixture: ComponentFixture<ValidarClavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarClavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidarClavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
