import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactListService } from '../../services/contact-list.service';
import { Contact } from '../../classes/contact';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnDestroy, OnInit {

  @ViewChild('contactModal') contactModal: any;
  @Input() index: number;

  private _contact: Contact;
  public contactMessage: String = 'Contact Created Successfully';
  public contactForm: FormGroup;
  private indexSubscription: Subscription;

  constructor(private _fb: FormBuilder, private _contactListService: ContactListService) {
    this._createForm();
    this.indexSubscription = this._contactListService.getIndexObservable().subscribe(index => {
      this.index = index;
      this._contact = undefined;
      this._onInitialise();
    });
  }

  private _createForm() {
    this.contactForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,10}')])],
      email: ['', Validators.email],
      status: [false, Validators.required]
    });
  }

  public addContact() {
    const formValue = this.contactForm.value;
    const contact = new Contact(formValue.firstName, formValue.lastName, formValue.phoneNumber, formValue.email, formValue.status === 'true' ? true : false);
    if (this.index !== undefined) {
      this._contactListService.editContact(this.index, contact);
      this.contactMessage = 'Contact Modified Successfully';
    } else {
        this._contactListService.addContact(contact);
      this.contactMessage = 'Contact Created Successfully';
    }
    this.contactModal.show();
    this.resetForm();
  }

  public resetForm() {
    this.contactForm.reset({
      'firstName': this._contact ? this._contact.firstName : '',
      'lastName': this._contact ? this._contact.lastName : '',
      'phoneNumber': this._contact ? this._contact.phoneNumber : '',
      'email': this._contact ? this._contact.email : '',
      'status': this._contact ? this._contact.status : false,
    });
  }

  private _onInitialise() {
    if (this.index !== undefined) {
      this._contact = this._contactListService.getContact(this.index);
    }
    this.resetForm();
  }

  ngOnInit() {
    this._onInitialise();
  }

  ngOnDestroy() {
    this.indexSubscription.unsubscribe();
  }

}
