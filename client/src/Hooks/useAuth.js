import React, { useEffect, useState } from "react";
import useGetData from "./useGetData";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const { getToken } = useGetData();

  useEffect(() => {
    getToken().then((res) => {
      if (res.message === "jwt malformed") {
        return setUser("");
      }

      setUser(res);
    });
  }, []);

  return [user];
};

export default useAuth;
