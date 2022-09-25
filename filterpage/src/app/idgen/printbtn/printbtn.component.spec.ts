import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintbtnComponent } from './printbtn.component';

describe('PrintbtnComponent', () => {
  let component: PrintbtnComponent;
  let fixture: ComponentFixture<PrintbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintbtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
