import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly Tenant: "Tenant";
    readonly User: "User";
    readonly Product: "Product";
    readonly PricingSession: "PricingSession";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const TenantScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly plan: "plan";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly role: "role";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly sku: "sku";
    readonly name: "name";
    readonly images: "images";
    readonly karat: "karat";
    readonly weight_gold_g: "weight_gold_g";
    readonly wage_gold: "wage_gold";
    readonly percent_from_gold: "percent_from_gold";
    readonly weight_stone_g: "weight_stone_g";
    readonly wage_stone: "wage_stone";
    readonly quantity: "quantity";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const PricingSessionScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly gold_rate_input: "gold_rate_input";
    readonly source: "source";
    readonly suggested_price: "suggested_price";
    readonly window_amount: "window_amount";
    readonly createdAt: "createdAt";
};
export type PricingSessionScalarFieldEnum = (typeof PricingSessionScalarFieldEnum)[keyof typeof PricingSessionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
