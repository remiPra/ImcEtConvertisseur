import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvertisseurPage } from './convertisseur.page';

describe('ConvertisseurPage', () => {
  let component: ConvertisseurPage;
  let fixture: ComponentFixture<ConvertisseurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertisseurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertisseurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
