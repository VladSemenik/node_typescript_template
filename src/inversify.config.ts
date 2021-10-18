import { TYPES } from "./modules/types.inversify"
import "reflect-metadata"
import { DataBase as IDataBase } from "./modules/data-base/interfaces"
import { DataBase } from "./modules/data-base"
import { User as IUser } from "./modules/user/interfaces"
import { User } from "./modules/user"
import { Container } from "inversify"

const container = new Container()

container.bind<IDataBase>(TYPES.DataBase).to(DataBase)
container.bind<IUser>(TYPES.User).to(User)

export { container }