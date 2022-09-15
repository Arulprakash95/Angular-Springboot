import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockBookComponent } from './unblock-book.component';

describe('UnblockBookComponent', () => {
  let component: UnblockBookComponent;
  let fixture: ComponentFixture<UnblockBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnblockBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnblockBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
