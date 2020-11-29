import { createConnection } from "typeorm";

export default async () => {
    await createConnection({
      type: "mysql",
      port: 3306,
      username: "root",
      database: "easylist",
      entities: [

      ],
      synchronize: true,
    });
  };