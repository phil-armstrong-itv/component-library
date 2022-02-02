import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
   /**
    * Button contents
    *
    * @required
    */
   @Input()
   label = 'Button';
 
   /**
    * Optional click handler
    */
   @Output()
   onClick = new EventEmitter<Event>();
}
