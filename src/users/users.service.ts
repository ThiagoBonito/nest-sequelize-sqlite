import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO, CreateUserRoleDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Op } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
    @Inject('ROLE_REPOSITORY') private readonly roleRepository: typeof Role
  ) {}

  create(createUserDTO: CreateUserDTO) {
    return this.userRepository.create<User>({
      ...createUserDTO
    });
  }

  findAll() {
    return this.userRepository.findAll()
  }

  getUsersWithRoles() {
    return this.userRepository.findAll({
      include: [
        {
          model: Role,
          required: true,
          where: {
            id: {
              [Op.ne]: null,
            },
          }
        }
      ],
      order: [['id', 'ASC']]
    });
  }

  findOne(id: number) {
    return this.userRepository.findByPk(id);
  }

  update(updateUserDTO: UpdateUserDTO) {
    const id = updateUserDTO.id;
    delete updateUserDTO.id;

    return this.userRepository.update<User>(updateUserDTO, {
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.userRepository.destroy({
      where: {
        id
      }
    })
  }

  createRole(createUserRoleDTO: CreateUserRoleDTO) {
    const role = {...createUserRoleDTO, updatedAt: new Date(), createdAt: new Date()};

    return this.userRepository.create<Role>({
      ...role
    });
  }
}
