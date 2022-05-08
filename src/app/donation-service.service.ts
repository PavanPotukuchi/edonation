import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donation } from './donation';

@Injectable({
  providedIn: 'root'
})
export class DonationServiceService {

  private donationsUrl: string;

  constructor(private http: HttpClient) {
    this.donationsUrl = 'http://localhost:8080/e-donation/api/v1/donations/by-donor-id/';
  }

  public findAllDonations(donorId:number): Observable<Donation[]> {
    return this.http.get<Donation[]>(this.donationsUrl+donorId);
  }
}
