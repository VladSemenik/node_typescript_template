import { DataBase as IDataBase } from "./interfaces"
import { injectable } from "inversify"
import "reflect-metadata"

@injectable()
export class DataBase implements IDataBase {
    getData(): number {
        console.log("data got from db")
        return Date.now()
    }

    setData(data: any): void {
        console.log("data setted into db", data)
    }

}