import { IClient } from './../clients-list/clients';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private _clientsService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this._clientsService
      .getClients(id)
      .subscribe((data) => (this.client = data));
  }
  goHome = () => this._clientsService.goToHome(this.router);
  client = {} as IClient;
}
