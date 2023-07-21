import { useDispatch, useSelector } from "react-redux";
import { deleteUserProfile } from "../../features/profile/profileSlice.js";

const DeleteProfile = () => {
  const dispatch = useDispatch();
  const profile_id = useSelector((state) => state.user.profileId);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteUserProfile(profile_id));
  };

  return (
    <form onSubmit={handleSubmit}>
      
     
      <button type="submit">Delete Prrofile</button>
    </form>
  );
};

export default DeleteProfile;
