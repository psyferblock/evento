import { getEventById } from "@/lib/actions/event.actions";
import React from "react";

const EventDetailsPage = async ({
  searchParams: { id },
}: {
  searchParams: { id: string };
}) => {
  const event = await getEventById(id);
  return <div>EventDetailsPage</div>;
};

export default EventDetailsPage;
