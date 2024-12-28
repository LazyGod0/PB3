import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Pagination,
} from '@mui/material';
import { useAuth } from '../Auth/useAuthForm';

const RoomSelection = () => {
  const {formData} = useAuth();
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [page, setPage] = useState(1);

  // Mock data for rooms
  const rooms = {
    1: [101,102,103,104,
        105,106,107,108,
        109,110,111,112,
        113,114,115,116
    ],
    2: [201,202,203,204,
        205,206,207,208,
        209,210,211,212,
        213,214,215,216
    ],
    3: [301,302,303,304,
        305,306,307,308,
        309,310,311,312,
        313,314,315,316
    ],
    4: [401,402,403,404,
        405,406,407,408,
        409,410,411,412,
        413,414,415,416]
  };

  // Open/Close dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Handle room selection
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    formData.roomNumber = room;
    handleClose();
  };

  // Handle page change
  const handlePageChange = (event, value) => setPage(value);

  return (
    <Box sx={{width:'50%'}}>
      <TextField
        label="Select Your Room"
        value={selectedRoom}
        onClick={handleOpen}
        fullWidth
        required
      />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>เลือกห้อง</DialogTitle>
        <DialogContent>
          <Box container="div" sx={{display:'grid',gridTemplate:'repeat(4,1fr)/repeat(4,1fr)',gap:'15px'}}>
            {(rooms[page] || []).map((room) => (
              <Box container="div" key={room} sx={{justifySelf:'center'}} >
                <Button
                  variant="contained"
                  onClick={() => handleRoomSelect(room)}
                >
                  {room}
                </Button>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Pagination
              count={Object.keys(rooms).length}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default RoomSelection;
