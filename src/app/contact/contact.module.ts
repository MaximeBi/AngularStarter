import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us.component';
import { ContactService } from './contact-us.service';



@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ContactUsComponent],
  exports: [ContactUsComponent],
  providers: [ContactService]
})
export class ContactModule{

}
