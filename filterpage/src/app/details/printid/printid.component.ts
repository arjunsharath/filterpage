import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdComponent } from '../id/id.component';
@Component({
  selector: 'app-printid',
  templateUrl: './printid.component.html',
  styleUrls: ['./printid.component.css']
})
export class PrintidComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  printid()
  {
    window.print();    
  }
}

