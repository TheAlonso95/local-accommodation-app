import { inject } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';

@inject(Store)
export class App {
  constructor(store) { this.store = store; }

  bind() {
    this.subscription = this.store.state.subscribe(
      (state) => this.state = state
    );
  }

  unbind() {
    this.subscription.unsubscribe();
  }
}
