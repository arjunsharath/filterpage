import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idprint',
  templateUrl: './idprint.component.html',
  styleUrls: ['./idprint.component.css']
})
export class IdprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.print();
  }

}
