import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/rx';
import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';

@Injectable()

export class ContactsData {
    private url = 'api/contacts';
    
    constructor(private http: Http) { }
    
	getList(): Observable<Contact[]> {
		return this.http.get(this.url)
			.map(this.extractData)
			.catch(this.handleError);
	}

	get(id: number): Observable<Contact> {
		return this.http.get(`${this.url}/${id}`)
			.map(this.extractData)
			.catch(this.handleError);
	}

    update(contact: Contact): Promise<boolean> {
        return this.http.put(`${this.url}/${contact.contactID}`, contact)
            .toPromise()
			.then(c => true)
			.catch(this.handleError);
    }

    add(contact: Contact){
        return this.http.post(this.url, contact)
			.map(this.extractData)
			.catch(this.handleError);
    }

    private extractData(res: Response) {
		let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);

        // console.error('An error occurred', error); // for demo purposes only
        // return Promise.reject(error.message || error);
    }
}