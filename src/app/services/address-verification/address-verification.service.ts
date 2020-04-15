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


    // this function's purpose is to change all street suffixes/street types from a long form to a short form.
    private parseRoads(road: string): string{

      // this is the long form of street suffixes.
      const longNames = ['parkway', 'saint', 'street', 'circle', 'court', 'creek', 'grove', 'avenue', 'drive', 'lane', 'road', 'place'];
      // this is the short form of street suffixes.
      const shortNames = ['pkwy', 'st', 'st', 'cir', 'ct', 'ck', 'grv', 'ave', 'dr', 'ln', 'rd', 'pl'];
      // this is a map/dictionary of the street suffixes long form to short form.
      // this is currently not being used.
      const longToShort = {'parkway': 'pkwy',
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

      // this will check the function's input string for substrings of each long form suffix and replace
      // them with the short form suffix.
      let result: string = road.toLowerCase();
      for (let i = 0; i < longNames.length; i++) {

        if (result.includes(longNames[i])){
          result = result.replace(longNames[i], shortNames[i]);
        }
      }

      return result;
    }


    // this will check a address and see if it is a valid address. returns boolean true or false.
    // note: when this function is called, a async and await will most likey be required for proper use.
    async isAddressValid(street: string, city: string, state: string, zip: string) {
      // these two lines of code will replace spaces with "+", which is needed for the url
      const plusStreet = street.replace(/ /g, '+');
      const plusCity = city.replace(/ /g, '+');
      // this combines all the address strings into one string
      this.address = '' + plusStreet + '+' + plusCity + '+' + state + '+' + zip;

      // this will combine all the componenents needed
      this.url = '' + this.baseUrl + this.address + this.apiKey;

      this.formatedInput = (this.parseRoads(street)) + ', ' + (this.parseRoads(city)) + ', ' + state + ' ' + zip + ', USA';
      this.formatedInput = this.formatedInput.toLocaleLowerCase();

      console.log(this.formatedInput);

      // this will send the request to the google maps geocoding api with the parameters
      return await this.http.get(this.url).toPromise()
                          .then(
                            (response2) => {
                              // this looks through the response JSON for the returned formatted address
                              const formatedResponse = (response2['results'][0].formatted_address).toLowerCase();

                              // this will show the compairason of the inputted address versus the
                              // returned address from google api in the console.
                              console.log('respsonse: ' + formatedResponse + '\n' + 'inputed:   ' + this.formatedInput);

                              // this is the compairison to see if the address that was inputted has an exact
                              // response from the google maps geocoding api.
                              if (formatedResponse === this.formatedInput) {
                                this.valid = true;
                              } else {
                                this.valid = false;
                                // this will throw the returned address into session storage for possible later manipulation.
                                sessionStorage.setItem('returnedAddress', formatedResponse);
                              }


                              // this will return the boolean on whether it is a valid address or not.
                              return this.valid;
                            }
                        );
    }
}


