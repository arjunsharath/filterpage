import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  constructor(public router:Router) { }
  ngOnInit(): void {
  }
  print()
  {
    this.router.navigate(['/idprint']);
  }

}
