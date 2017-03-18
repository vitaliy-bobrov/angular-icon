import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

const IconModule = require('ngresizable').IconModule;

@NgModule({
  imports: [
    IconModule,
    BrowserModule
  ],
  declarations: [ DemoComponent ],
  bootstrap: [ DemoComponent ]
})
export class DemoModule {}
