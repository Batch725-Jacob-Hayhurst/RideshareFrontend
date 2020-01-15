import { Injectable } from '@angular/core';
import { Batch } from 'src/app/models/batch';

@Injectable({
    providedIn: 'root'
})
export class BatchService {

	batches: Batch[] = [
		{batchNumber: 1, batchLocation: 'VWU - Morgantown, WV'},
		{batchNumber: 2, batchLocation: 'UTA - Arlington, TX'},
		{batchNumber: 3, batchLocation: 'USF - Tampa, FL'},
		{batchNumber: 4, batchLocation: 'Revature HQ - Reston, VA'},
		{batchNumber: 5, batchLocation: 'CUNY SPS - New York, NY'},
		{batchNumber: 6, batchLocation: 'CUNY Queens College - Flushing, NY'}
	];

	constructor() { }

	getAllBatches() {
		return this.batches;
	}
}
