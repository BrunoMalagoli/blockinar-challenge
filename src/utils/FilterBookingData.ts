import { bookingItemType, filterValuesType } from "../pages/BookingsPage/types";

//This function checks what input have values and then filters and sets the data on the newArray, this allows the filters to be independent

export default async function filterBookingData(
  allBookingsData: bookingItemType[] | any,
  filterValues: filterValuesType
) {
  try {
    let newArray = allBookingsData.slice();
    //Id filter values check
    if (filterValues.idFilter !== 0) {
      let arrayById = await newArray.filter((bookingItem: bookingItemType) => {
        return bookingItem.id === filterValues.idFilter;
      });
      newArray = arrayById;
      if (filterValues.lastNameFilter.length > 1) {
        let arrayByLastname = await newArray.filter(
          (bookingItem: bookingItemType) =>
            bookingItem.last_name === filterValues.lastNameFilter
        );
        newArray = arrayByLastname;
        if (filterValues.dateFilter.length > 1) {
          let arrayByDate = await newArray.filter(
            (bookingItem: bookingItemType) => {
              let date = bookingItem.check_in_date.split("T");
              return filterValues.dateFilter == date[0];
            }
          );
          newArray = arrayByDate;
        }
      }
      //Lastname filter values check
    } else if (filterValues.lastNameFilter.length > 1) {
      let arrayByLastname = await newArray.filter(
        (bookingItem: bookingItemType) =>
          bookingItem.last_name === filterValues.lastNameFilter
      );
      newArray = arrayByLastname;
      if (filterValues.dateFilter.length > 1) {
        let arrayByDate = await newArray.filter(
          (bookingItem: bookingItemType) => {
            let date = bookingItem.check_in_date.split("T");
            return filterValues.dateFilter == date[0];
          }
        );
        newArray = arrayByDate;
      }
      //Date filter values check
    } else if (filterValues.dateFilter.length > 1) {
      let arrayByDate = await newArray.filter(
        (bookingItem: bookingItemType) => {
          let date = bookingItem.check_in_date.split("T");
          console.log(filterValues.dateFilter == date[0]);
          return filterValues.dateFilter == date[0];
        }
      );
      newArray = arrayByDate;
    }
    console.log(newArray);
    return newArray;
  } catch (error) {
    console.log(error);
    throw new Error(error as any);
  }
}
