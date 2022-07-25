import { Component, EventEmitter, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'indicator-component',
  styleUrl: 'indicator-component.scss',
  shadow: true,
})
export class CarouselComponent {
  @Prop() isActive: boolean;
  @Prop() slideIndex: number;

  @Event({
    eventName: 'changeSlide',
  })
  onClickEvent: EventEmitter<number>;

  render() {
    return <button class={this.isActive && 'active'} onClick={() => this.onClickEvent.emit(this.slideIndex)}></button>;
  }
}
