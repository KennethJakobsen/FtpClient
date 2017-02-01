import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map';
import { HttpModule }    from '@angular/http';
import { TreeComponent }  from "/Static/Scripts/Components/treeview";
import { NodeComponent }  from "/Static/Scripts/Components/treenode";
import { SelectedTreeNodeComponent }  from "/Static/Scripts/Components/selectedtreenode";
import { TreeService }  from "/Static/Scripts/Services/TreeService.recursive.service";
import { TreeNodeSelectService }  from "/Static/Scripts/Services/TreeNodeSelectService";
import { AsyncComponent} from "/Static/Scripts/Components/asyncomponent";
import { AsyncService} from "/Static/Scripts/Services/AsyncService"

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [TreeComponent, NodeComponent, SelectedTreeNodeComponent, AsyncComponent],
    providers: [TreeService, TreeNodeSelectService, AsyncService],
    bootstrap: [TreeComponent]
})
export class AppModule { }