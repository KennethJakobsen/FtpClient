import {Injectable} from "@angular/core";
import {treeData} from "../Data/app.recursive.data";
import {ITree} from "../model/tree";

@Injectable()
export class TreeService {
    getTree() {
        return Promise.resolve(treeData);
    }
}