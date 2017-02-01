import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { ITree } from "../Model/Tree";
import { TreeService } from "../Services/TreeService.recursive.service";

@Component({
    selector: 'treeview',
    template: "<treenode [nodes]='tree'></treenode><selectednode></selectednode><asynctrigger></asynctrigger>"
})

export class TreeComponent implements OnInit {
    public tree: ITree = { name: "", content: [] };
    public _treeService: TreeService;


    // ReSharper disable once TsResolvedFromInaccessibleModule
    constructor(treeService: TreeService) {
        this._treeService = treeService;
    }

    ngOnInit() {
        this._treeService.getTree().then(t => this.tree = t);
    }

}