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
var AdServices_1 = require("../../Services/AdServices");
var router_1 = require("@angular/router");
var UserProfilePageComponent = (function () {
    function UserProfilePageComponent(adService, router) {
        this.adService = adService;
        this.router = router;
        this.advertisements = [];
        this.product_object = {};
        this.userdetails = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: "",
            phone: ""
        };
    }
    UserProfilePageComponent.prototype.getMyAds = function () {
        var _this = this;
        //console.log(this.advertisements);
        this.adService.getAdvertisments().subscribe(function (data) {
            _this.advertisements = data.data.mypostList;
            console.log(_this.advertisements);
        });
    };
    UserProfilePageComponent.prototype.logout = function () {
        this.adService.logoutUser();
        this.router.navigate(['/logout']);
    };
    UserProfilePageComponent.prototype.deleteObject = function (index) {
        var _this = this;
        var deleteAd = [];
        deleteAd = this.advertisements[index];
        this.adService.deleteAdvertisement(deleteAd.id).subscribe(function (data) {
            _this.adService.getAdvertisments().subscribe(function (data) {
                _this.advertisements = data.data.mypostList;
            });
        });
    };
    UserProfilePageComponent.prototype.viewProfile = function () {
        var _this = this;
        this.adService.viewUserProfile().subscribe(function (data) {
            var userObj = data.data["user"];
            _this.userdetails.firstName = userObj.firstName;
            _this.userdetails.lastName = userObj.lastName;
            _this.userdetails.email = userObj.email;
            _this.userdetails.phone = userObj.phone;
            _this.userdetails.userName = userObj.userName;
        });
    };
    return UserProfilePageComponent;
}());
UserProfilePageComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        templateUrl: "./user-profile-page.html",
        styleUrls: ['./user_profile_page.css'],
        providers: [AdServices_1.AdvertisementService]
    }),
    __metadata("design:paramtypes", [AdServices_1.AdvertisementService, router_1.Router])
], UserProfilePageComponent);
exports.UserProfilePageComponent = UserProfilePageComponent;
//# sourceMappingURL=UserProfilePage.component.js.map