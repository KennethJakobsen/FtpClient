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
var AsyncService_1 = require("../Services/AsyncService");
var TreeNodeSelectService_1 = require("../Services/TreeNodeSelectService");
var AsyncComponent = (function () {
    // ReSharper disable once TsResolvedFromInaccessibleModule
    function AsyncComponent(asyncSvc, selectSvc) {
        this.asyncSvc = asyncSvc;
        this.selectSvc = selectSvc;
    }
    AsyncComponent.prototype.trigger = function () {
        this.origin = this.asyncSvc.triggerCall(); //.then(r => this.origin = r);
    };
    AsyncComponent.prototype.ondrop = function (ev) {
        ev.preventDefault();
        this.dropped = this.selectSvc._selectedNode.value.name;
    };
    AsyncComponent.prototype.allowDrop = function (ev) {
        var name = this.selectSvc._selectedNode.value.name;
        if (name.indexOf("1.4") == -1)
            ev.preventDefault();
    };
    AsyncComponent = __decorate([
        core_1.Component({
            selector: 'asynctrigger',
            template: "<button  (click)='trigger()'>Skyd!</button><div droppable='true' (dragover)='allowDrop($event)' (drop)='ondrop($event)'>Caller IP:{{dropped}}{{origin | async}}</div>"
        }), 
        __metadata('design:paramtypes', [AsyncService_1.AsyncService, TreeNodeSelectService_1.TreeNodeSelectService])
    ], AsyncComponent);
    return AsyncComponent;
}());
exports.AsyncComponent = AsyncComponent;
//# sourceMappingURL=Asyncomponent.js.map