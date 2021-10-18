import { container } from "./inversify.config"
import { User as IUser } from "./modules/user/interfaces"
import { TYPES } from "./modules/types.inversify"

const user = container.get<IUser>(TYPES.User)

user.read()
user.write("inversify first project")

console.log(user)