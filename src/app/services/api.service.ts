import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyContact } from 'src/models/myContact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURl:string='http://localhost:3000/contacts'

  constructor(private http:HttpClient) { }

// function to get all contact
  getAllcontacts():Observable<MyContact>{
    return this.http.get(this.baseURl)
  }

  // functon to get particular contact
viewContact(contactId:string){
  return this.http.get(`${this.baseURl}/${contactId}`)
}

// function to geta particular group name
getGroupname(groupId:string){
 return this.http.get('http://localhost:3000/groups/'+groupId)
}


// function tofetch all groups from http://localhost:3000/groups
getAllGroups(){
  return this.http.get('http://localhost:3000/groups')
}

// funcion for adding new contact to server
addContact(contactBody:any){
  return this.http.post(this.baseURl,contactBody)
}

// function for deleting contact
deleteContact(contactId:any){
  return this.http.delete(`${this.baseURl}/${contactId}`)
}

// update contact using details according to user
updateContact(contactId:any,contactBody:any){
  return this.http.put(`${this.baseURl}/${contactId}`,contactBody)
}




}

