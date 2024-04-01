import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

function useCryptoData() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const jsonData = await response.json();
        const responseData = jsonData.bpi;
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        toast.error("Error fetching data:");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, data };
}

export default useCryptoData;
