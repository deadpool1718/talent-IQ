import { StreamChat } from "stream-chat";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("SSTREAM_API_SECRET and STREAM_API_SECRET is missing.");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData)
    console.log("Stream-User upserted successfully:",userData)
  } catch (error) {
    console.error("Error upserting stream user:", error);
  }
};
export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUsers([userId]);
    console.log("Stream-User deleted successfully");
  } catch (error) {
    console.error("Error deleting serting stream user:", error);
  }
};


//todo add another method to generate token