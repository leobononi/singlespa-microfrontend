import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { AppComponent } from './app.component';
import { SubRouteComponent } from './sub-route/sub-route.component';
import { AssetUrlPipe } from './asset-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SubRouteComponent,
    AssetUrlPipe
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatGridListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatStepperModule,
    PickerModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
