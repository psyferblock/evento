import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
// initializing a cached variable 
// attempting to retrieve a mongoose property from the global object.
// gglobal as any will create the type of cached from mongoose itself
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    // checking if cached is already connecting 
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  //here we connect to an existing connection or create a new one  
  cached.promise =cached.promise || mongoose.connect(MONGODB_URI,{dbName:"eventus",bufferCommands:false  })
  cached.conn = await cached.promise
  return cached.conn
};
