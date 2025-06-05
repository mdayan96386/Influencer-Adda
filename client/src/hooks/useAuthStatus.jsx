import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const { user } = useSelector((state) => state.auth);

  const [checkUserLoading, setCheckUserLoading] = useState(true);
  const [userExist, setCheckUserExist] = useState(false);

  useEffect(() => {
    user ? setCheckUserExist(true) : setCheckUserExist(false);
    setCheckUserLoading(false);
  }, [user]);

  return { checkUserLoading, userExist };
};

export default useAuthStatus;
