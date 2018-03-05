import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var token = localStorage.getItem("token");
    var userSaved = localStorage.getItem("user");
    var accountId = localStorage.getItem("accountId");
    console.log(token,userSaved,accountId);


    


  }

}
