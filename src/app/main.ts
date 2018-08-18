import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";

window["CESIUM_BASE_URL"] = "/assets/cesium/";

platformBrowserDynamic().bootstrapModule(AppModule);
