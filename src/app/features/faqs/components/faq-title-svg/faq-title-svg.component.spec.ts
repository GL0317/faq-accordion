import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTitleSvgComponent } from './faq-title-svg.component';

describe('FaqTitleSvgComponent', () => {
  let component: FaqTitleSvgComponent;
  let fixture: ComponentFixture<FaqTitleSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqTitleSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqTitleSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
