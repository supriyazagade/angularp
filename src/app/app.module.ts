import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';


const appRoutes: Routes = [
  { path: '', component: ShowComponent },
  { path: 'add', component: AddComponent },
  { path: 'show', component: ShowComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
        appRoutes
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
