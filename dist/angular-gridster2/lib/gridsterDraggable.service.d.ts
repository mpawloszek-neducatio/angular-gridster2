import { NgZone } from '@angular/core';
import { GridsterComponentInterface } from './gridster.interface';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
import { GridsterPush } from './gridsterPush.service';
import { GridsterSwap } from './gridsterSwap.service';
export declare class GridsterDraggable {
    private zone;
    gridsterItem: GridsterItemComponentInterface;
    gridster: GridsterComponentInterface;
    lastMouse: {
        clientX: number;
        clientY: number;
    };
    offsetLeft: number;
    offsetTop: number;
    margin: number;
    diffTop: number;
    diffLeft: number;
    originalClientX: number;
    originalClientY: number;
    top: number;
    left: number;
    height: number;
    width: number;
    positionX: number;
    positionY: number;
    positionXBackup: number;
    positionYBackup: number;
    enabled: boolean;
    dragStartFunction: (event: any) => void;
    dragFunction: (event: any) => void;
    dragStopFunction: (event: any) => void;
    mousemove: () => void;
    mouseup: () => void;
    mouseleave: () => void;
    cancelOnBlur: () => void;
    touchmove: () => void;
    touchend: () => void;
    touchcancel: () => void;
    mousedown: () => void;
    touchstart: () => void;
    push: GridsterPush;
    swap: GridsterSwap;
    path: Array<{
        x: number;
        y: number;
    }>;
    collision: GridsterItemComponentInterface | boolean;
    constructor(gridsterItem: GridsterItemComponentInterface, gridster: GridsterComponentInterface, zone: NgZone);
    destroy(): void;
    dragStart(e: any): void;
    dragMove(e: any): void;
    calculateItemPositionFromMousePosition(e: any): void;
    calculateItemPositionWithScale(e: any, scale: number): void;
    calculateItemPositionWithoutScale(e: any): void;
    dragStop(e: any): void;
    cancelDrag(): void;
    makeDrag(): void;
    calculateItemPosition(): void;
    toggle(): void;
    dragStartDelay(e: any): void;
}
