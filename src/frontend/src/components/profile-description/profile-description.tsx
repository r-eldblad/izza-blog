import { Box, Typography } from "@mui/material";
import profilePhoto from "../../../public/images/profile.jpg";
import "./profile-description.css";

const ProfileDescription = () => {
  return (
    <div>
      <Box className="profile">
        <img className="profile-photo" src={profilePhoto} alt="profile-pic" />
        <Typography className="profile-description">
          Tjenna! <br />
          Namn: Izabelle <br />
          Bor: Sandviken (Gävleborgs Län), men väntar på att få flytta tillbaka
          till Dalarna igen och bosätta mig i Falun. <br />
          Ålder: Född 17 februari 1991. <br />
          Här kommer ni kunna få följa med mig och mitt kaotiska liv helt enkelt
          och se vad jag har att erbjuda livet.
        </Typography>
      </Box>
    </div>
  );
};

export default ProfileDescription;
