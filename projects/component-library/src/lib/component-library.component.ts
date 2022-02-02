import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-component-library',
  template: `
    <p>
      component-library works!
    </p>
  `,
  styles: [
  ]
})
export class ComponentLibraryComponent implements OnInit {

  constructor() { }

  @Input()
  hello: string = '';

  ngOnInit(): void {
  }

}
