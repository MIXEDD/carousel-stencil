import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'image-component',
  styleUrl: 'image-component.scss',
  shadow: true,
})
export class CarouselComponent {
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() isActive: boolean;

  render() {
    return <img class={this.isActive && 'active'} src={this.src} alt={this.alt} />;
  }
}
