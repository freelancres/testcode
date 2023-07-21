import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../features/profile/profileSlice.js";

const GetProfile = () => {
  const dispatch = useDispatch();
  const profile_id = useSelector((state) => state.user.profileId);

  // const [profile_id, setprofile_id] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserProfile(profile_id));
  };

  return (
    <form onSubmit={handleSubmit}>
           
      <button type="submit">Get Prrofile</button>
    </form>
  );
};

export default GetProfile;
