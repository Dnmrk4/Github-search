import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RepoService } from './repo.service';
import { SearchService } from './search.service';
import { RoutingModule } from '../routing/routing.module';

import { GithubService } from './github.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [GithubService, RepoService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
