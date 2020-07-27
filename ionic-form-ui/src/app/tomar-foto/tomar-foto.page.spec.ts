import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TomarFotoPage } from './tomar-foto.page';

describe('TomarFotoPage', () => {
  let component: TomarFotoPage;
  let fixture: ComponentFixture<TomarFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomarFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TomarFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
