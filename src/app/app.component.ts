import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './components/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'letter';
}
