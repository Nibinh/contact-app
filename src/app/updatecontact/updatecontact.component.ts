import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { Mygroup } from 'src/models/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit{

  contactId:string=''
  contact:MyContact={} as MyContact
  groups:Mygroup[]=[] as Mygroup[]

  constructor(private activateRoute:ActivatedRoute,private api:ApiService,private router:Router){}

  ngOnInit(): void {
// get contact id from url parameter using ActivatedRoute class
    this.activateRoute.params.subscribe((data)=>{
      console.log(data['contactID'])
      this.contactId=data['contactID']
    })

// call api for getting particular contact detail
    this.api.viewContact(this.contactId)
    .subscribe((data:any)=>{
      this.contact=data
      console.log(data)
    })

    this.api.getAllGroups()
    .subscribe((data:any)=>{
      this.groups=data
    })
    
  }
  updateContact(){
    this.api.updateContact(this.contactId,this.contact)
      .subscribe((data:any)=>{
        this.router.navigateByUrl('')
      })
    
  }


}
