"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var homepage_component_1 = require("./components/home-page/homepage.component");
var PostAdForm_component_1 = require("./components/post-Ad-form/PostAdForm.component");
var LoginForm_component_1 = require("./components/login-form/LoginForm.component");
var RegistrationForm_component_1 = require("./components/registration-form/RegistrationForm.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var AdServices_1 = require("./Services/AdServices");
var UserProfilePage_component_1 = require("./components/user-profile-page/UserProfilePage.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                { path: '', component: homepage_component_1.HomePageComponent },
                { path: 'register', component: RegistrationForm_component_1.RegistrationFormComponent },
                { path: 'login', component: UserProfilePage_component_1.UserProfilePageComponent },
                { path: 'logout', component: homepage_component_1.HomePageComponent },
                { path: 'loginForm', component: LoginForm_component_1.LoginFormComponent },
                { path: 'postAdForm', component: PostAdForm_component_1.PostAdFormComponent }
            ])],
        declarations: [app_component_1.AppComponent, homepage_component_1.HomePageComponent, PostAdForm_component_1.PostAdFormComponent, UserProfilePage_component_1.UserProfilePageComponent, LoginForm_component_1.LoginFormComponent, RegistrationForm_component_1.RegistrationFormComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [AdServices_1.AdvertisementService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map