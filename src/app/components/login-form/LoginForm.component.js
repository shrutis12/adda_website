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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AdServices_1 = require("../../Services/AdServices");
var LoginFormComponent = (function () {
    function LoginFormComponent(router, ad) {
        this.router = router;
        this.ad = ad;
    }
    LoginFormComponent.prototype.onClick = function (username, pwd) {
        var jsonReqObj = { userName: username, password: pwd };
        this.ad.loginUser(jsonReqObj);
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: "./LoginForm.html",
        styleUrls: ['./LoginForm.css'],
        providers: [AdServices_1.AdvertisementService]
    }),
    __metadata("design:paramtypes", [router_1.Router, AdServices_1.AdvertisementService])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=LoginForm.component.js.map