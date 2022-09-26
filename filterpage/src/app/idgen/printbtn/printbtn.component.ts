import { Component, VERSION, OnInit } from '@angular/core';


@Component({
  selector: 'app-printbtn',
  templateUrl: './printbtn.component.html',
  styleUrls: ['./printbtn.component.css']
})
export class PrintbtnComponent implements OnInit{
  name='angular ${VERSION.major}'

  constructor() { }

  ngOnInit(): void {
  }
  printPage(): void {
     window.print();
  }
}
