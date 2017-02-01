import { Component} from "@angular/core";
import {Observable} from "rxjs/Observable"
import { OnInit } from "@angular/core";
import { ITree } from "../Model/Tree";
import { TreeNodeSelectService } from "../Services/TreeNodeSelectService";

@Component({
    selector: 'selectednode',
    template: "<div *ngIf='node'>{{node.name}}</div>"
})

export class SelectedTreeNodeComponent {
    public _treeService: TreeNodeSelectService;
    node: ITree;


    // ReSharper disable once TsResolvedFromInaccessibleModule
    constructor(treeService: TreeNodeSelectService) {
        this._treeService = treeService;
        this._treeService.SelectedNode.subscribe(n => this.node = n);;
    }

    

}