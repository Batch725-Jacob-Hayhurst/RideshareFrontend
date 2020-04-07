import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreduxComponent } from './loginredux.component';

describe('LoginreduxComponent', () => {
  let component: LoginreduxComponent;
  let fixture: ComponentFixture<LoginreduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginreduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginreduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
