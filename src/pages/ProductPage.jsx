import SingleProduct from "../components/ProductPage";

import { 
  useState, 
  useEffect 
} from "react";

import { useParams } from "react-router-dom";

/**
 * ProductPage component displays a single product based on the provided ID.
 * @returns {JSX.Element} The rendered ProductPage component.
 */
export default function ProductPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    /**
     * Fetches the product data from the API based on the provided ID.
     * Updates the component state accordingly.
     * @returns {void}
     */
    async function fetchData() {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true); // Update error state
      } finally {
        setIsLoading(false); // Set loading state to false when fetching is done
      }
    }

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading, please wait...</div>; // Render loading state
  }

  if (isError || !data) {
    return <div>Error: Failed to fetch data. Please try again later.</div>; // Render error state
  }

  return <SingleProduct key={data.id} {...data} />;
}
