import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HelloWorldService = /** @class */ (function () {
    function HelloWorldService() {
    }
    HelloWorldService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HelloWorldService.ctorParameters = function () { return []; };
    /** @nocollapse */ HelloWorldService.ngInjectableDef = defineInjectable({ factory: function HelloWorldService_Factory() { return new HelloWorldService(); }, token: HelloWorldService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { HelloWorldService, HelloWorldComponent, HelloWorldModule };

//# sourceMappingURL=hello-world.js.map