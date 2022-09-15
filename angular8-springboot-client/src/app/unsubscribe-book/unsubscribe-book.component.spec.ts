import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeBookComponent } from './unsubscribe-book.component';

describe('UnsubscribeBookComponent', () => {
  let component: UnsubscribeBookComponent;
  let fixture: ComponentFixture<UnsubscribeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
