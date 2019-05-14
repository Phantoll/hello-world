(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('hello-world', ['exports', '@angular/core'], factory) :
    (factory((global['hello-world'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HelloWorldService = /** @class */ (function () {
        function HelloWorldService() {
        }
        HelloWorldService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HelloWorldService.ctorParameters = function () { return []; };
        /** @nocollapse */ HelloWorldService.ngInjectableDef = i0.defineInjectable({ factory: function HelloWorldService_Factory() { return new HelloWorldService(); }, token: HelloWorldService, providedIn: "root" });
        return HelloWorldService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HelloWorldComponent = /** @class */ (function () {
        function HelloWorldComponent() {
        }
        /**
         * @return {?}
         */
        HelloWorldComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        HelloWorldComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-hello-world',
                        template: "\n    <p>\n      hello-world works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        HelloWorldComponent.ctorParameters = function () { return []; };
        return HelloWorldComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HelloWorldModule = /** @class */ (function () {
        function HelloWorldModule() {
        }
        HelloWorldModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [HelloWorldComponent],
                        imports: [],
                        exports: [HelloWorldComponent]
                    },] }
        ];
        return HelloWorldModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.HelloWorldService = HelloWorldService;
    exports.HelloWorldComponent = HelloWorldComponent;
    exports.HelloWorldModule = HelloWorldModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=hello-world.umd.js.map