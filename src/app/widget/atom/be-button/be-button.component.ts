import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-be-button',
  templateUrl: './be-button.component.html',
  styleUrls: ['./be-button.component.scss']
})
export class BeButtonComponent {
  @Input() icon: string = "";
  @Input() text: string = "";
  @Input() backgroundColor: string = "";
  @Input() textColor: string = "";

}
