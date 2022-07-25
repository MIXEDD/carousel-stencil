import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { NavigationDirection } from './constants';

@Component({
  tag: 'navigation-component',
  styleUrl: 'navigation-component.scss',
  shadow: true,
})
export class NavigationComponent {
  @Prop() navigationDirection: NavigationDirection = NavigationDirection.Left;
  @Prop() text: string;

  @Event({
    eventName: 'clickNextOrPrevSlide',
  })
  onClickEvent: EventEmitter<NavigationDirection>;

  onClick() {
    if (this.navigationDirection === NavigationDirection.Left) {
      this.onClickEvent.emit(NavigationDirection.Left);

      return;
    }

    this.onClickEvent.emit(NavigationDirection.Right);
  }

  render() {
    return (
      <button
        class={this.navigationDirection}
        onClick={() => this.onClick.call(this)}
        aria-label={this.navigationDirection === NavigationDirection.Left ? 'navigation to previous slide' : 'navigation to next slide'}
      >
        {this.text}
      </button>
    );
  }
}
