import { Component } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  templateUrl: "./ng-content.component.html",
  styleUrls: ["ng-content.component.css"],
})
export class NgContentComponent {
  constructor(private appService: AppService) {}

  abreModal: boolean = false;
  abreModal2: boolean = false;
  links: string[] = [];
  linkSelecionado: string;
  linkImg: string;
  status: string; 

  ngOnInit(): void {
    this.appService.getTags().subscribe((links) => {
      this.links = links;
    });
  }

  filtrar(): void {
    this.linkImg = 'https://http.dog/' + Number(this.status) + '.jpg'
  }

  modal(): void {
    this.abreModal = !this.abreModal;
  }

  modal2(): void {
    this.abreModal2 = !this.abreModal2;
  }

  nomePessoa: string;

  titulo = "Bem-vindo ";
}
