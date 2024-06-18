import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.actions";
import { UpdateEventParams } from "@/types";
import { auth } from "@clerk/nextjs/server";
import React from "react";

type UpdateEventProps = {
  params: {
    id: string;
  };
};
type UserPublicMetadata = {
  userId: string;
  userName: string;
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const { sessionClaims } = auth();
  const userPublicMetadata =
    sessionClaims?.userPublidMetadata as UserPublicMetadata; ;
  const userId = userPublicMetadata.userId
  console.log('userId', userId)
  const event = await getEventById(id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Update Event</h3>
      </section>
      <div className="wrapper my-8">
        <EventForm
          userId={userId}
          type="Update"
          event={event}
          eventId={event._id}
        />
      </div>
    </>
  );
};

export default UpdateEvent;
