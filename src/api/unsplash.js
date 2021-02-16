import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID buHfJPa8olyFRiE74SvsIspNIySpZT_FrR9u9tm6XJM",
  },
});
