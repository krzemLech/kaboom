import { defineDb, defineTable, column } from "astro:db";
import { nanoid } from "nanoid";

const Message = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      default: nanoid(),
    }),
    name: column.text(),
    email: column.text(),
    message: column.text(),
    ip: column.text(),
    createdAt: column.date({
      notNull: true,
      default: new Date(),
    }),
  },
});

export default defineDb({
  tables: { Message },
});
