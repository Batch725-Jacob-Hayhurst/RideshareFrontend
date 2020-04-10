export class Batch {

    /**
     * Set Batch model
     */
    batchNumber: number;
    /**
     * Set batch location as a string
     */
    batchLocation: string;

    constructor(batchNumber:number, batchLocation:string){ 
        this.batchNumber = batchNumber;
        this.batchLocation = batchLocation
    }
}