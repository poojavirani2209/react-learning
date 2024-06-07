import "./Profile";
import profiles from "../data/profiles.json";
import Profile from "./Profile";

export default function Gallery() {
  const listItems = profiles.map((profile) => {
   return <Profile profile={profile} />;
  })
  return <ul>{listItems}</ul>;
}
