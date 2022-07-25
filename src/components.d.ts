/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Images } from "./components/carousel-component/carousel-component";
export namespace Components {
    interface CarouselComponent {
        "delay": number;
        "images": Array<Images>;
    }
    interface ImageComponent {
        "alt": string;
        "isActive": boolean;
        "src": string;
    }
    interface IndicatorComponent {
        "isActive": boolean;
        "slideIndex": number;
    }
}
export interface IndicatorComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIndicatorComponentElement;
}
declare global {
    interface HTMLCarouselComponentElement extends Components.CarouselComponent, HTMLStencilElement {
    }
    var HTMLCarouselComponentElement: {
        prototype: HTMLCarouselComponentElement;
        new (): HTMLCarouselComponentElement;
    };
    interface HTMLImageComponentElement extends Components.ImageComponent, HTMLStencilElement {
    }
    var HTMLImageComponentElement: {
        prototype: HTMLImageComponentElement;
        new (): HTMLImageComponentElement;
    };
    interface HTMLIndicatorComponentElement extends Components.IndicatorComponent, HTMLStencilElement {
    }
    var HTMLIndicatorComponentElement: {
        prototype: HTMLIndicatorComponentElement;
        new (): HTMLIndicatorComponentElement;
    };
    interface HTMLElementTagNameMap {
        "carousel-component": HTMLCarouselComponentElement;
        "image-component": HTMLImageComponentElement;
        "indicator-component": HTMLIndicatorComponentElement;
    }
}
declare namespace LocalJSX {
    interface CarouselComponent {
        "delay"?: number;
        "images"?: Array<Images>;
    }
    interface ImageComponent {
        "alt"?: string;
        "isActive"?: boolean;
        "src"?: string;
    }
    interface IndicatorComponent {
        "isActive"?: boolean;
        "onOnChangeSlide"?: (event: IndicatorComponentCustomEvent<number>) => void;
        "slideIndex"?: number;
    }
    interface IntrinsicElements {
        "carousel-component": CarouselComponent;
        "image-component": ImageComponent;
        "indicator-component": IndicatorComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "carousel-component": LocalJSX.CarouselComponent & JSXBase.HTMLAttributes<HTMLCarouselComponentElement>;
            "image-component": LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
            "indicator-component": LocalJSX.IndicatorComponent & JSXBase.HTMLAttributes<HTMLIndicatorComponentElement>;
        }
    }
}
