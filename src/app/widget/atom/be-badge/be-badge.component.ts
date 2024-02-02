import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-be-badge',
  templateUrl: './be-badge.component.html',
  styleUrls: ['./be-badge.component.scss']
})
export class BeBadgeComponent {
  @Input() text: string = "";
  @Input() backgroundColor: string = "";
  @Input() textColor: string = "";
}
