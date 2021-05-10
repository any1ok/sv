import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/model.user';


import * as pg from 'pg';
pg.defaults.parseInt8 = true;


export const databaseProviders = [
  {
    provide: Sequelize,
    useFactory: async () => {
      const sequelize = new Sequelize('DATABASE_URL');
      sequelize.addModels([User]);

      await sequelize.sync({ force: true });
      return sequelize;
    },
  },
];
