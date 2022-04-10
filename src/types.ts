export interface BaseModel {
    id: string;

    [key: string]: any;
}

export interface IRQLExpression<T extends BaseModel, K extends keyof T = keyof T> {
    $and: Array<FieldsIRQL<T>> | Array<IRQLExpression<T, K>>
    $eq?: string | number | null;
    $ne?: string | number;
    $not?: IRQLExpression<T, K>;
    $gt?: number | string;
    $ge?: number | string;
    $lt?: number | string;
    $le?: number | string;
    $like?: string;
    $ilike?: string;
    $in?: Array<T[K]>;
    $out?: Array<T[K]>;
    $or?: Array<FieldsIRQL<T>> | Array<IRQLExpression<T, K>>;
    $range?: {
        min: number;
        max: number;
    };
}

export declare type Operation<T extends BaseModel, K extends keyof T> = T[K] | Array<T[K]> | IRQLExpression<T, K>;
export declare type FieldsIRQL<T extends BaseModel> = {
    [K in keyof T]?: Operation<T, K>;
};

export interface IRQL<T extends BaseModel> {
    $and?: Array<FieldsIRQL<T>>;
    $or?: Array<FieldsIRQL<T>>;
    $ordering?: Array<keyof T> | keyof T;
    $select?: Array<keyof T>;
    limit?: number;
    offset?: number;
}

export declare type Query<T extends BaseModel> = IRQL<T> & FieldsIRQL<T>;
