import {  IsEmail, IsNotEmpty, IsString, IsStrongPassword, IsUrl} from "class-validator";

export class userDto {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password!: string

    @IsString()
    @IsUrl()
    avatar!: string

    @IsNotEmpty()
    @IsString()
    name!: string
}