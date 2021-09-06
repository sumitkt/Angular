import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  //template: `<app-server></app-server><app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverStatus='No server was created';
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 4000);
  }

  ngOnInit(): void {
  }

  getServerStatus(){
    this.serverStatus='A server was created';
  }

}
