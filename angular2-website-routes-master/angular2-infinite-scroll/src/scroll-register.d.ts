import { ContainerRef } from './models';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
export interface ScrollRegisterConfig {
    container: ContainerRef;
    throttleType: string;
    throttleDuration: number;
    filterBefore: Function;
    mergeMap: Function;
    scrollHandler: Function;
}
export declare class ScrollRegister {
    attachEvent(options: ScrollRegisterConfig): Subscription;
}
