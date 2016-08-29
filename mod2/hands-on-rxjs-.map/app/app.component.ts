import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
	selector: 'demo-app',
	templateUrl: 'app/app.component.html',
	directives:  []
})
export class AppComponent {
	public myIP : string;
	private mapData(response: Response): string {
		return response.json().origin;
	}
	private getIPAddress() : Observable<string> {
		return this.http.get('http://httpbin.org/ip')
		.map(this.mapData);
	}
	constructor(private http : Http) {
		this.getIPAddress()
		.subscribe(
			ipdata => this.myIP = ipdata
			);
	}

}