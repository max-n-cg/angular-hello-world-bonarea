import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  constructor() {
    console.log('this is the constructor');
  }

  ngOnInit(): void {
    console.log('this is an init method');
  }

  simpleAlert() {
    Swal.fire('Hello World');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted successfully', 'success');
  }

  async confirmBox() {
    const result = await Swal.fire({
      title: 'Are you sure you want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      showConfirmButton: true,
      cancelButtonText: 'No! Keep it',
    });

    if (result.value) {
      Swal.fire('Deleted!', 'Your imaginary file has been deleted', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Imaginary file is safe',
        'error'
      )
    }
  }

  errorAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong bro..',
      footer: '<a href>Why do I have this issue? </a>'
    })
  }
}
