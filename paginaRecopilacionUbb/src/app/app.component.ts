import { Component } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { SidebarOpenAnimation, SidebarCloseAnimation } from "./animations";
var vlu=0;
const animationParams = {
  menuWidth: "250px",
  animationStyle: "500ms ease"
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("sideMenu", [
      transition(":enter", [
        useAnimation(SidebarOpenAnimation, {
          params: {
            ...animationParams
          }
        })
      ]),
      transition(":leave", [
        useAnimation(SidebarCloseAnimation, {
          params: {
            ...animationParams
          }
        })
      ])
    ])
  ]
})

export class AppComponent {
  isOpen = true;
  title = 'paginaRecopilacionUbb';
  
  valor(val: any){
    vlu=val;
  }
  
}

