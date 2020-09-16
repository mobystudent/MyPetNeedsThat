declare const define: any;

declare namespace PerfectScrollbar {
	export interface Options {
		handlers?: string[];
		maxScrollbarLength?: number;
		minScrollbarLength?: number;
		scrollingThreshold?: number;
		scrollXMarginOffset?: number;
		scrollYMarginOffset?: number;
		suppressScrollX?: boolean;
		suppressScrollY?: boolean;
		swipeEasing?: boolean;
		useBothWheelAxes?: boolean;
		wheelPropagation?: boolean;
		wheelSpeed?: number;
	}
}

declare class PerfectScrollbar {
	constructor(element: string | Element, options?: PerfectScrollbar.Options);

	update(): void;
	destroy(): void;

	containerHeight: number;
	containerWidth: number;
	contentHeight: number;
	contentWidth: number;
	element: HTMLElement;
	isAlive: boolean;
	isNegativeScroll: boolean;
	isRtl: boolean;
	isScrollbarXUsingBottom: boolean;
	isScrollbarYUsingBottom: boolean;
	lastScrollLeft: boolean;
	lastScrollTop: boolean;
	negativeScrollAdjustment: number;
	railBorderXWidth: number;
	railBorderYWidth: number;
	railXMarginWidth: number;
	railXRatio: number;
	railXWidth: number;
	railYHeight: number;
	railYMarginHeight: number;
	railYRatio: number;
	scrollbarX: HTMLElement;
	scrollbarXActive: boolean;
	scrollbarXBottom: number;
	scrollbarXLeft: number;
	scrollbarXRail: HTMLElement;
	scrollbarXWidth: number;
	scrollbarY: HTMLElement;
	scrollbarYActive: boolean;
	scrollbarYHeight: number;
	scrollbarYOuterWidth?: number;
	scrollbarYRail: HTMLElement;
	scrollbarYRight: number;
	scrollbarYTop: number;
	settings: PerfectScrollbar.Options;
	reach: { x: 'start' | 'end' | null, y: 'start' | 'end' | null };
}

export = PerfectScrollbar;

declare class PerfectScrollbar {
	constructor(element: string | HTMLElement, options?: PerfectScrollbar.Options);
}

// interface PerfectScrollbarOptions {
// 	wheelSpeed?: number;
// 	wheelPropagation?: boolean;
// 	swipePropagation?: boolean;
// 	minScrollbarLength?: number;
// 	maxScrollbarLength?: number;
// 	useBothWheelAxes?: boolean;
// 	useKeyboard?: boolean;
// 	suppressScrollX?: boolean;
// 	suppressScrollY?: boolean;
// 	scrollXMarginOffset?: number;
// 	scrollYMarginOffset?: number;
// }
//
// interface PerfectScrollbar {
// 	initialize(container: HTMLElement, options?: PerfectScrollbarOptions);
// 	update(container: HTMLElement);
// 	destroy(container: HTMLElement);
// }
//
// interface JQuery {
// 	perfectScrollbar(options?: PerfectScrollbarOptions): JQuery;
// }

// declare var PerfectScrollbar: PerfectScrollbarConstructor;

// export = PerfectScrollbar;
//
// declare class PerfectScrollbar {
//   constructor(element: string | HTMLElement, options?: PerfectScrollbarOptions);
// }
// declare module "perfect-scrollbar" {
// 	export = ps;
// }
