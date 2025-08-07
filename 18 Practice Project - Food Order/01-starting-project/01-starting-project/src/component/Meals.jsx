import useHttp from "../hooks/useHttp";
import Error from "./Error";
import Item from "./Items";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3002/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  return (
    <ul id="meals">
      {loadMeals.map((m) => (
        <Item key={m.id} m={m} />
      ))}
    </ul>
  );
}
