import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {

}
