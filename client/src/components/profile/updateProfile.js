import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../features/profile/profileSlice.js";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [user_id, setUser_id] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({user_id, bio, location }));
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
      <input
        type="text"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        required
      />
      <button type="submit">Update Prrofile</button>
    </form>
  );
};

export default UpdateProfile;
