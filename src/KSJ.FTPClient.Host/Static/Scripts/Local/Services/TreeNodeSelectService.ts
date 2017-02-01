import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/Rx"
import {Observable} from "rxjs/Observable"
import {ITree} from "../Model/Tree";

@Injectable()
export class TreeNodeSelectService {
    public _selectedNode: BehaviorSubject<ITree>  = new BehaviorSubject<ITree>(null);
    selectNode(node: ITree){
        this._selectedNode.next(node);
    }

    get SelectedNode() {        
            return this._selectedNode.asObservable();
    }
}