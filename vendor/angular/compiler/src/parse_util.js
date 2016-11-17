import { isPresent } from './facade/lang';
export var ParseLocation = (function () {
    /**
     * @param {?} file
     * @param {?} offset
     * @param {?} line
     * @param {?} col
     */
    function ParseLocation(file, offset, line, col) {
        this.file = file;
        this.offset = offset;
        this.line = line;
        this.col = col;
    }
    /**
     * @return {?}
     */
    ParseLocation.prototype.toString = function () {
        return isPresent(this.offset) ? this.file.url + "@" + this.line + ":" + this.col : this.file.url;
    };
    ParseLocation._tsickle_typeAnnotationsHelper = function () {
        /** @type {?} */
        ParseLocation.prototype.file;
        /** @type {?} */
        ParseLocation.prototype.offset;
        /** @type {?} */
        ParseLocation.prototype.line;
        /** @type {?} */
        ParseLocation.prototype.col;
    };
    return ParseLocation;
}());
export var ParseSourceFile = (function () {
    /**
     * @param {?} content
     * @param {?} url
     */
    function ParseSourceFile(content, url) {
        this.content = content;
        this.url = url;
    }
    ParseSourceFile._tsickle_typeAnnotationsHelper = function () {
        /** @type {?} */
        ParseSourceFile.prototype.content;
        /** @type {?} */
        ParseSourceFile.prototype.url;
    };
    return ParseSourceFile;
}());
export var ParseSourceSpan = (function () {
    /**
     * @param {?} start
     * @param {?} end
     * @param {?=} details
     */
    function ParseSourceSpan(start, end, details) {
        if (details === void 0) { details = null; }
        this.start = start;
        this.end = end;
        this.details = details;
    }
    /**
     * @return {?}
     */
    ParseSourceSpan.prototype.toString = function () {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
    };
    ParseSourceSpan._tsickle_typeAnnotationsHelper = function () {
        /** @type {?} */
        ParseSourceSpan.prototype.start;
        /** @type {?} */
        ParseSourceSpan.prototype.end;
        /** @type {?} */
        ParseSourceSpan.prototype.details;
    };
    return ParseSourceSpan;
}());
export var ParseErrorLevel = {};
ParseErrorLevel.WARNING = 0;
ParseErrorLevel.FATAL = 1;
ParseErrorLevel[ParseErrorLevel.WARNING] = "WARNING";
ParseErrorLevel[ParseErrorLevel.FATAL] = "FATAL";
export var ParseError = (function () {
    /**
     * @param {?} span
     * @param {?} msg
     * @param {?=} level
     */
    function ParseError(span, msg, level) {
        if (level === void 0) { level = ParseErrorLevel.FATAL; }
        this.span = span;
        this.msg = msg;
        this.level = level;
    }
    /**
     * @return {?}
     */
    ParseError.prototype.toString = function () {
        var /** @type {?} */ source = this.span.start.file.content;
        var /** @type {?} */ ctxStart = this.span.start.offset;
        var /** @type {?} */ contextStr = '';
        var /** @type {?} */ details = '';
        if (isPresent(ctxStart)) {
            if (ctxStart > source.length - 1) {
                ctxStart = source.length - 1;
            }
            var /** @type {?} */ ctxEnd = ctxStart;
            var /** @type {?} */ ctxLen = 0;
            var /** @type {?} */ ctxLines = 0;
            while (ctxLen < 100 && ctxStart > 0) {
                ctxStart--;
                ctxLen++;
                if (source[ctxStart] == '\n') {
                    if (++ctxLines == 3) {
                        break;
                    }
                }
            }
            ctxLen = 0;
            ctxLines = 0;
            while (ctxLen < 100 && ctxEnd < source.length - 1) {
                ctxEnd++;
                ctxLen++;
                if (source[ctxEnd] == '\n') {
                    if (++ctxLines == 3) {
                        break;
                    }
                }
            }
            var /** @type {?} */ context = source.substring(ctxStart, this.span.start.offset) + '[ERROR ->]' +
                source.substring(this.span.start.offset, ctxEnd + 1);
            contextStr = " (\"" + context + "\")";
        }
        if (this.span.details) {
            details = ", " + this.span.details;
        }
        return "" + this.msg + contextStr + ": " + this.span.start + details;
    };
    ParseError._tsickle_typeAnnotationsHelper = function () {
        /** @type {?} */
        ParseError.prototype.span;
        /** @type {?} */
        ParseError.prototype.msg;
        /** @type {?} */
        ParseError.prototype.level;
    };
    return ParseError;
}());
//# sourceMappingURL=parse_util.js.map