import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUserProfile } from "../../features/profile/profileSlice.js";

const DeleteProfile = () => {
  const dispatch = useDispatch();
  const [user_id, setUser_id] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteUserProfile(user_id));
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
     
      <button type="submit">Delete Prrofile</button>
    </form>
  );
};

export default DeleteProfile;
