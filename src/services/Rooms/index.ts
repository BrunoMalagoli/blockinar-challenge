//GET All rooms
const API_ENDPOINT = import.meta.env.VITE_URL_ENDPOINT_URL;
export default async function getRooms() {
  try {
    let response = await fetch(`${API_ENDPOINT}/rooms`);
    return response.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
