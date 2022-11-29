import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "./modal/modal.component";
import { NgContentComponent } from "./ng-content.component";

@NgModule({
    imports: [
        CommonModule, 
        FormsModule
    ], 
    declarations: [
        NgContentComponent, 
        ModalComponent
    ], 
    exports: [
        NgContentComponent
    ]
})
export class NgContentModule {}