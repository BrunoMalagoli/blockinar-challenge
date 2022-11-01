type roomItem = {
  category: string;
  id: number;
  max_occupancy: number;
  occupancy: number;
  status?: string;
};

export default async function getRoomOcuppation(roomsData: roomItem[]) {
  function roomOccupationPercentage(occupation: number) {
    let percentage = (occupation / roomsData.length) * 100;
    return percentage;
  }
  function roomUnoccupationPercentage(unoccupation: number) {
    let percentage = (unoccupation / roomsData.length) * 100;
    return percentage;
  }
  let response;
  let occupationCount = 0;
  let unoccupationCount = 0;
  roomsData.map((room) => {
    room.occupancy > 0 ? occupationCount++ : unoccupationCount++;
  });
  response = [
    {
      type: "occupated_rooms",
      value: roomOccupationPercentage(occupationCount),
    },
    {
      type: "unoccupated_rooms",
      value: roomUnoccupationPercentage(unoccupationCount),
    },
  ];
  return response;
}
