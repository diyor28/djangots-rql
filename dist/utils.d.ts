/// <reference types="ts-toolbelt" />
import { isEmpty } from 'ramda';
/** Check that argument is strict object
 * @type {Function}
 * @param {Any} arg
 * @return {Boolean}
 *
 * @summary Any -> Boolean
 * @example
 *  ({}) -> true
 *  ([]) -> false
 */
export declare const isObjectStrict: (val: any) => boolean;
/** Check that argument is null or undefined or empty
 * @type {Function}
 * @param {Any} arg
 * @return {Boolean}
 *
 * @summary Any -> Boolean
 * @example
 *  null -> true
 *  undefined -> true
 *  [] -> true
 *  {} -> true
 *  '' -> true
 *  'abc -> false
 */
export declare const isNilOrEmpty: typeof isEmpty;
/** Applies ternary operator to arguments
 * @type {Function}
 * @param {Any} arg
 * @return {Boolean}
 *
 * @summary Any -> Any -> Any -> Any
 * @example
 *  'a' -> 'b' -> true -> 'a'
 *  'a' -> 'b' -> false -> 'b'
 */
export declare const alt: import("Function/Curry").Curry<(t: any, f: any, c: any) => any>;
/** Escape all stars in string
 * @type {Function}
 * @param {String} arg
 * @return {String}
 *
 * @summary Any -> Any -> Any -> Any
 * @example
 *  '*a*' -> '\*b\*'
 */
export declare const escapeStars: (str: string) => string;
