import {Input} from "@angular/core";
import {TreeNodeSelectService} from "../Services/TreeNodeSelectService"
import { Component } from "@angular/core";
import {ITree} from "../Model/Tree";

@Component({
    selector: 'treenode',
    templateUrl: "/app/Templates/app.recursive.template.html"
})
export class NodeComponent {
    _treeService: TreeNodeSelectService;
    @Input()
    public nodes: ITree;
    constructor(svc: TreeNodeSelectService)
    {
        this._treeService  = svc;
    }
   select(node: ITree){
    this._treeService.selectNode(node);
}
    
}