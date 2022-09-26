import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintidComponent } from './printid.component';

describe('PrintidComponent', () => {
  let component: PrintidComponent;
  let fixture: ComponentFixture<PrintidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
