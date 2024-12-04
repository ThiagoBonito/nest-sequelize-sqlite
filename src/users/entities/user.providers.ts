import { Role } from "./role.entity";
import { User } from "./user.entity";

export const usersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
  {
    provide: 'ROLE_REPOSITORY',
    useValue: Role,
  },
];