import { Component } from 'angular2/core';

class AppComponent {
  constructor () {}
}

AppComponent.annotations = [
  new Component({
    selector: "my-app",
    template: '<h1>Hello World</h1>'
  })
];

export { AppComponent };