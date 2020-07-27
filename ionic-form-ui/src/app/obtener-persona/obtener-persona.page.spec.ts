import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ObtenerPersonaPage } from './obtener-persona.page';

describe('ObtenerPersonaPage', () => {
  let component: ObtenerPersonaPage;
  let fixture: ComponentFixture<ObtenerPersonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerPersonaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObtenerPersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
