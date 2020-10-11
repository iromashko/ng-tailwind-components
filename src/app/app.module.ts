import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { CanbanBoardComponent } from './components/canban-board/canban-board.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { BlogComponent } from './components/blog/blog.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PricingGridComponent } from './components/pricing-grid/pricing-grid.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { DropdownHoverComponent } from './components/dropdown-hover/dropdown-hover.component';
import { VercelComponent } from './pages/vercel/vercel.component';
import { AvatarComponent } from './pages/vercel/avatar/avatar.component';
import { RepoComponent } from './pages/vercel/repo/repo.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, FeatureComponent, FooterComponent, CanbanBoardComponent, ContactSectionComponent, BlogComponent, ComponentDocumentationComponent, ToolbarComponent, PricingGridComponent, CardComponent, AccordionComponent, ProgressBarComponent, StarRatingsComponent, DropdownHoverComponent, VercelComponent, AvatarComponent, RepoComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
