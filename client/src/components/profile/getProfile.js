import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../../features/profile/profileSlice.js";

const GetProfile = () => {
  const dispatch = useDispatch();
  const [user_id, setUser_id] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserProfile(user_id));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user_id}
        onChange={(e) => setUser_id(e.target.value)}
        placeholder="ID"
        required
      />
     
      <button type="submit">Get Prrofile</button>
    </form>
  );
};

export default GetProfile;
