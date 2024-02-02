import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-be-header',
  templateUrl: './be-header.component.html',
  styleUrls: ['./be-header.component.scss']
})
export class BeHeaderComponent {
  confirmScheduleCall() {
    const confirmed = window.confirm('Call scheduled..!. Are you sure?');

    if (confirmed) {    
      Swal.fire({
        icon: 'success',
        title: 'Call confirmed!',
        showConfirmButton: false,
        timer: 1500 // Auto close after 1.5 seconds
      });
    } else {     
      Swal.fire({
        icon: 'error',
        title: 'Call canceled.',
        showConfirmButton: false,
        timer: 1500 // Auto close after 1.5 seconds
      });
    }
  }
}
