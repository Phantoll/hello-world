import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelloWorldService {
    constructor() { }
}
HelloWorldService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HelloWorldService.ctorParameters = () => [];
/** @nocollapse */ HelloWorldService.ngInjectableDef = defineInjectable({ factory: function HelloWorldService_Factory() { return new HelloWorldService(); }, token: HelloWorldService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelloWorldComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HelloWorldComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-hello-world',
                template: `
    <p>
      hello-world works!
    </p>
  `
            }] }
];
/** @nocollapse */
HelloWorldComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HelloWorldModule {
}
HelloWorldModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HelloWorldComponent],
                imports: [],
                exports: [HelloWorldComponent]
            },] }
];

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