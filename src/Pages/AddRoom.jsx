import React from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
  Button,
  Grid2,
  Typography,
  Container,
  Stack
} from "@mui/material";
import NavBar from "../Component/NavBar";

function AddRoom() {
  return (
    <>
      <NavBar />
      <Container width={"750px"}>
        <Stack spacing={2}>
        <Typography>เพิ่มห้องพัก</Typography>
        <Box sx={{display:'flex',gap:'10px'}}>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Room Number</InputLabel>
            <OutlinedInput id="component-outlined" label="Name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Room Number</InputLabel>
            <OutlinedInput id="component-outlined" label="Name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Room Number</InputLabel>
            <OutlinedInput id="component-outlined" label="Name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Room Number</InputLabel>
            <OutlinedInput id="component-outlined" label="Name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Room Number</InputLabel>
            <OutlinedInput id="component-outlined" label="Name" />
          </FormControl>
        </Box>
        </Stack>
      </Container>
    </>
  );
}

export default AddRoom;
