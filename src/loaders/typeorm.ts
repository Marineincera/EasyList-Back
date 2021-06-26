import { createConnection } from "typeorm";
import { Child } from "../entities/child.entity";
import { Groupdemand } from "../entities/groupdemand.entity";
import { Groupevent } from "../entities/groupevent.entity";
import { Item } from "../entities/item.entity";
import { List } from "../entities/list.entity";
import { Typeitem } from "../entities/typeitem.entity";
import { Typelist } from "../entities/typelist.entity";
import { User } from "../entities/user.entity";
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
        Typeitem,
        Groupevent,
        Groupdemand
      ],
      synchronize: true,
    });
  };