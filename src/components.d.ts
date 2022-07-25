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
    interface HTMLElementTagNameMap {
        "carousel-component": HTMLCarouselComponentElement;
        "image-component": HTMLImageComponentElement;
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
    interface IntrinsicElements {
        "carousel-component": CarouselComponent;
        "image-component": ImageComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "carousel-component": LocalJSX.CarouselComponent & JSXBase.HTMLAttributes<HTMLCarouselComponentElement>;
            "image-component": LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
        }
    }
}
