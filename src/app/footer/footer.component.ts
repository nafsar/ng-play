import { Component, OnInit, VERSION } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: string = " Build " + VERSION.full;
  year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
