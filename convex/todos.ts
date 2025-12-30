import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/* =======================
   GET TODOS
======================= */
export const getTodos = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("todos")
      .order("desc")
      .collect();
  },
});

/* =======================
   ADD TODO
======================= */
export const addTodo = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, { text }) => {
    return await ctx.db.insert("todos", {
      text,
      iscompleted: false, // ✅ FIXED casing
    });
  },
});

/* =======================
   TOGGLE TODO
======================= */
export const toggleTodo = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, { id }) => {
    const todo = await ctx.db.get(id);

    if (!todo) {
      console.warn("Toggle skipped — todo not found:", id);
      return;
    }

    await ctx.db.patch(id, {
      iscompleted: !todo.iscompleted,
    });
  },
});

/* =======================
   UPDATE TODO (NEW — FIX)
======================= */
export const updateTodo = mutation({
  args: {
    id: v.id("todos"),
    text: v.string(),
  },
  handler: async (ctx, { id, text }) => {
    const todo = await ctx.db.get(id);

    if (!todo) {
      console.warn("Update skipped — todo not found:", id);
      return;
    }

    await ctx.db.patch(id, {
      text,
    });
  },
});

/* =======================
   DELETE TODO
======================= */
export const deleteTodo = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, { id }) => {
    const todo = await ctx.db.get(id);

    if (!todo) {
      console.warn("Delete skipped — todo already deleted:", id);
      return;
    }

    await ctx.db.delete(id);
  },
});

/* =======================
   CLEAR ALL TODOS
======================= */
export const clearAllTodos = mutation({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").collect();

    for (const todo of todos) {
      await ctx.db.delete(todo._id);
    }

    return { deletedCount: todos.length };
  },
});
