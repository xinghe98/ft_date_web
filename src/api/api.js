import axios from "axios";
// 获取用户的详细信息
export const getUsers = async () => {
  const response = await axios.get("/api/newusers");
  return response.data;
}

// 获取每日数据
export const getDailyData = async () => {
  const response = await axios.get("/api/data");
  return response.data;
}

// 新增今日数据

export const addDailyData = async (data) => {
  const response = await axios.post("/api/data", data);
  return response.data;
}
// 创建成功用户
export const createUser = async (data) => {
  const response = await axios.post("/api/newusers", data);
  return response.data;
}