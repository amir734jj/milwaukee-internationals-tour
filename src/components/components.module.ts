import { NgModule } from '@angular/core';
import { DirectionComponent } from './direction/direction';
import {MyApp} from "../app/app.component";
import {IonicModule} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	declarations: [DirectionComponent],
	imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
	exports: [DirectionComponent],
  entryComponents: [DirectionComponent],

})
export class ComponentsModule {}
