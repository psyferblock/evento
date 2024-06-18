import { IEvent } from '@/lib/database/models/event.model'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardProps = {
    event: IEvent,
    hasOrderLink?: boolean,
    hidePrice?: boolean
  }
const Card = ({event,hasOrderLink,hidePrice}:CardProps) => {
    const { sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;
  
    const isEventCreator = userId === event.organizer._id.toString();
  
  return (
    <div className='group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]'>
 <Link 
        href={`/events/${event._id}`}
        style={{backgroundImage: `url(${event.imageUrl})`}}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />       

      {isEventCreator && !hidePrice &&(
           <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
           <Link href={`/events/${event._id}/update`}>
             <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
           </Link>
 
           {/* <DeleteConfirmation eventId={event._id} /> */}
         </div>
      )}
    </div>
  )
}

export default Card