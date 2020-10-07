import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewOrderDialogComponent } from './popup/view-order-dialog/view-order-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewOrderDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    AppRoutingModule
  ],
  entryComponents: [
    ViewOrderDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
