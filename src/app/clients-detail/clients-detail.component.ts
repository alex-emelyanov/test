import { Component, OnInit,Input} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-clients-detail',
  templateUrl: './clients-detail.component.html',

  styleUrls: ['./clients-detail.component.css']
})
export class ClientsDetailComponent implements OnInit {
 
    @Input() user: User;
       constructor(){}
        ngOnInit(){}
}
