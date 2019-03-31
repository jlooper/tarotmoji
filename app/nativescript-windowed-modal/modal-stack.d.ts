import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { HorizontalAlignment, VerticalAlignment } from "tns-core-modules/ui/styling/style-properties";
export declare class ModalStack extends StackLayout {
    dismissEnabled: string;
    verticalPosition: VerticalAlignment;
    horizontalPosition: HorizontalAlignment;
    constructor();
    onLoaded(): void;
    private outsideTap(args, modal);
}
