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
var TreeService_recursive_service_1 = require("../Services/TreeService.recursive.service");
var TreeComponent = (function () {
    // ReSharper disable once TsResolvedFromInaccessibleModule
    function TreeComponent(treeService) {
        this.tree = { name: "", content: [] };
        this._treeService = treeService;
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._treeService.getTree().then(function (t) { return _this.tree = t; });
    };
    TreeComponent = __decorate([
        core_1.Component({
            selector: 'treeview',
            template: "<treenode [nodes]='tree'></treenode><selectednode></selectednode><asynctrigger></asynctrigger>"
        }), 
        __metadata('design:paramtypes', [TreeService_recursive_service_1.TreeService])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=treeview.js.map