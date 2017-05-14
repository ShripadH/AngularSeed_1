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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var client_service_1 = require("../services/client.service");
var ClientListComponent = (function () {
    function ClientListComponent(_clientservice) {
        this._clientservice = _clientservice;
        this.clientList = [];
        this.tempClients = {};
        this.position = 0;
        this.image = "../../app/clientList/title.jpg";
    }
    ;
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientservice.getClients().subscribe(function (resClientData) { return _this.clientList = resClientData; });
        //this.clientList = this._clientservice.getClients();
    };
    ClientListComponent.prototype.AddCLients = function () {
        var _this = this;
        this._clientservice.getNewClients().subscribe(function (data) { return _this.tempClients = data; });
        Array.prototype.push.apply(this.clientList, this.tempClients);
        //this.clientList.push(this.tempClients);
    };
    ClientListComponent.prototype.onScroll = function (event) {
        this.Isscrolled = event.target.scrollTop;
        this.scrollHeight = event.target.scrollHeight;
        this.position = this.Isscrolled / (this.scrollHeight - event.target.offsetHeight);
        if (this.position > 0.5) {
            this.AddCLients();
            console.log('scroll event', event);
        }
    };
    return ClientListComponent;
}());
ClientListComponent = __decorate([
    core_1.Component({
        styles: [
            "\n        .overflowAuto {\n          overflow: auto;\n          height:400px;\n        }\n        .search-results {\n            overflow: scroll;            \n                   height:400px;\n        }"
        ],
        templateUrl: '../../app/clientList/clientList.component.html'
    })
    // Component class
    ,
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientListComponent);
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=clientList.component.js.map