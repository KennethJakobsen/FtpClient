import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AsyncService {
    constructor(private http: Http) {

    }
    triggerCall(): Promise<string> {
        return this.http.get("https://httpbin.org/get")
            .toPromise()
            .then(response =>
                response.json().origin
            )
    }
}

