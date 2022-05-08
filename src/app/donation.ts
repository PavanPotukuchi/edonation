import { Donor } from "./donor";

export class Donation {
    id:number;
    donor:Donor;
    donorId:number;
    ngoId:number;
    donationType:string;
    amount:number;
    donationDate:string; 
}
