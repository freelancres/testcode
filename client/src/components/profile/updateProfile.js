import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../features/profile/profileSlice.js";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const profileId = useSelector((state) => state.user.profileId);
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({profileId, bio, location }));
  };

  return (
    <form onSubmit={handleSubmit}>
      
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
