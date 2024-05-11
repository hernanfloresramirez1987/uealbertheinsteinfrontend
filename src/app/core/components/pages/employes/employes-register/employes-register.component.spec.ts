import { ComponentFixture, TestBed } from '@angular/core/testing';
import EmployesRegisterComponent from './EmployesRegisterComponent';



describe('EmployesRegisterComponent', () => {
  let component: EmployesRegisterComponent;
  let fixture: ComponentFixture<EmployesRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployesRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
