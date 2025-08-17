import React from "react";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Contact() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: "#DCDCDC",
        fontWeight: "bold",
        fontFamily: "Roboto, sans-serif",
        textTransform: "uppercase",
        letterSpacing: "2px",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          color="#191970"
        >
          Contact Me
        </Typography>
        <hr />
        <Box component="form" sx={{ mt: 3 }} xs={6} md={4}>
          <TextField
            variant="outlined"
            fullWidth
            label="Name"
            margin="normal"
            placeholder="Enter your Name"
          />
          <TextField
            variant="outlined"
            fullWidth
            label="Email"
            margin="normal"
            placeholder="Enter your Email"
          />
          <TextField
            variant="outlined"
            fullWidth
            label='Number'
            margin="normal"
            placeholder="Enter your Mobile Number"
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={3}
            margin="normal"
          />
          <div>
            <Button onClick={handleClick} variant="outlined" sx={{mx:20,my:2}} href="#home">
              Send Your Messsage
            </Button>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Thank You😊!!!Your Message Is Recieved ✔
              </Alert>
            </Snackbar>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
