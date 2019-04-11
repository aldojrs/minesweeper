import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorepanelComponent } from './scorepanel.component';

describe('ScorepanelComponent', () => {
  let component: ScorepanelComponent;
  let fixture: ComponentFixture<ScorepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
