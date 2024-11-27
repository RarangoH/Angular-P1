import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyImgeComponent } from './lazy-imge.component';

describe('LazyImgeComponent', () => {
  let component: LazyImgeComponent;
  let fixture: ComponentFixture<LazyImgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LazyImgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyImgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
