// import {} from "@mui/material"

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Footer() {
  return (
    <>
      <Box sx={{ marginTop: "10px",}}>
        <Divider orientation="horizontal" role="contentinfo">
          <Typography align="center" fontWeight="bold">
            <Link
              href="https://www.linkedin.com/in/emmanuel-dodoo-b97108231/"
              target="_blank"
              rel="noopener"
              underline="hover"
              aria-label="Find out more about Emmanuel on his LinkedIn page"
              color="secondary"
            >
              Emmanuel
              <LinkedInIcon fontSize="small" />
            </Link>{" "}
            Made with{" "}
            <Link
              href="https://mui.com/"
              target="_blank"
              rel="noopener"
              underline="hover"
              aria-label="Material UI home page"
              color="secondary"
            >
              Material UI <LaunchIcon sx={{ fontSize: "14px" }} />
            </Link>
          </Typography>
        </Divider>
      </Box>
    </>
  );
}
