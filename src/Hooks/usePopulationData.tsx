import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

function usePopulationData() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        const jsonData = await response.json();
        const responseData = jsonData.data.reverse();
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

export default usePopulationData;
