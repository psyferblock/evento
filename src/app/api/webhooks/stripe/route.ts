// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

import { createOrder } from "@/lib/actions/order.actions";
import { NextRequest, NextResponse } from "next/server";

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
const stripe = require("stripe")("sk_test_...");
const express = require("express");
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  "whsec_60e20c6b02370185b96f8075d2c1b8d1edf4d0d1c3acdbfe3fc899b32b7fd1ee";

export async function POST(request: Request) {
  const body = await request.text();

  const sig = request.headers.get("stripe-signature");
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ message: "Webhook error", error: err });
  }

  const eventType = event.type;
  // Handle the event
  if (eventType === "checkout.session.completed") {
    const checkoutSessionCompleted = event.data.object;
    const { id, amount_total, metadata } = checkoutSessionCompleted;
    // Then define and call a function to handle the event checkout.session.completed
    // ... handle other event types
    const order = {
      stripeId: id,
      eventId: metadata?.eventId || "",
      buyerId: metadata?.buyerId || "",
      totalAmount: amount_total ? (amount_total / 100).toString() : "0",
      createdAt: new Date(),
    };
    // Return a 200 response to acknowledge receipt of the event
    
    const newOrder = await createOrder(order);
    return NextResponse.json({ message: "OK", order: newOrder });
  }
  return new Response("", { status: 200 });
}
