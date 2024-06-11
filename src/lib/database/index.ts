import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'eventus',
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  return cached.conn;
}

// import mongoose from "mongoose";
// declare global {
//   var mongoose: any; // This must be a `var` and not a `let / const`
// }
// console.log("MONGODB_URI", process.env.MONGODB_URI_DEVELOPMENT);
// console.log("MONGODB_URI", process.env.MONGODB_URI_PRODUCTION);

// const MONGODB_URI =
//   // process.env.NODE_ENV === "development"
//     // ? 
//     process.env.MONGODB_URI_DEVELOPMENT!
//     // : process.env.MONGODM_URI_PRODUCTION!;

// console.log("MONGODB_URI", MONGODB_URI);

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local",
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//       // dbName: "eventus",
//     };
//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   try {
//     cached.conn = await cached.promise;
//     console.log("newlyConnected", cached.conn);
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }

//   return cached.conn;
// }

// export default connectToDatabase;
