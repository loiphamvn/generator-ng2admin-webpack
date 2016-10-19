import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'error-notifications',
  template: require('./errorNotifications.html'),
  encapsulation: ViewEncapsulation.None
})
export class ErrorNotifications {
  @Input() errors: Array<any>;
}
