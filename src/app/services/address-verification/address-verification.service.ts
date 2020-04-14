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

  private formatedInput: string;
  private baseUrl: string;
  private address: string;
  private apiKey: string;
  private url: string;
  private valid: boolean = undefined;


 // =============================================================================================



    private parseRoads(road: string): string{

      const longNames = ['parkway', 'saint', 'street', 'circle', 'court', 'creek', 'grove', 'avenue', 'drive', 'lane', 'road', 'place'];
      const shortNames = ['pkwy', 'st', 'st', 'cir', 'ct', 'ck', 'grv', 'ave', 'dr', 'ln', 'rd', 'pl'];
      const longToShort = {'parkway':'pkwy',
      'saint': 'st',
      'street': 'st',
      'circle': 'cir',
      'court': 'ct',
      'creek': 'ck',
      'avenue': 'ave',
      'drive': 'dr',
      'boulevard': 'blvd',
      'lane': 'ln',
      'road': 'rd',
      'place': 'pl'};
      let result:string = road.toLowerCase();
      for (let i = 0; i< longNames.length; i++) {

        if(result.includes(longNames[i])){
          result = result.replace(longNames[i], shortNames[i]);
        }
      }

      return result;
    }


    // this will check a address and see if it is a valid address. returns true or false.
    async isAddressValid(street: string, city: string, state: string, zip: string){
      // these two lines of code will replace spaces with "+", which is needed for the url
      let plusStreet = street.replace(/ /g, "+");
      let plusCity = city.replace(/ /g, "+");
      // this combines all the address strings into one string
      this.address = '' + plusStreet+'+'+ plusCity+'+'+state+'+'+zip;
      
      // this will combine all the componenents needed
      this.url = '' + this.baseUrl + this.address + this.apiKey;

      this.formatedInput = (this.parseRoads(street)) + ', ' + (this.parseRoads(city)) + ', ' + state + ' ' + zip + ', USA';
      this.formatedInput = this.formatedInput.toLocaleLowerCase();

      console.log(this.formatedInput);

      // this will call call the check Address function and return it's observable
      return await this.http.get(this.url).toPromise()
                          .then(
                            (response2) => {
                              // this looks through the response for the returned formatted address
                              const formatedResponse = (response2['results'][0].formatted_address).toLowerCase();
                              
                              // it is a valid address.


                              console.log('respsonse: '+formatedResponse+'\n'+ 'inputed:   ' +this.formatedInput);
                              if (formatedResponse === this.formatedInput){
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


