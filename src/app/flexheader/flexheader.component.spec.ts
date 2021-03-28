import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexheaderComponent } from './flexheader.component';

describe('FlexheaderComponent', () => {
  let component: FlexheaderComponent;
  let fixture: ComponentFixture<FlexheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
