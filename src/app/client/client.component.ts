import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { IClient } from './../clients-list/clients';
import { Router } from '@angular/router';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  @Input('clients_array') clients: any;

  constructor(private _clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this._clientsService
      .getClients(null)
      .subscribe((data) => (this.client_again = data.users));
  }

  client_again: IClient[] = [];

  getProfile(id: number) {
    this.router.navigate(['/profile', id])
  }
}
