import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStarSvgComponent } from './icon-star-svg.component';

describe('IconStarSvgComponent', () => {
  let component: IconStarSvgComponent;
  let fixture: ComponentFixture<IconStarSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconStarSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconStarSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
