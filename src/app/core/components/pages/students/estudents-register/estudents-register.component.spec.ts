import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudentsRegisterComponent } from './estudents-register.component';

describe('EstudentsRegisterComponent', () => {
  let component: EstudentsRegisterComponent;
  let fixture: ComponentFixture<EstudentsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudentsRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstudentsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
