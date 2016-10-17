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
var UserFormComponent = (function () {
    function UserFormComponent() {
    }
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styles: ["\n\t\tform {\n\t\t\tpadding: 10px;\n\t\t\tbackground: #ECF0F1;\n\t\t\tborder-radius: 3px;\n\t\t}\n\t"],
            template: "\n\t\t<form>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" required>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" required>\n\t\t\t</div>\t\n\n\t\t\t<button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\">Create user</button>\n\t\t</form>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map