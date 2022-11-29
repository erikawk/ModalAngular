import { Component } from "@angular/core";

@Component({
    templateUrl: './ng-content.component.html', 
    styleUrls: ['ng-content.component.css']
})
export class NgContentComponent {
    abreModal:boolean = false;
    abreModal2:boolean = false;

    modal(): void{
        this.abreModal = !this.abreModal; 
    }

    modal2(): void{
        this.abreModal2 = !this.abreModal2;
    }

    nomePessoa: string; 

    titulo = 'Bem-vindo '

}