import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EnfantComponent} from './enfant.component';

@Component({
  selector: 'my-app',
  
  template: `
      <div>
        <app-enfant> 
        
          <div class='ma-classe'>
            Utilisation d'une classe pour sélectionner la projection
          </div>
        
          <div>
            D'un élément...
          </div>
        
          <div attribut>
            D'un attribut
          </div>

        </app-enfant>
      </div>
  `
})

export class AppComponent {
  
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, EnfantComponent ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}