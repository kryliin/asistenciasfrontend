import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcarPresenteComponent } from './marcar-presente.component';

describe('MarcarPresenteComponent', () => {
  let component: MarcarPresenteComponent;
  let fixture: ComponentFixture<MarcarPresenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarPresenteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcarPresenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
