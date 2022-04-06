import { Query, BaseModel } from './types';
export declare const RQL_EXPRESSIONS: {
    AND: string;
    EQ: string;
    NE: string;
    GT: string;
    GTE: string;
    LT: string;
    LTE: string;
    LIKE: string;
    ILIKE: string;
    IN: string;
    OUT: string;
    RANGE: string;
    NOT: string;
    OR: string;
    SELECT: string;
    ORDERING: string;
    SORT: string;
    LIMIT: string;
};
/** Transforms rql expression of field to query string
 *
 * @type {Function}
 * @param {Object} rqlObject - rql object
 * @param {String} field - field (param name, entity prop)
 * @returns {String}
 *
 * @summary (Object, String) -> String
 * @example ({ $like: 'Jo', $ne: 'Joe'  }) -> 'like(name, *Jo*)&ne(name, Joe)'
 */
export declare function rqlToQuery<T extends BaseModel>(rqlExp: any, field: any): string;
/** Transforms rql object to query string
 *
 * @type {Function}
 * @param {Object} rqlObject - rql object
 * @param {String} field - field (param name, entity prop)
 * @returns {String}
 *
 * @summary Object -> String
 * @example ({ name: { $like: 'Jo', $ne: 'Joe'}  }) -> 'like(name, *Jo*)&ne(name, Joe)'
 */
export default function rql<T extends BaseModel>(rqlObj: Query<T>): string;
