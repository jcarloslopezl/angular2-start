import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css']
})
export class AppComponent {
	
	users: User[] = [
		{ id: 1, name: "Juan Carlos", username: "jcarloslopezl" },
		{ id: 2, name: "Jose Manuel", username: "pikiknox" },
		{ id: 3, name: "Armando Collazo", username: "kakarot87007" },
		{ id: 4, name: "Fanny Peralta", username: "higheskape" }
	];
	activeUser: User;

	selectUser(user) {
		this.activeUser = user;
	}

	onUserCreated(event){
		this.users.push(event.user);
	}
}