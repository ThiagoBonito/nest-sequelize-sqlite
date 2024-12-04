import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user.dto';
import { IsNumber } from 'class-validator';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {
    @IsNumber()
    id: number;
}
