import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "95b72118be9247748b2aacefe337a3c2",
  },
});
