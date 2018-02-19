import { Component, OnInit } from "@angular/core";

import { Location } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(private location: Location) {}

  getName(): string {
    var name =
      this.location.path() == '' ?
      'Home':
      (
        this.location
          .path()
          .replace("/", "")[0]
          .toUpperCase() +
        this.location
          .path()
          .replace("/", "")
          .substr(1)
      );
    return name.indexOf('/')>0?name.substring(0,name.indexOf('/')):name;
  }
}
