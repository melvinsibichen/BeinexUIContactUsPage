import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-be-formtextarea',
  templateUrl: './be-formtextarea.component.html',
  styleUrls: ['./be-formtextarea.component.scss']
})
export class BeFormtextareaComponent {
  @Input() label!: string;
  @Input() iconClass: string = '';
  @Input() placeholder: string = '';
  @Input() FormControlName!: string;

  @Input() formData!: FormGroup;

  constructor(private fb: FormBuilder) {}

}
