import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';

	url = "https://cdn.contentful.com/spaces/0c4011zdxpn4";
	token = "796b2fa114373ab0aab632850d6c7018e56ee11c8329889caa5f0bdda6e03da5";

	public constructor(private http: Http) {

		this.http.get(`${this.url}/entries?access_token=${this.token}&content_type=page&fields.pageName[match]=Welcome`)
			.subscribe(
				(res: any) => {
					let data = res.json();
					this.title = data.items[0].fields.content;
				},
				(err) => {
					console.log(JSON.stringify(err));
				}
			)



	}

}
