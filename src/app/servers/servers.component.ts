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
  servers=[];
  buttClick=0;
  ListOfClicks=[];
  showSecret=false;


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
    this.serverName='';
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event:Event){
    this.serverName= (<HTMLInputElement>event.target).value;

  }
  onUpdateUserName(){
    this.UserName='';
  }
  CountClicks(){
        if(this.showSecret==false){
          this.showSecret=true;
        }
        else{
          this.showSecret=false;
        }
       this.buttClick+=1;
       this.ListOfClicks.push(this.buttClick);
       //console.log(this.buttClick);
       }
  getColor(){

    if(this.buttClick< 5){
      return 'transparent';
    }
    else{
      return 'blue';
    }
  }

  
}
