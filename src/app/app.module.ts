import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HomeContentComponent } from "./home-content/home-content.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TeamComponent } from "./team/team.component";
import { ContactComponent } from "./contact/contact.component";
import { InvolvementComponent } from "./involvement/involvement.component";
import { DonateComponent } from "./donate/donate.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeContentComponent,
    AboutComponent,
    ProjectsComponent,
    TeamComponent,
    ContactComponent,
    InvolvementComponent,
    DonateComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
