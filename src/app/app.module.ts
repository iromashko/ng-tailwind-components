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

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, FeatureComponent, FooterComponent, CanbanBoardComponent, ContactSectionComponent, BlogComponent, ComponentDocumentationComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
