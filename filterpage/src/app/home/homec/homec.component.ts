
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homec',
  templateUrl: './homec.component.html',
  styleUrls: ['./homec.component.css']
})
export class HomecComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  gotodetails()
  {
    this.router.navigate(['/details']);
  }  
  gotoupload()
  {
    this.router.navigate(['/trainee-uploaddoc'])
  }
}
