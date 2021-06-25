import { createConnection } from "typeorm";
import { Typegroup } from "../entities/typegroup.entity";

export default async () => {
    await createConnection({
      type: "mysql",
      port: 3306,
      username: process.env.EASYLIST_USER,
      database: process.env.EASYLIST_DB,

      entities: [
        Typegroup
      ],
      synchronize: true,
    });
  };