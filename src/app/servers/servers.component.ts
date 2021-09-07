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
  serverName='';
  UserName='';
  serverCreated=false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 4000);
  }

  ngOnInit(): void {
  }

  getServerStatus(){
    this.serverCreated=true;
    this.serverStatus='A server was created with server name '+this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName= (<HTMLInputElement>event.target).value;

  }
  onUpdateUserName(){
    this.UserName='';
  }

}
