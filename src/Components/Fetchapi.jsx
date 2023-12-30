import { useApi } from "./customHooks/useApi";
const Fetchapi = () => {
  let { error, loading, users } = useApi("https://fakestoreapi.com/products");
  return (
    <div>
      {error && <h1>Error</h1>}
      {loading && <h1>Loading</h1>}
      {users.map(({ id, image }) => (
        <div key={id}>
          <img height="200px" src={image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Fetchapi;
