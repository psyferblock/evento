import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
import React from "react";

type UserPublicMetadata={
  userId:string,
  userName:string
}
const CreateEvent = () => {
  const { sessionClaims } = auth();
  const userPublicMetadata = sessionClaims?.userPublidMetadata as UserPublicMetadata;
  const userId=userPublicMetadata.userId

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left"></h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
