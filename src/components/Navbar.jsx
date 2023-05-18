import { Stack } from "@mui/material"; 
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone-bleue.png"
        alt="logo"
        height={60}
      />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar