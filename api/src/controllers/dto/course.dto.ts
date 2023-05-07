import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CourseDto {

    @IsString()
    @IsNotEmpty()
    title! : string

    @IsString()
    @IsNotEmpty()
    description! : string

    @IsString()
    @IsNotEmpty()
    instructor! : string

    @IsNumber()
    @IsNotEmpty()
    price! : number

    @IsString()
    @IsNotEmpty()
    thumbnail! : string
}
