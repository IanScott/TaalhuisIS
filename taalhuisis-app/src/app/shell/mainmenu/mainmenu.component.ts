import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'th-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  URLS = [
    '',
    'students'
  ];

  selectedmenu = "students";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  click = (url?: number): void => {
    this.router.navigateByUrl(this.URLS[url] || '');
  }
}
