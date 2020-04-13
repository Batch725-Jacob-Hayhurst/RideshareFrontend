import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressVerificationService {

  constructor(private http: HttpClient) {

    this.http.get(`${environment.loginUri}getGoogleApi`)
         .subscribe((response) => {
                        // this will save the response google api key as a string
                         this.apiKey = '&key=' + response['googleMapAPIKey'][0];
                        });

    this.baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  }


  private baseUrl: string;
  private address: string;
  private apiKey: string;
  private url: string;
  private valid: boolean = undefined;


 // =============================================================================================


    // this will check a address and see if it is a valid address. returns true or false.
    async isAddressValid(street: string, city: string, state: string, zip: string){
      // these two lines of code will replace spaces with "+", which is needed for the url
      street = street.replace(/ /g, "+");
      city = city.replace(/ /g, "+");
      // this combines all the address strings into one string
      this.address = '' + street+' + '+city+' + '+state+' + '+zip;


      // this will combine all the componenents needed
      this.url = '' + this.baseUrl + this.address + this.apiKey;
      // this will call call the check Address function and return it's observable
      return await this.http.get(this.url).toPromise()
                          .then(
                            (response2) => {
                              // this looks through the response for the location type
                              const locationType = response2['results'][0].geometry.location_type;
                              // if location type is "ROOFTOP" then this is a precise address location, therefor 
                              // it is a valid address.
                              if (locationType === 'ROOFTOP'){
                                this.valid = true;
                              } else {
                                this.valid = false;
                              }

                              // this will return the boolean on whether it is a valid address or not.
                              return this.valid;
                            }
                        );
    }
}


