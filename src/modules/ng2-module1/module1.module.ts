import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as shared from "./shared";
import { Module1Component } from "./module1.component";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ Module1Component ],
    providers: [ shared.CountryService ]
})
export class ng2Module1 {
    
}