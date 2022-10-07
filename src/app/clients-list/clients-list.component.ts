import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { IClient } from './clients';

@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  constructor(private _clientService: ClientsService) {}
  ngOnInit(): void {
    this._clientService.getClients(null).subscribe((data) => {
      this.clients = data.users;
    });
  }
  clients: IClient[] = [];
}
