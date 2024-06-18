import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { createUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const events = await getAllEvents({
    query: "",
    category: "",
    page: 1,
    limit: 6,
  });
  console.log("events", events);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain p-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold"> Take your Eventus, to the Maximus</h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero image"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        className="wrapper m-8 flex flex-col gap-8 md:gap-12"
        id="events"
      >
        <h2>
          Trusted by <br /> Thousands of events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          serch category filter
        </div>
      </section>
      {/* the naming of the props is designed for the component to be reusable( similat to the types prop when we were at createEvent Component) */}
      <Collection
        data={events?.data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come Back Later"
        collectionType="All_Events"
        limit={6}
        page={1}
        totalPages={2}
      />
    </>
  );
}
