import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { NgContentComponent } from "./ng-content/ng-content.component";

const routes: Route[] = [
  {
    path: "ng-content-app",
    component: NgContentComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
