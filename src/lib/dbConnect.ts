import mongoose from "mongoose";

type ConnectionObject = {
  isConnedted?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnedted) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnedted = db.connections[0].readyState;

    console.log("DB connected Successfully");
  } catch (error) {
    console.log("DAtabase connection failed", error);

    process.exit(1);
  }
}

export default dbConnect;
