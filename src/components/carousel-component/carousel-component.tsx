import { Component, h, Prop, State } from '@stencil/core';

export interface Images {
  src: string;
  alt: string;
}

export interface ImagesConfig extends Images {
  isActive: boolean;
}

@Component({
  tag: 'carousel-component',
  styleUrl: 'carousel-component.scss',
  shadow: true,
})
export class CarouselComponent {
  @Prop() delay: number;
  @Prop() images: Array<Images>;

  @State() imagesConfig: Array<ImagesConfig>;
  @State() activeSlideIndex: number = 0;
  @State() maxNoOfSlides: number;
  @State() intervalRef: ReturnType<typeof setInterval>;

  mapImagesConfig() {
    this.imagesConfig = this.images.map((image, index) => ({
      ...image,
      isActive: index === this.activeSlideIndex,
    }));
  }

  enableSlideshow() {
    this.mapImagesConfig();

    this.intervalRef = setInterval(() => {
      this.activeSlideIndex = this.activeSlideIndex < this.maxNoOfSlides - 1 ? this.activeSlideIndex + 1 : 0;

      this.mapImagesConfig();
    }, this.delay);
  }

  componentWillLoad() {
    this.maxNoOfSlides = this.images.length;

    this.enableSlideshow();
  }

  render() {
    return (
      <div class="container">
        <section>
          {this.imagesConfig.map(image => (
            <image-component {...image} />
          ))}
        </section>
      </div>
    );
  }
}
