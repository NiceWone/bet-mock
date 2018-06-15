import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupStageDetailsComponent } from './group-stage-details.component';

describe('GroupStageDetailsComponent', () => {
  let component: GroupStageDetailsComponent;
  let fixture: ComponentFixture<GroupStageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupStageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupStageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
