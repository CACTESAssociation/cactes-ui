import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalProjectsComponent } from './global-projects.component';

describe('GlobalProjectsComponent', () => {
  let component: GlobalProjectsComponent;
  let fixture: ComponentFixture<GlobalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
