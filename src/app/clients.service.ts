import { IClient } from './clients-list/clients';
import { Observable } from 'rxjs';  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private clients_link = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getClients(id: number | null): Observable<any> {
    if (!id) return this.http.get(this.clients_link + '?&limit=12');
    else return this.http.get(this.clients_link + '/' + id);
  }
  addClient(client: any) {
    return this.http.post(this.clients_link + '/add', client);
  }
  goToHome(router: any): void {
    router.navigate(['']);
  }
}
