import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'th-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  URLS = [
    'dashboard',
    'students',
    'courses',
    'teachers'
  ];

  selectedmenu = "students";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  click = (url?: number): void => {
    console.log("click: "+url);
    this.router.navigateByUrl(this.URLS[url] || '');
    console.log(this.router);
  }

  stopPropagation($event){
    $event.stopPropagation();
  }
 

}
