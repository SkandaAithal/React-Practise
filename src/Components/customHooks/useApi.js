import axios from "axios";
import { useEffect, useState } from "react";

function useApi(url) {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  useEffect(() => {
    async function getusersData() {
      try {
        let { data } = await axios.get(url);
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }
    getusersData();
  }, [url]);

  return { error, loading, users };
}
export { useApi };
