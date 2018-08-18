import { NgModule } from "@angular/core";
import { CesiumGlobeComponent } from "./cesium-globe/cesium-globe";

import { DirectivesModule } from "../directives/directives.module";
@NgModule({
  declarations: [CesiumGlobeComponent],
  imports: [DirectivesModule],
  exports: [CesiumGlobeComponent]
})
export class ComponentsModule {}
