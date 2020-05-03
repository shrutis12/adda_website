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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var AdvertisementService = AdvertisementService_1 = (function () {
    function AdvertisementService(_http, router) {
        this._http = _http;
        this.router = router;
        this.ads = [];
    }
    AdvertisementService.prototype.addAdvertisement = function (item) {
        console.log("while calling service:", AdvertisementService_1.AuthKey);
        console.log("inside service", item);
        var url = "http://192.168.3.144:9000/postAd";
        var headers = new http_1.Headers();
        headers.append('auth-token', AdvertisementService_1.AuthKey);
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var jsonReq = { title: item.title, name: item.name, category: item.category, description: item.description };
        var obj = this._http.post(url, jsonReq, options)
            .map(function (response) { return response.json(); });
        obj.subscribe(function (data) { return console.log(data); });
        alert("ad posted successfully");
    };
    AdvertisementService.prototype.getAdvertisments = function () {
        var url = "http://192.168.3.144:9000/posts";
        var headers = new http_1.Headers();
        headers.append('auth-token', AdvertisementService_1.AuthKey);
        var options = new http_1.RequestOptions({ headers: headers });
        var obj = this._http.get(url, options)
            .map(function (response) { return response.json(); });
        obj.subscribe(function (data) { return console.log(data); });
        return obj;
    };
    AdvertisementService.prototype.deleteAdvertisement = function (id) {
        var url = "http://192.168.3.144:9000/post?postId=";
        var headers = new http_1.Headers();
        headers.append('auth-token', AdvertisementService_1.AuthKey);
        return this._http.delete(url + id).map(function (response) { return response.json(); });
    };
    AdvertisementService.prototype.getAdCategories = function () {
        var url = "http://192.168.3.144:9000/categories";
        return this._http.get(url).map(function (response) { return response.json(); });
    };
    AdvertisementService.prototype.loginUser = function (jsonreq) {
        var _this = this;
        // console.log(jsonreq);
        var url = "http://192.168.3.144:9000/login";
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var obj = this._http.post(url, jsonreq, options).map(function (response) { return response.json(); });
        obj.subscribe(function (data) {
            console.log(data);
            AdvertisementService_1.AuthKey = data.data["auth-token"];
            AdvertisementService_1.userid = data.data["userId"];
            console.log(AdvertisementService_1.AuthKey);
            if (AdvertisementService_1.AuthKey != null) {
                _this.router.navigate(['/login']);
                alert("login successful");
            }
            else {
                alert("please enter correct username and password");
            }
        });
    };
    AdvertisementService.prototype.logoutUser = function () {
        var url = "http://192.168.3.144:9000/logout";
        var headers = new http_1.Headers();
        headers.append('auth-token', AdvertisementService_1.AuthKey);
        var options = new http_1.RequestOptions({ headers: headers });
        var obj = this._http.delete(url, options).map(function (response) { return response.json(); });
        obj.subscribe(function (data) {
            console.log(data);
        });
    };
    AdvertisementService.prototype.registerUser = function (ReqObj) {
        var _this = this;
        console.log("json req from form: ", ReqObj);
        var url = "http://192.168.3.144:9000/register";
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        var jsonReqObj = { firstName: ReqObj.first_name,
            lastName: ReqObj.last_name,
            userName: ReqObj.user_name,
            password: ReqObj.user_password,
            email: ReqObj.emailId,
            phone: ReqObj.mobile_no };
        console.log("after json:", jsonReqObj);
        var obj = this._http.post(url, jsonReqObj, options).map(function (response) { return response.json(); });
        obj.subscribe(function (data) {
            console.log(data);
            if (data.data.message === "Registration successful") {
                alert("Registration Successful! You can login now");
                _this.router.navigate(['/loginForm']);
            }
        });
    };
    AdvertisementService.prototype.viewUserProfile = function () {
        var url = "http://192.168.3.144:9000/user?userId=";
        //let headers = new Headers();
        return this._http.get(url + AdvertisementService_1.userid).map(function (response) { return response.json(); });
        /* obj.subscribe((data)=>{
             console.log(data);
             let ob1=data.data["user"];
             console.log(ob1.lastName);
           });*/
        // console.log("in view sservice");
    };
    return AdvertisementService;
}());
AdvertisementService = AdvertisementService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AdvertisementService);
exports.AdvertisementService = AdvertisementService;
var AdvertisementService_1;
//# sourceMappingURL=AdServices.js.map