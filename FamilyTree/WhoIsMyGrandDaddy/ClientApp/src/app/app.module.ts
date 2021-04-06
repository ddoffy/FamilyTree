import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FamilyTreeViewerComponent } from './home/family-tree-viewer.component';
import { RootAscendantComponent } from './root-ascendant/root-ascendant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FamilyTreeViewerComponent,
    RootAscendantComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: FamilyTreeViewerComponent, pathMatch: 'full' },
      { path: 'root-ascendant', component: RootAscendantComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
