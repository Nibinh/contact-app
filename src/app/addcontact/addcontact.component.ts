import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit{

  allGroups:any[]=[]
  contactName:any=""

constructor(private api:ApiService){ }

ngOnInit(): void {

  this.api.getAllGroups()
  .subscribe((data:any)=>{
    this.allGroups=data

  })
    
}

}
