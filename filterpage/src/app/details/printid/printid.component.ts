import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-printid',
  templateUrl: './printid.component.html',
  styleUrls: ['./printid.component.css']
})
export class PrintidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { window.print();
  }
}

