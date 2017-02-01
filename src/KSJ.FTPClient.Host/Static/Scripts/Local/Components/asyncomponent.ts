import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable"
import { OnInit } from "@angular/core";
import { AsyncService } from "../Services/AsyncService";
import { TreeNodeSelectService } from "../Services/TreeNodeSelectService";

@Component({
    selector: 'asynctrigger',
    template: "<button  (click)='trigger()'>Skyd!</button><div droppable='true' (dragover)='allowDrop($event)' (drop)='ondrop($event)'>Caller IP:{{dropped}}{{origin | async}}</div>"
})
export class AsyncComponent {

    origin: Promise<string>;
    dropped: string;

    // ReSharper disable once TsResolvedFromInaccessibleModule
    constructor(private asyncSvc: AsyncService, private selectSvc: TreeNodeSelectService) {
    }
    trigger() {
        this.origin = this.asyncSvc.triggerCall(); //.then(r => this.origin = r);
    }
    ondrop(ev: DragEvent) {
        ev.preventDefault();
        this.dropped = this.selectSvc._selectedNode.value.name;
    }
    allowDrop(ev: DragEvent) {
        let name: string  = this.selectSvc._selectedNode.value.name;
        if(name.indexOf("1.4") == -1)
            ev.preventDefault();
    }
}