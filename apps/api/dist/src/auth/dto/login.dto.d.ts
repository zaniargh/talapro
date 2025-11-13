export declare enum UserType {
    ADMIN = "admin",
    CUSTOMER = "customer"
}
export declare class LoginDto {
    email: string;
    password: string;
    userType?: UserType;
}
