import { Component, h, Listen, Prop, State } from '@stencil/core';
import { NavigationDirection } from './navigation-component/constants';

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
  @State() intervalEnabled: boolean = false;

  mapImagesConfig() {
    this.imagesConfig = this.images.map((image, index) => ({
      ...image,
      isActive: index === this.activeSlideIndex,
    }));
  }

  enableSlideshow(initialLoad = true) {
    this.intervalEnabled = true;

    if (initialLoad) {
      this.mapImagesConfig();
    }

    this.intervalRef = setInterval(() => {
      this.activeSlideIndex = this.activeSlideIndex < this.maxNoOfSlides - 1 ? this.activeSlideIndex + 1 : 0;

      this.mapImagesConfig();
    }, this.delay);
  }

  componentWillLoad() {
    this.maxNoOfSlides = this.images.length;

    this.enableSlideshow();
  }

  @Listen('changeSlide')
  changeSlide(event: CustomEvent<number>) {
    clearInterval(this.intervalRef);
    this.intervalEnabled = false;

    this.activeSlideIndex = event.detail;
    this.mapImagesConfig();
  }

  restartCarouselIteration() {
    if (!this.intervalEnabled) {
      this.enableSlideshow(false);
    }
  }

  setNavigation(direction: NavigationDirection) {
    clearInterval(this.intervalRef);
    this.intervalEnabled = false;

    if (direction === NavigationDirection.Left) {
      this.activeSlideIndex = this.activeSlideIndex === 0 ? this.maxNoOfSlides - 1 : this.activeSlideIndex - 1;
    } else {
      this.activeSlideIndex = this.activeSlideIndex === this.maxNoOfSlides - 1 ? 0 : this.activeSlideIndex + 1;
    }

    this.mapImagesConfig();
  }

  @Listen('clickNextOrPrevSlide')
  clickNextOrPrevSlide(event: CustomEvent<NavigationDirection>) {
    if (event.detail === NavigationDirection.Left) {
      this.setNavigation(NavigationDirection.Left);

      return;
    }

    this.setNavigation(NavigationDirection.Right);
  }

  render() {
    return (
      <section onMouseLeave={() => this.restartCarouselIteration.call(this)} aria-label="image carousel">
        {this.imagesConfig.map(image => (
          <image-component {...image} />
        ))}
        <div class="indicators" aria-label="slide indicators">
          {this.imagesConfig.map((image, index) => (
            <indicator-component isActive={image.isActive} slideIndex={index} />
          ))}
        </div>
        <navigation-component text="<" />
        <navigation-component text=">" navigationDirection={NavigationDirection.Right} />
      </section>
    );
  }
}
