import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
// test changes ..

//BUG CHANGE IM DNGs
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'makesh.online';

  ngOnInit(): void {
    console.log('*** makesh.online ***');
    console.log('*** Developed & Designed by - Makesh ***');
  }
}
