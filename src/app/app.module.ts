import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { FooterComponent } from './footer/footer.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { DetailInterventionComponent } from './interventions/detail-intervention/detail-intervention.component';
import { InterventionService } from './interventions/intervention.service';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SectionCompetencesComponent } from './section-competences/section-competences.component';
import { ContactComponent } from './contact/contact.component';
import { TravauxCategoriesComponent } from './travaux-categories/travaux-categories.component';
import { TravauxCompetencesComponent } from './travaux-competences/travaux-competences.component';
import { TravauxListCategoriesComponent } from './travaux-list-categories/travaux-list-categories.component';
import { TravauxListCompetencesComponent } from './travaux-list-competences/travaux-list-competences.component';
import { TravauxArticleComponent } from './travaux-article/travaux-article.component';

import {envTravauxPipe} from './shared/pipes/env-travaux.pipe';
import {sourceTravauxPipe} from './shared/pipes/source-travaux.pipe';
import {sourceBouclePipe} from './shared/pipes/source-boucle.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    FooterComponent,
    InterventionsComponent,
    DetailInterventionComponent,
    AccueilComponent,
    CompetencesComponent,
    ExperiencesComponent,
    SectionCompetencesComponent,
    ContactComponent,
    TravauxCategoriesComponent,
    TravauxCompetencesComponent,
    TravauxListCategoriesComponent,
    TravauxListCompetencesComponent,
    TravauxArticleComponent,
    envTravauxPipe,
    sourceTravauxPipe,
    sourceBouclePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ InterventionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
