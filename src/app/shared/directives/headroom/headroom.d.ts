interface HeadroomOptions {
  offset?: number;
  tolerance?: any;
  classes?: {
    initial?: string;
    pinned?: string;
    unpinned?: string;
    top?: string;
    notTop?: string;
  };
  scroller?: Element;
  onPin?: () => void;
  onUnPin?: () => void;
  onTop?: () => void;
  onNotTop?: () => void;

}

declare class Headroom {
  constructor(element: Node, options?: HeadroomOptions);
  constructor(element: Element, options?: HeadroomOptions);
  init: () => void;
  destroy: () => void;
}
