import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  addClientForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    maidenName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.min(1000000000)]),
  });

  isSubmitted: boolean = false;

  constructor(private _clientService: ClientsService) {}
  ngOnInit(): void {}
  addNewClient = () => {
    this.addClientForm.value.phone =
      '+20' + String(this.addClientForm.value.phone);

    this._clientService
      .addClient(this.addClientForm.value)
      .subscribe((res) => console.log(res));
    this.isSubmitted = true;

    this.addClientForm.reset();
    setTimeout(() => {
      this.isSubmitted = false;
    }, 3000);
  };
}
