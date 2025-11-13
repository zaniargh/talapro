export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly TENANT_ADMIN: "TENANT_ADMIN";
    readonly STAFF: "STAFF";
    readonly VIEWER: "VIEWER";
};
export type Role = (typeof Role)[keyof typeof Role];
