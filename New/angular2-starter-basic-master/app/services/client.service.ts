
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {
    constructor(private _http: Http) { }

    private _url = "../../../apidata/clientdata.json";


    getClients() {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }

    getNewClients() {
    
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }

    logError(err){
        console.log(err);
    }

}