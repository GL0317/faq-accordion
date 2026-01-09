import { Component } from '@angular/core';
import { FaqsComponent } from "../../features/faqs/components/faqs/faqs.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FaqsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
