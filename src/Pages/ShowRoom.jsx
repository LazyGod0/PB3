import React, { useEffect, useState } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { db } from "../firebase/firebase";
import { collection, getDocs,deleteDoc } from "firebase/firestore";
import {
  Box,
  Container,
  Typography,
  Grid2,
  CircularProgress,
} from "@mui/material";
import NavBar from "../Component/NavBar";
import { toast, ToastContainer } from "react-toastify";

function ShowRoom() {
  const [loading, setLoadding] = useState(false);
  const [row, setRow] = useState([]);

  const deleteRoom = async (id) => {
    await deleteDoc(doc(db, "Room", id));
  }

  useEffect(() => {
    setLoadding(true);
    try {
      const fetchData = async () => {
        const roomsCollectionRef = collection(db, "Room");
        const querySnapshot = await getDocs(roomsCollectionRef);
        const roomsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRow(roomsList);
      };
      fetchData();
    } catch (error) {
      toast.error(error, {
        position: "top-center",
      });
    }
    setLoadding(false);
  }, [row]);
  const columns = [
    {
      field: "roomNumber",
      headerName: "หมายเลขห้อง",
      flex: 1,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "roomType",
      headerName: "ประเภทห้อง",
      flex: 2,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "roomDetail",
      headerName: "รายละเอียดห้อง",
      flex: 2,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "rent",
      headerName: "ค่าห้อง",
      flex: 1,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "roomStatus",
      headerName: "สถานะห้อง",
      flex: 1,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'แก้ไข',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            // onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteRoom(id)}
            color="inherit"
          />,
        ];
      },
    }
  ];

  function CustomColumnMenu(props) {
    return (
      <GridColumnMenu
        {...props}
        slots={{
          // Hide `columnMenuColumnsItem`
          columnMenuColumnsItem: null,
        }}
      />
    );
  }
function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
      setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };}
  return (
    <>
      <ToastContainer />
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={70} />
        </Box>
      ) : (
        <Box>
          <NavBar />
          <Container>
            <Grid2 size={12} sx={{ mt: 4, mb: 4 }}>
              <Typography
                variant="h5"
                sx={{ color: "#16325B", fontWeight: "700" }}
              >
                รายการห้องทั้งหมด
              </Typography>
            </Grid2>
            <DataGrid
            
              rows={row}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              slots={{ columnMenu: CustomColumnMenu }}
              disableColumnResize={true}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              sx={{
                " .MuiDataGrid-row:nth-of-type(odd)": {
                  backgroundColor: "#78B7D0",
                },
                " .MuiDataGrid-row:nth-of-type(even)": {
                  backgroundColor: "#F2F3F4",
                },
                " .MuiDataGrid-cell": {
                  color: "#000",
                },
              }}
            />
          </Container>
        </Box>
      )}
    </>
  );
}

export default ShowRoom;
