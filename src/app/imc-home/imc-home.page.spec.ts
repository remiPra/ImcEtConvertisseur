import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImcHomePage } from './imc-home.page';

describe('ImcHomePage', () => {
  let component: ImcHomePage;
  let fixture: ComponentFixture<ImcHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImcHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
