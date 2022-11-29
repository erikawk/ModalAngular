import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-modal', 
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.css']
})
export class ModalComponent{

    corModalPadrao: string = '#e4ede6'; 

    @Input()
    corModal: string = '';

}