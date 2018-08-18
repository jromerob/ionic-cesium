import { Component } from '@angular/core';

/**
 * Generated class for the CesiumGlobeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cesium-globe',
  templateUrl: 'cesium-globe.html'
})
export class CesiumGlobeComponent {

  text: string;

  constructor() {
    console.log('Hello CesiumGlobeComponent Component');
    this.text = 'Hello World';
  }

}
