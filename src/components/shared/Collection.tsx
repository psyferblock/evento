import { IEvent } from "@/lib/database/models/event.model";
import React from "react";


type CollectionProps ={
    data:IEvent,
    emptyTitle:string,
    emptyStateSubtext:string,
    limit:number,
    page :number| string,
    totalPages? :number,
    urlPathName?:string,
    collectionType:"Events_Organized" | "My_Tickets"|"All_Events" ,
}
const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages = 0,
  urlPathName,
} :CollectionProps) => {
  return <div>Collection</div>;
};

export default Collection;
