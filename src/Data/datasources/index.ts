import PocketBase from "pocketbase"

const db = new PocketBase("http://localhost:8090")

export { db }