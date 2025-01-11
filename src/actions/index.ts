import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { db, Message } from "astro:db";
import { sendNotificationEmail } from "../utils/mailer";
import { nanoid } from "nanoid";

export const server = {
  addMsg: defineAction({
    input: z.object({
      name: z.string().min(3),
      email: z.string().email(),
      message: z.string().min(10),
    }),
    handler: async ({ name, email, message }) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        await db.insert(Message).values({
          id: nanoid(),
          name: name,
          email: email,
          message: message,
          ip: "not implemented yet",
        });
        console.log(process.env.NODE_ENV);
        if (process.env.NODE_ENV !== "development") {
          await sendNotificationEmail({
            name: name,
            email: email,
            message: message,
          });
        }
      } catch (error) {
        console.log(error);
        throw new Error("Failed to send message");
      }
      return { success: true, message: "Message sent" };
    },
  }),
};
