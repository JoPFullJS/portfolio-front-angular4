import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { DetailInterventionComponent } from './interventions/detail-intervention/detail-intervention.component';
import { SectionCompetencesComponent } from './section-competences/section-competences.component';
import { ContactComponent } from './contact/contact.component';
import { TravauxCategoriesComponent } from './travaux-categories/travaux-categories.component';
import { TravauxCompetencesComponent } from './travaux-competences/travaux-competences.component';
import { TravauxArticleComponent } from './travaux-article/travaux-article.component';


const routes: Routes = [
	{ path: '', redirectTo: '/accueil', pathMatch: 'full' },
	{ path: 'accueil', component: AccueilComponent },
	{ path: 'interventions', component: InterventionsComponent },
	{ path: 'interventions/:id', component: DetailInterventionComponent },
	{ path: 'competences', component: SectionCompetencesComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'travaux/:categorie', component: TravauxCategoriesComponent},
	{ path: 'travaux/:categorie/:competence', component: TravauxCategoriesComponent},
	{ path: 'travaux/:categorie/:competence/:travaux', component: TravauxArticleComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}