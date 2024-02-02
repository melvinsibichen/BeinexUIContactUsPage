
import { Component, Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-be-formlabel',
  templateUrl: './be-formlabel.component.html',
  styleUrls: ['./be-formlabel.component.scss']
})
export class BeFormlabelComponent  {
  @Input() label!: string;  
  @Input() iconPath: string = '';
  @Input() placeholder: string = '';
  @Input() FormControlName!: string;

  @Input() formData!: FormGroup;

  constructor(private fb: FormBuilder) {}

 
}
