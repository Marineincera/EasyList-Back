import { User } from "src/entities/user.entity";
import { createConnection } from "typeorm";
import { Typegroup } from "../entities/typegroup.entity";

export default async () => {
    await createConnection({
      type: "mysql",
      port: 3306,
      username: process.env.EASYLIST_USER,
      database: process.env.EASYLIST_DB,
      password : process.env.EASYLIST_PASSWORD,
      entities: [
        Typegroup,
        User
      ],
      synchronize: true,
    });
  };