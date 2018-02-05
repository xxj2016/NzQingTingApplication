import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicenessComponent } from './choiceness.component';

describe('ChoicenessComponent', () => {
  let component: ChoicenessComponent;
  let fixture: ComponentFixture<ChoicenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
