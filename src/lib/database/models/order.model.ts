import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Order = models.Order || model("Order", orderSchema);

export default Order;
