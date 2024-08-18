import axios from "axios";

const fetchTokenList = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching token list:", error);
  }
};

export default fetchTokenList;
