import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit{

  allGroups:any[]=[]
  contactName:any=""
  contact:MyContact={} as MyContact


constructor(private api:ApiService,private router:Router){ }

ngOnInit(): void {

  this.api.getAllGroups()
  .subscribe((data:any)=>{
    this.allGroups=data

  })
}
addContact(){
  this.api.addContact(this.contact)
  .subscribe((data:any)=>{
    this.router.navigateByUrl('')
  })

}

}
