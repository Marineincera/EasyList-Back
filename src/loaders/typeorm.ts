import { Child } from "src/entities/child.entity";
import { Item } from "src/entities/item.entity";
import { List } from "src/entities/list.entity";
import { Typeitem } from "src/entities/typeitem.entity";
import { Typelist } from "src/entities/typelist.entity";
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
        User,
        List,
        Child,
        Typelist,
        Item,
        Typeitem
      ],
      synchronize: true,
    });
  };