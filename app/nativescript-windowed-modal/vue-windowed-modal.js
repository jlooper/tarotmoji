"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _findParentModalEntry(vm) {
    if (!vm) {
        return false;
    }
    var entry = vm.$parent;
    while (entry && entry.$options.name !== "ModalEntry") {
        entry = entry.$parent;
    }
    return entry;
}
var VueWindowedModal = {
    install: function (Vue) {
        Vue.mixin({
            created: function () {
                var self = this;
                this.$modal = {
                    close: function (data) {
                        var entry = _findParentModalEntry(self);
                        if (entry) {
                            entry.closeCb(data);
                        }
                    }
                };
            }
        });
        Vue.prototype.$showModal = function (component, options) {
            var _this = this;
            var defaultOptions = {
                fullscreen: false,
                animated: true,
                stretched: false,
                dimAmount: 0.5
            };
            options = __assign({}, defaultOptions, options);
            return new Promise(function (resolve) {
                var resolved = false;
                var closeCb = function (data) {
                    if (resolved) {
                        return;
                    }
                    resolved = true;
                    resolve(data);
                    modalPage.closeModal();
                    navEntryInstance.$emit("modal:close", data);
                    navEntryInstance.$destroy();
                };
                var navEntryInstance = new Vue({
                    name: "ModalEntry",
                    parent: _this.$root,
                    methods: { closeCb: closeCb },
                    render: function (h) { return h(component, { props: options.props }); }
                });
                var modalPage = navEntryInstance.$mount().$el.nativeView;
                _this.$el.nativeView.showModal(modalPage, {
                    context: null,
                    closeCallback: closeCb,
                    fullscreen: options.fullscreen,
                    animated: options.animated,
                    stretched: options.stretched,
                    dimAmount: options.dimAmount
                });
            });
        };
    }
};
exports.default = VueWindowedModal;
//# sourceMappingURL=vue-windowed-modal.js.map