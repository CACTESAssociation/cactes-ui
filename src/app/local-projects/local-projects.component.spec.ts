import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalProjectsComponent } from './local-projects.component';

describe('LocalProjectsComponent', () => {
  let component: LocalProjectsComponent;
  let fixture: ComponentFixture<LocalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
