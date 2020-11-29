import { createConnection } from "typeorm";
import { Typegroup } from "../entities/typegroup.entity";

export default async () => {
    await createConnection({
      type: "mysql",
      port: 3306,
      username: "",
      database: "",
      entities: [
        Typegroup
      ],
      synchronize: true,
    });
  };