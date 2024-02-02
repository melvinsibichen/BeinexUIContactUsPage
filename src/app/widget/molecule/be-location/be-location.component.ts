import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-be-location',
  templateUrl: './be-location.component.html',
  styleUrls: ['./be-location.component.scss']
})
export class BeLocationComponent {
@Input() ImageSrc!:string;
@Input() heading!:string;
@Input() addressLines!:string[];
@Input() office!:string;
@Input() phone!:string;
@Input() mobile!:string;
@Input() email!:string;

}
