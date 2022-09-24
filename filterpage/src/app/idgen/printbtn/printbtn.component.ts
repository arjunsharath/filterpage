import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './printbtn.component.html',
  styleUrls: ['./printbtn.component.css']
})
export class PrintbtnComponent {
  name=`angular ${VERSION.major}`;

  printPage() {
     window.print();
  }
}
