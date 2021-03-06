import { ElementRef } from '@angular/core';
import { AxisResolver, AxisResolverFactory } from './axis-resolver';
import { ContainerRef, PositionElements, PositionStats } from './models';
export declare class PositionResolverFactory {
    private axisResolver;
    constructor(axisResolver: AxisResolverFactory);
    create(options: PositionElements): PositionResolver;
}
export declare class PositionResolver {
    private axis;
    private options;
    private documentElement;
    private isContainerWindow;
    container: ContainerRef;
    constructor(axis: AxisResolver, options: PositionElements);
    defineContainer(windowElement: ContainerRef): any;
    resolveContainer(windowElement: ContainerRef): boolean;
    getDocumentElement(): any;
    calculatePoints(element: ElementRef): {
        height: any;
        scrolledUntilNow: any;
        totalToScroll: any;
    };
    calculatePointsForWindow(element: ElementRef): PositionStats;
    calculatePointsForElement(element: ElementRef): {
        height: any;
        scrolledUntilNow: any;
        totalToScroll: any;
    };
    private height(elem);
    private offsetTop(elem);
    pageYOffset(elem: any): any;
}
