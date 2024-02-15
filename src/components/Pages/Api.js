import axios from "axios";

const API_URL = "http://192.168.1.103:8000/menu/menuroute/find";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZkNzFjMDMyNDlmMjU0NjYwNWYyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzg0NjU1OX0.C4vrYNXwLKZ7tP-u8JRUnBCV_AYmed4U5lCo2_an7A4";

export const getMenuItems = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch menu items");
  }
};
export const addMenuItem = async (formData) => {
  try {
    const response = await axios.post(
      "http://192.168.1.103:8000/menu/menuroute/add",
      formData,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch menu items");
  }
};

// export const getBreakfastItems = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch menu items");
//   }
// };
// export const getLunchItems = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch menu items");
//   }
// };
// export const getShakesItems = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     throw new Error("Failed to fetch menu items");
//   }
// };
