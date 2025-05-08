import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-job-seeker-layout',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './job-seeker-layout.component.html',
  styleUrl: './job-seeker-layout.component.css'
})
export class JobSeekerLayoutComponent {

}
