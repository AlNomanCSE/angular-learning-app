import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeComponentComponent } from './on-change-component.component';

describe('OnChangeComponentComponent', () => {
  let component: OnChangeComponentComponent;
  let fixture: ComponentFixture<OnChangeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnChangeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnChangeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
