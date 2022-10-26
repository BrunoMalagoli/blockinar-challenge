//GET All Bookings
const API_ENDPOINT = import.meta.env.VITE_URL_ENDPOINT_URL;

export default async function getBookings() {
  try {
    let response = await fetch(`${API_ENDPOINT}/bookings`);
    return response.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
