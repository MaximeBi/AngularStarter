import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact-us.service';

@Component({
  moduleId: module.id,
  templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent{
  isVisible: boolean = true;

  constructor(private _contactService: ContactService){

  }

  sendMessage(form: NgForm){
    this._contactService.postContactForm(form.value);
  }
}
