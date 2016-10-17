"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello!';
        this.users = [
            { id: 1, name: "Juan Carlos", username: "jcarloslopezl" },
            { id: 2, name: "Jose Manuel", username: "pikiknox" },
            { id: 3, name: "Armando Collazo", username: "kakarot87007" },
            { id: 4, name: "Fanny Peralta", username: "higheskape" }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t\t<header>\n\t\t\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<a href=\"/\" class=\"navbar-brand\">My angular 2 app!</a>\n\t\t\t\t\t</div>\n\t\t\t\t</nav>\n\t\t\t</header>\n\n\t\t\t<main>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<ul class=\"list-group users-list\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\" \n\t\t\t\t\t\t\t\t*ngFor=\"let user of users\"\n\t\t\t\t\t\t\t\t(click)=\"selectUser(user)\"\n\t\t\t\t\t\t\t\t[class.active]=\"user === activeUser\">\n\t\t\t\t\t\t\t\t{{ user.name }} ({{ user.username }})\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<div class=\"jumbotron\" *ngIf=\"activeUser\">\n\t\t\t\t\t\t\t<h2>{{ activeUser.name }} <small>({{ activeUser.username }})</small></h2>\n\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t<div class=\"jumbotron\" *ngIf=\"!activeUser\">\n\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-hand-left\"></span>\n\t\t\t\t\t\t\t<h2>Choose a User</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</main>\n\n\t\t\t<footer class=\"text-center\">\n\t\t\t\tCopyright &copy; 2016\n\t\t\t</footer>\n\n\t",
            styles: ["\n\t\t.users-list li{\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.jumbotron .glyphicon { \n\t\t\tfont-size: 80px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map