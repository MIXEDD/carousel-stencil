import { Component, EventEmitter, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'indicator-component',
  styleUrl: 'indicator-component.scss',
  shadow: true,
})
export class IndicatorComponent {
  @Prop() isActive: boolean;
  @Prop() slideIndex: number;

  @Event({
    eventName: 'changeSlide',
  })
  onClickEvent: EventEmitter<number>;

  render() {
    return (
      <button
        class={this.isActive && 'active'}
        onClick={() => this.onClickEvent.emit(this.slideIndex)}
        aria-label={`Slide indicator ${this.slideIndex + 1}`}
        aria-pressed={this.isActive && 'true'}
      ></button>
    );
  }
}
