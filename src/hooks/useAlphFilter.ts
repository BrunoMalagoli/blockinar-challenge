import { useContext, useEffect, useState } from "react";
import DataContext from "../contexts/DataContext/DataContext";
import { bookingItemType } from "../pages/BookingsPage/types";
export default function useAlphFilter(): any {
  const { allBookingsData } = useContext(DataContext);
  const [orderedArray, setOrderedArray] = useState<bookingItemType[]>([]);
  useEffect(() => {
    if (allBookingsData) {
      //Using Slice method to get a copy of the array and order it without mutating original array
      let dataArray = allBookingsData.slice();
      let sortedArray = dataArray
        .slice()
        .sort((a: bookingItemType, b: bookingItemType) => {
          return a.last_name.localeCompare(b.last_name);
        });
      setOrderedArray(sortedArray);
    }
  }, []);

  return { orderedArray };
}
