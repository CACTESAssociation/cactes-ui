import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContentComponent } from "./home-content/home-content.component";
import { DonateComponent } from "./donate/donate.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { InvolvementComponent } from "./involvement/involvement.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TeamComponent } from "./team/team.component";

const routes: Routes = [
  { path: "", component: HomeContentComponent, pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "donate", component: DonateComponent },
  { path: "contact", component: ContactComponent },
  { path: "getinvolved", component: InvolvementComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "team", component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
