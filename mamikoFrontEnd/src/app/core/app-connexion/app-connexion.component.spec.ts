import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConnexionComponent } from './app-connexion.component';

describe('AppConnexionComponent', () => {
  let component: AppConnexionComponent;
  let fixture: ComponentFixture<AppConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
