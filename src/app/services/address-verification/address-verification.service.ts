import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressVerificationService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private address: string = '';
  private apiKey: string = '';
  private url: string = '';
  private valid: boolean = undefined;

  
 // ==========================================================================================================================================================

    // this will contact the google geocode api with the inputed address
    private checkGeocodeAPI(): Observable<any>{

      return this.http.get(this.url);

    }

    // this will fetch the google maps api key from the backend and then validate the address location
    private getAddressInfo(){
      return this.http.get(`${environment.loginUri}getGoogleApi`)
         .subscribe(
                   (response) => {
                        // this will save the response google api key as a string
                        this.apiKey = "&key="+response["googleMapAPIKey"][0];
                        // this will combine all the componenents needed
                        this.url = ''+this.baseUrl+this.address+this.apiKey;
                        // this will call call the check Address function and return it's observable
                        return this.http.get(this.url)
                          .subscribe(
                            (response2) => {
                              // this looks through the response for the location type
                              let locationType = response2["results"][0].geometry.location_type;
                              // if location type is "ROOFTOP" then this is a precise address location, therefor 
                              // it is a valid address.
                              if(locationType === "ROOFTOP"){
                                this.valid = true;
                              }else{
                                this.valid = false;
                              }



                              // this will have to change to something more accurate like this:
                              // compare the formated_address with the inputed address
                              //
                              // console.log(this.address);
                              // console.log(locationType);
                              // locationType = locationType.replace(/,/g, '');
                              // console.log(locationType);
                              // let inputedAdress = this.address.replace(/[+]/g, ' ')+' USA';
                              // console.log(inputedAdress);
                              //
                              // if(locationType === "inputedAdress"){
                              //   this.valid = true;
                              // }else{
                              //   this.valid = false;
                              // }



                              // this will clear apikey from memory
                              this.apiKey = '';
                              console.log(this.valid);
                              return this.valid;
                            }
                        )


                    })
    }
  
    // this will check a address and see if it is a valid address. returns true or false.
    isAddressValid(street: string, city: string, state: string, zip: string){
      // these two lines of code will replace spaces with "+", which is needed for the url
      street = street.replace(/ /g, "+");
      city = city.replace(/ /g, "+");
      // this combines all the address strings into one string
      this.address = ''+street+'+'+city+'+'+state+'+'+zip;
      return this.getAddressInfo();
      let temp: boolean = this.valid;
      // this resets valid to undefined for later checks
      this.valid = undefined;
      return temp;
    }
     
  }


