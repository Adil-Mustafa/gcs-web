import axios from "axios";
export const getDays = async () => {
  const apiUrl = "http://gcstimetable.xyz/api/days?institutionid=1";
  const response = await axios.get(apiUrl);
  return response.data;
};

export const saveDay = async ({ body, selectedDay }) => {
  const apiUrl = `http://gcstimetable.xyz/api/days${
    selectedDay ? "/" + selectedDay.id : ""
  }`;

  const response = await axios({
    url: apiUrl,
    method: selectedDay ? "PUT" : "POST",
    data: body,
  });
  console.log("FIRSTDAYYYYYYYYYYY", response.data);
  return response.data;
};

export const deleteDay = async (id) => {
  console.log("DELETEDAYYYY", id);
  const apiUrl = `http://gcstimetable.xyz/api/days/${id}`;

  const response = await axios.delete(apiUrl);
  console.log("RESPONSEEE", response.data, "RESPONSEEE");
  return response.data;
};
