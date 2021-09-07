import { Component } from '@angular/core';

@Component({
  selector: 'app-enfant',
  
  template: `
    <div>Avant la projection</div>
    
    <ng-content select=".ma-classe"></ng-content>
    
    <ng-content select="[attribut]"></ng-content>
    
    <ng-content select="div"></ng-content>
  
    <div>Après la projection</div>
  `
})

export class EnfantComponent {
  
  constructor() { }

}
