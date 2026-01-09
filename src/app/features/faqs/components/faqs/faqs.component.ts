import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { FaqTitleSvgComponent } from "../faq-title-svg/faq-title-svg.component";
import { IconStarSvgComponent } from "../icon-star-svg/icon-star-svg.component";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [MatCardModule, FaqTitleSvgComponent, IconStarSvgComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {

}
