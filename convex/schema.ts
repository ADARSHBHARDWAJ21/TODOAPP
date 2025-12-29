import {defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
    todos: defineTable({
        text: v.string(),
        iscompleted: v.boolean(),
     
}), 
users: defineTable({
    f: v.string(),
    iscompleted: v.boolean()

}),
})