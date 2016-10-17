import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
			<header>
				<nav class="navbar navbar-inverse">
					<div class="navbar-header">
						<a href="/" class="navbar-brand">My angular 2 app!</a>
					</div>
				</nav>
			</header>

			<main>
				<div class="row">
					<div class="col-sm-4">
						<ul class="list-group users-list">
							<li class="list-group-item" 
								*ngFor="let user of users">
								{{ user.name }} ({{ user.username }})
							</li>
						</ul>
					</div>
					<div class="col-sm-8">
						<div class="jumbotron">
						<h1>Welcome to my Angular App!</h1>
						<p>{{ message }}</p>

						</div>	
					</div>
				</div>				
			</main>

			<footer class="text-center">
				Copyright &copy; 2016
			</footer>

	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
	`]

})
export class AppComponent {
	message = 'Hello!';

	users = [
		{ id: 1, name: "Juan Carlos", username: "jcarloslopezl" },
		{ id: 2, name: "Jose Manuel", username: "pikiknox" },
		{ id: 3, name: "Armando Collazo", username: "kakarot87007" },
		{ id: 4, name: "Fanny Peralta", username: "higheskape" }
	]
}