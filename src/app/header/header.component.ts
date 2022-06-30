import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    // 86. Adding Navigation with Event Binding and ngIf
    @Output() featureSelected = new EventEmitter<string>();

    collapsed = true;
  
    onSelect(feature : string){
      this.featureSelected.emit(feature);
    }
    
}