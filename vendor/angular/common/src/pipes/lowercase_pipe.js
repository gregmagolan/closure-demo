/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Pipe } from '@angular/core';
import { isBlank } from '../facade/lang';
import { InvalidPipeArgumentError } from './invalid_pipe_argument_error';
/**
 * @ngModule CommonModule
 * @whatItDoes Transforms string to lowercase.
 * @howToUse `expression | lowercase`
 * @description
 *
 * Converts value into a lowercase string using `String.prototype.toLowerCase()`.
 *
 * ### Example
 *
 * {@example common/pipes/ts/lowerupper_pipe.ts region='LowerUpperPipe'}
 *
 * @stable
 */
export var LowerCasePipe = (function () {
    function LowerCasePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LowerCasePipe.prototype.transform = function (value) {
        if (isBlank(value))
            return value;
        if (typeof value !== 'string') {
            throw new InvalidPipeArgumentError(LowerCasePipe, value);
        }
        return value.toLowerCase();
    };
    LowerCasePipe._tsickle_typeAnnotationsHelper = function () {
        /** @type {?} */
        LowerCasePipe.decorators;
        /** @nocollapse
        @type {?} */
        LowerCasePipe.ctorParameters;
    };
    LowerCasePipe.decorators = [
        { type: Pipe, args: [{ name: 'lowercase' },] },
    ];
    /** @nocollapse */
    LowerCasePipe.ctorParameters = [];
    return LowerCasePipe;
}());
//# sourceMappingURL=lowercase_pipe.js.map