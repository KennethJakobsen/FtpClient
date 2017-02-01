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
var Rx_1 = require("rxjs/Rx");
var TreeNodeSelectService = (function () {
    function TreeNodeSelectService() {
        this._selectedNode = new Rx_1.BehaviorSubject(null);
    }
    TreeNodeSelectService.prototype.selectNode = function (node) {
        this._selectedNode.next(node);
    };
    Object.defineProperty(TreeNodeSelectService.prototype, "SelectedNode", {
        get: function () {
            return this._selectedNode.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeSelectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TreeNodeSelectService);
    return TreeNodeSelectService;
}());
exports.TreeNodeSelectService = TreeNodeSelectService;
//# sourceMappingURL=TreeNodeSelectService.js.map