import { Button, Link, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import Container from "@mui/material/Container";

//home, about me, projects, resume, github, linkedin, email

type NavData = {
  name: string;
  path: string;
};
type IconNavData = NavData & {
  component: ReactJSXElement;
};

const internalNavs: NavData[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#about-me",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Resume",
    path: "Emmanuel-Dodoo-Resume.pdf", //should the resume be on
  },
];

const iconNavs: IconNavData[] = [
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/emmanuel-dodoo-b97108231/",
    component: <LinkedInIcon fontSize="medium" />,
  },
  {
    name: "GitHub",
    path: "https://github.com/EmmanuelDodoo",
    component: <GithubIcon fontSize="medium" />,
  },
  {
    name: "Email",
    path: "mailto:end25@cornell.edu",
    component: <MailOutlineIcon fontSize="medium" />,
  },
];

const internalNavlister = ({ name, path }: NavData) => {
  return (
    <Container key={name + "Navigation"}>
      <Button href={path}>
        <Typography fontWeight="bold" color={"textPrimary"}>
          {name}
        </Typography>
      </Button>
    </Container>
  );
};

const iconNavLister = ({ name, path, component }: IconNavData) => {
  return (
    <Container
      disableGutters
      sx={{ padding: "3px 5px" }}
      key={name + "IconNavigation"}
    >
      <Link
        href={path}
        underline="none"
        target="_blank"
        rel="noopener"
        color="textSecondary"
      >
        {component}
      </Link>
    </Container>
  );
};

export default function Navbar() {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
          marginBottom: "10px",
          borderBottom: "2px solid #70573a",
        }}
      >
        <Stack direction="row" sx={{ paddingLeft: "5%" }}>
          <Typography variant="h6" color="textPrimary">
            Emmanuel Dodoo
          </Typography>
        </Stack>
        <Stack direction={"row"} sx={{ paddingRight: "7%" }}>
          {internalNavs.map((nav) => internalNavlister(nav))}
          {iconNavs.map((icon) => iconNavLister(icon))}
        </Stack>
      </Stack>
    </>
  );
}
