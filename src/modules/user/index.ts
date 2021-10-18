import { User as IUser } from "./interfaces"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import { TYPES } from "../types.inversify"
import { DataBase } from "../data-base/interfaces"

@injectable()
export class User implements IUser {
    public name: string = "vlad"

    @inject(TYPES.DataBase) private _db: DataBase | undefined

    read(): void {
        const data = this._db?.getData()
        console.log(this.name, "read", data)
    }

    write(data: string): void {
        this._db?.setData(data)
        console.log(this.name, "wrote", data)
    }

}