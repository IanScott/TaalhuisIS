import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const URLS = [
  '',
  'students'
];

@Component({
  selector: 'th-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  click = (url?: number): void => {
    this.router.navigateByUrl(URLS[url] || '');
  }

}
