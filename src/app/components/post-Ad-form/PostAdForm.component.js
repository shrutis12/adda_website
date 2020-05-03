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
var PostAdFormComponent = (function () {
    function PostAdFormComponent(adService) {
        var _this = this;
        this.adService = adService;
        this.title = "";
        this.category = [];
        this.categories = [];
        this.name = "";
        this.description = "";
        this.adService.getAdCategories().subscribe(function (data) {
            for (var _i = 0, _a = data.data["itemList"]; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.category.push(item.name);
            }
        });
    }
    PostAdFormComponent.prototype.onSubmit = function (adObject) {
        console.log("inside component", adObject);
        this.adService.addAdvertisement(adObject);
    };
    return PostAdFormComponent;
}());
PostAdFormComponent = __decorate([
    core_1.Component({
        selector: 'post-Ad',
        templateUrl: "./PostAd.html",
        styleUrls: ['./PostAdform.css'],
        providers: [AdServices_1.AdvertisementService]
    }),
    __metadata("design:paramtypes", [AdServices_1.AdvertisementService])
], PostAdFormComponent);
exports.PostAdFormComponent = PostAdFormComponent;
//# sourceMappingURL=PostAdForm.component.js.map