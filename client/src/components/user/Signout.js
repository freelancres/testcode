import { useDispatch } from "react-redux";
import { signoutUser } from "../../features/user/userSlice";

const Signout = () => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signoutUser());
  };

  return <button onClick={handleSignout}>Sign Out</button>;
};

export default Signout;
