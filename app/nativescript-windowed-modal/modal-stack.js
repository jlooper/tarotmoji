"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layout_base_1 = require("tns-core-modules/ui/layouts/layout-base");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout/stack-layout");
var ModalStack = (function (_super) {
    __extends(ModalStack, _super);
    function ModalStack() {
        var _this = _super.call(this) || this;
        _this.dismissEnabled = "true";
        _this.verticalPosition = "middle";
        _this.horizontalPosition = "center";
        return _this;
    }
    ModalStack.prototype.onLoaded = function () {
        var _this = this;
        _super.prototype.onLoaded.call(this);
        var modalView = this.getChildAt(0);
        this.set("height", "100%");
        this.set("width", "100%");
        this.horizontalAlignment = this.horizontalPosition;
        this.verticalAlignment = this.verticalPosition;
        this.on("tap", function (evt) { return _this.outsideTap(evt, modalView); });
    };
    ModalStack.prototype.outsideTap = function (args, modal) {
        if (!layout_base_1.booleanConverter(this.dismissEnabled)) {
            return;
        }
        if (layout_base_1.isIOS) {
            var iosMotion = args.ios;
            var view = iosMotion.view;
            var tapPos = iosMotion.locationInView(view);
            var modalFrame = modal.ios.frame;
            var insideRect = CGRectContainsPoint(modalFrame, tapPos);
            if (insideRect) {
                return;
            }
        }
        else {
            var androidMotion = args.android;
            var x = androidMotion.getRawX() - layout_base_1.layout.toDevicePixels(this.getLocationOnScreen().x);
            var y = androidMotion.getRawY() - layout_base_1.layout.toDevicePixels(this.getLocationOnScreen().y);
            var rect = new android.graphics.Rect();
            modal.android.getHitRect(rect);
            var insideRect = rect.contains(x, y);
            if (insideRect) {
                return;
            }
        }
        modal.closeModal();
    };
    ModalStack = __decorate([
        layout_base_1.CSSType("ModalStack"),
        __metadata("design:paramtypes", [])
    ], ModalStack);
    return ModalStack;
}(stack_layout_1.StackLayout));
exports.ModalStack = ModalStack;
//# sourceMappingURL=modal-stack.js.map