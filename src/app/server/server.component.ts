import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
})
    
export class ServerComponent {
    serverID:number=10;
    serverName:string=Math.random()>0.5 ? 'online':'offline';
    

    getServerStatus(){
        return this.serverName;
    }
    getColor(){
         if(this.serverName==='online'){
             return 'green';
         }
         else{
                return 'red';
         }
    }
    
    
}