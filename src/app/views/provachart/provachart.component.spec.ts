import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvachartComponent } from './provachart.component';

describe('ProvachartComponent', () => {
  let component: ProvachartComponent;
  let fixture: ComponentFixture<ProvachartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
