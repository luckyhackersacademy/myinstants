import { instantsController } from "~/server/controllers";

export default defineEventHandler(async () => {
  const response = await instantsController.readall();
  return response;
});
