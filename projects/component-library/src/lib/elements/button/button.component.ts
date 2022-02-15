import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
   /**
    * Button contents
    *
    * @required
    */
   @Input()
   label: string;

   @Input()
   disabled: boolean = false;
 
   /**
    * Optional click handler
    */
   @Output()
   onClick = new EventEmitter<Event>();
}
