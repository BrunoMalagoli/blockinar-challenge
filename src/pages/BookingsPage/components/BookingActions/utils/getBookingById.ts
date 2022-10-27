export default async function getBookingById(bookingId: number) {
  try {
    let response = await fetch(
      `${import.meta.env.VITE_URL_ENDPOINT_URL}/bookings/${bookingId}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error as any);
  }
}
