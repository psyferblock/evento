import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import { Button } from "../ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "@/lib/actions/order.actions";

const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
loadStripe(STRIPE_KEY);
const Checkout = ({ event, userId }: { event: IEvent; userId: string }) => {
  console.log('userId from checkout props', userId)
  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    console.log('query', query)
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }
    
    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready.",
        );
      }
    }, []);

    const onCheckout = async () => {
      const order = {
        eventTitle: event.title,
        eventId: event._id,
        price: event.price,
        isFree: event.isFree,
        buyerId: userId,
      };
      await checkoutOrder(order);
    };
  return (
    <form action={onCheckout} >
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? "getTicket" : "Buy Ticker"}
      </Button>
    </form>
  );
};

export default Checkout;
