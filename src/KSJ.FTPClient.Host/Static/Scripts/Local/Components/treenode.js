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
var TreeNodeSelectService_1 = require("../Services/TreeNodeSelectService");
var core_2 = require("@angular/core");
var NodeComponent = (function () {
    function NodeComponent(svc) {
        this._treeService = svc;
    }
    NodeComponent.prototype.select = function (node) {
        this._treeService.selectNode(node);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NodeComponent.prototype, "nodes", void 0);
    NodeComponent = __decorate([
        core_2.Component({
            selector: 'treenode',
            templateUrl: "/app/Templates/app.recursive.template.html"
        }), 
        __metadata('design:paramtypes', [TreeNodeSelectService_1.TreeNodeSelectService])
    ], NodeComponent);
    return NodeComponent;
}());
exports.NodeComponent = NodeComponent;
//# sourceMappingURL=treenode.js.map