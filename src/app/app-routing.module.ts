import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { PricingGridComponent } from './components/pricing-grid/pricing-grid.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentDocumentationComponent,
  },
  {
    path: 'pricing',
    component: PricingGridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
