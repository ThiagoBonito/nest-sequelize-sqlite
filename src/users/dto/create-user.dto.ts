import { IsNumber, IsString } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsNumber()
    roleId: number;

    @IsString()
    status: string;
}

export class CreateUserRoleDTO {
    @IsString()
    name: string;
}
