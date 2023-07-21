import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { createUserProfile } from "../../features/profile/profileSlice.js";

const CreateProfile = () => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.id);
  // const [user_id, setUser_id] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUserProfile({ user_id, bio, location }));
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
      <button type="submit">Create Prrofile</button>
    </form>
  );
};

export default CreateProfile;
