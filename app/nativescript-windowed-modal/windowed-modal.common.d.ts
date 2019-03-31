import * as ViewClass from "tns-core-modules/ui/core/view";
export interface ExtendedShowModalOptions extends ViewClass.ShowModalOptions {
    dimAmount?: number;
}
export declare function overrideModalViewMethod(): void;
