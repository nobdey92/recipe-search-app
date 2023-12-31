import * as React from "react";
import {
  createTheme,
  Stack,
  Typography,
  ThemeProvider,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import jordanHobdey from "../img/jordanHobdey.png";
import yanaKozarenko from "../img/yanaKozarenko.jpg";
import marianaBarbieru from "../img/marianaBarbieru.jpg";
import salmanGanatra from "../img/salmanGanatra.png";

export const AboutUs = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Pacifico"].join(","),
    },
  });

  return (
    <Stack>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h3"
          component="div"
          textAlign="center"
          marginTop="20px"
        >
          About Us
        </Typography>
      </ThemeProvider>

      <Stack
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-around"
        spacing={3}
        maxHeight="20%"
        flexWrap="wrap"
      >
        <Card
          sx={{
            flex: "1 1 22%",
            textAlign: "center",
            alignContent: "center",
            marginTop: "24px",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{
              height: "200px",
              maxWidth: "200px",
              borderRadius: "50%",
              margin: "auto",
            }}
            image={jordanHobdey}
            title="jordan Hobdey"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              Jordan Hobdey
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Currently working in Industrial Temporary and Permanent
              Recruitment and approching my 10th year. I have always had an
              interest in all things IT and regularly get called the "IT
              department". I basically just check for updates and turn things
              off and on again as Roy from the IT Crowd always suggests needs to
              be done. Started building my own PC's just before covid lockdown
              began which really got my computer and IT knowledge juices flowing
              which is how I ended up enrolling on this course now. All my
              knowledge is completely self-taught apart from the knowledge
              gained in this course.
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              marginTop: "auto",
              justifyContent: "center",
              justifyItems: "flex-end",
            }}
          >
            <Button
              target="_blank"
              href="https://github.com/nobdey92"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: "black", fontSize: "2.2rem" }} />
            </Button>

            <Button
              target="_blank"
              href="https://github.com/nobdey92"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            flex: "1 1 22%",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <CardMedia
            sx={{
              height: "200px",
              maxWidth: "200px",
              borderRadius: "50%",
              margin: "auto",
            }}
            image={yanaKozarenko}
            title="yana Kozarenko"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Yana Kozarenko
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend Developer, student Purple Beard Frontend Development
              Bootcamp. Skills: JavaScript, HTML5, CSS, React, Bootstrap, MUI.
              Passionate about Maths, AI.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              target="_blank"
              href="https://github.com/GreenCatInForest"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: "black", fontSize: "2.2rem" }} />
            </Button>

            <Button
              target="_blank"
              href="https://www.linkedin.com/in/yana-kozarenko-237ba5191/"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            flex: "1 1 22%",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <CardMedia
            sx={{
              height: "200px",
              maxWidth: "200px",
              borderRadius: "50%",
              margin: "auto",
            }}
            image={marianaBarbieru}
            title="mariana Barbieru"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mariana Barbieru
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I am an electrical technician professional with a passion for
              technology and have recently started and intensive course in
              frontend development. Currently working in assembling the
              company’s products from schematic drawings. This involve producing
              electrical circuits and sub-circuits. I am carrying out final
              checks and also work with electrical, electronic components and
              sub-assemblies as required.I like working in a fast-paced
              environment and responding to tight deadlines to help achieve
              organisational goals.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              target="_blank"
              href="https://github.com/MarianaBarbieru34"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: "black", fontSize: "2.2rem" }} />
            </Button>

            <Button
              target="_blank"
              href="https://www.linkedin.com/in/mariana-barbieru-687647272/"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            flex: "1 1 22%",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <CardMedia
            sx={{
              height: "200px",
              maxWidth: "200px",
              borderRadius: "50%",
              margin: "auto",
            }}
            image={salmanGanatra}
            title="salman Ganatra"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Salman Ganatra
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I am a Maths teacher with an interest in coding. I have recently
              started a journey into front end web development.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              target="_blank"
              href="https://github.com/salubaba10"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: "black", fontSize: "2.2rem" }} />
            </Button>

            <Button
              target="_blank"
              href="https://github.com/salubaba10"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "2.5rem" }} />
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
};
