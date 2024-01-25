import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.less'
})
export class PanelComponent {
  @Input() title = '';
  @Input() leftImages: string[] = [];
  @Input() rightImage: string[] = [];
  @Input() id: number = 0;

}
