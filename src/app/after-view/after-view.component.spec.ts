import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewComponent } from './after-view.component';

describe('AfterViewComponent', () => {
  let component: AfterViewComponent;
  let fixture: ComponentFixture<AfterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
