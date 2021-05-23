/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Hero, Map, Position } from "./model";
export namespace Components {
    interface AronGame {
    }
    interface AronHero {
        "hero": Hero;
    }
    interface AronMap {
        "map": Map;
        "offset": Position;
    }
    interface AronTile {
        "map": Map;
        "position": Position;
    }
}
declare global {
    interface HTMLAronGameElement extends Components.AronGame, HTMLStencilElement {
    }
    var HTMLAronGameElement: {
        prototype: HTMLAronGameElement;
        new (): HTMLAronGameElement;
    };
    interface HTMLAronHeroElement extends Components.AronHero, HTMLStencilElement {
    }
    var HTMLAronHeroElement: {
        prototype: HTMLAronHeroElement;
        new (): HTMLAronHeroElement;
    };
    interface HTMLAronMapElement extends Components.AronMap, HTMLStencilElement {
    }
    var HTMLAronMapElement: {
        prototype: HTMLAronMapElement;
        new (): HTMLAronMapElement;
    };
    interface HTMLAronTileElement extends Components.AronTile, HTMLStencilElement {
    }
    var HTMLAronTileElement: {
        prototype: HTMLAronTileElement;
        new (): HTMLAronTileElement;
    };
    interface HTMLElementTagNameMap {
        "aron-game": HTMLAronGameElement;
        "aron-hero": HTMLAronHeroElement;
        "aron-map": HTMLAronMapElement;
        "aron-tile": HTMLAronTileElement;
    }
}
declare namespace LocalJSX {
    interface AronGame {
    }
    interface AronHero {
        "hero"?: Hero;
    }
    interface AronMap {
        "map"?: Map;
        "offset"?: Position;
    }
    interface AronTile {
        "map"?: Map;
        "position"?: Position;
    }
    interface IntrinsicElements {
        "aron-game": AronGame;
        "aron-hero": AronHero;
        "aron-map": AronMap;
        "aron-tile": AronTile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "aron-game": LocalJSX.AronGame & JSXBase.HTMLAttributes<HTMLAronGameElement>;
            "aron-hero": LocalJSX.AronHero & JSXBase.HTMLAttributes<HTMLAronHeroElement>;
            "aron-map": LocalJSX.AronMap & JSXBase.HTMLAttributes<HTMLAronMapElement>;
            "aron-tile": LocalJSX.AronTile & JSXBase.HTMLAttributes<HTMLAronTileElement>;
        }
    }
}
