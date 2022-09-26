import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrintidComponent } from '../printid/printid.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public router: Router) { }
  gotoprintid()
  {
    this.router.navigate(['/printid']);
  }
  ngOnInit(): void {
  }

}
