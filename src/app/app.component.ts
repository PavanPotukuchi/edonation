import { Component } from '@angular/core';
import { Donation } from './donation';
import { DonationServiceService } from './donation-service.service';
import { Donor } from './donor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DonationServiceService]
})
export class AppComponent {
  
  donorId:number;
  donations:Donation[];
  donor:Donor;

  constructor(private donationService: DonationServiceService) {
  }

  getDonations(){
    this.donations=[];
    this.donor=new Donor();
    if(this.donorId){
      this.donationService.findAllDonations(this.donorId).subscribe(data => {
        this.donations = data;
        if(this.donations.length>0){
          this.donor=this.donations[0].donor;
        }
      });
    }
  }
}
