import { Sequelize } from "sequelize-typescript";
import { Role } from "src/users/entities/role.entity";
import { User } from "src/users/entities/user.entity";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite',
        logging: false
      });
      sequelize.addModels([User, Role]);
      await sequelize.sync({ force: false });
      return sequelize;
    },
  },
];