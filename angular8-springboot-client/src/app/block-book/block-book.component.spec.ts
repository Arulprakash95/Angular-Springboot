import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBookComponent } from './block-book.component';

describe('BlockBookComponent', () => {
  let component: BlockBookComponent;
  let fixture: ComponentFixture<BlockBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
