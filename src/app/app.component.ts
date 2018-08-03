import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService],
  styleUrls: ['./app.component.css']
   
})
  
export class AppComponent implements OnInit { 
   
    user: User;
      
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
       this.httpService.getData().subscribe(data => this.users=data["userList"]);
    }
	
	onSelect(user: User): void {
    this.selectedUser = user;
  }
}