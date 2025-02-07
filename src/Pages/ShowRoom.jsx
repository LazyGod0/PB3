import React, { useEffect, useState } from "react";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridColumnMenu, // จำเป็นต้อง import หากใช้ CustomColumnMenu
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  getDoc
} from "firebase/firestore";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import NavBar from "../Component/NavBar";
import { toast, ToastContainer } from "react-toastify";

function ShowRoom() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rowModesModel, setRowModesModel] = useState({});

  const deleteRoom = async (id) => {
    try {
      await deleteDoc(doc(db, "Room", id.toString()));
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      toast.success("ลบห้องเรียบร้อย");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด: " + error.message);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const roomsCollectionRef = collection(db, "Room");
        const querySnapshot = await getDocs(roomsCollectionRef);
        const roomsList = querySnapshot.docs.map((doc) => ({
          id: parseInt(doc.id),
          ...doc.data(),
        }));
        setRows(roomsList);
        console.log(roomsList);
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  function EditToolbar(props) {
    const { setRows, setRowModesModel } = props;
    const handleClick = () => {
      // สร้าง id ชั่วคราวโดยใช้ prefix "temp-"
      console.log(rows[rows.length - 1]);
      const tempId = parseInt(rows[rows.length - 1].roomNumber) + 1;
      const newRow = {
        id: tempId, // id ชั่วคราว
        roomNumber: "",
        roomType: "",
        roomDetail: "",
        rent: "",
        roomStatus: "",
        isNew: true,
      };

      // เพิ่มแถวใหม่เข้าไปใน state rows
      setRows((oldRows) => [...oldRows, newRow]);
      // กำหนดให้แถวนั้นเข้าสู่โหมดแก้ไข และ focus ที่ฟิลด์ roomNumber
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [tempId]: { mode: GridRowModes.Edit, fieldToFocus: "roomNumber" },
      }));
    };

    return (
      <GridToolbarContainer>
        <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    );
  }

  const handleEditClick = (id) => () => {
    setRowModesModel((prevModel) => ({
      ...prevModel,
      [id]: { mode: GridRowModes.Edit },
    }));
    console.log(rowModesModel);
  };

  const handleSaveClick = (id) => () => {
    console.log(rows);
    setRowModesModel((prevModel) => ({
      ...prevModel,
      [id]: { mode: GridRowModes.View },
    }));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });}

  const processRowUpdate = async (newRow) => {
    // เริ่มต้นกระบวนการ: ตั้ง loading เป็น true
    setLoading(true);
    try {
      // สร้าง updatedRow จาก newRow
      const updatedRow = { ...newRow };
      console.log(updatedRow)
      // อัปเดต state ของ rows โดยแทนที่แถวที่มี id ตรงกันด้วย updatedRow
      setRows((prevRows) =>
        prevRows.map((row) => (row.id === newRow.id ? updatedRow : row))
      );
  
      // สร้าง reference สำหรับเอกสารใน collection "Room" โดยใช้ roomNumber เป็น document id
      const roomDocRef = doc(db, "Room", updatedRow.roomNumber);
  
      // เพิ่มหรืออัปเดตข้อมูลลงใน Firestore
      await setDoc(roomDocRef, updatedRow);
  
      // ตรวจสอบว่าหลังจากการ set เอกสารแล้ว เอกสารนั้นมีอยู่ใน Firestore หรือไม่
      const roomDocSnap = await getDoc(roomDocRef);
      if (!roomDocSnap.exists()) {
        toast.error("Add room fail", {
          position:'top-center'
        });
      } else {
        toast.success("Update or Add room success", {
          position:'top-center'
        })
      }
  
      return updatedRow;
    } catch (error) {
      // จัดการ error โดยแสดงข้อความผ่าน toast
      toast.error("Error updating row: " + error.message,{
        position:'top-center'
      });
    } finally {
      // ไม่ว่าจะเกิดอะไรขึ้น กำหนด loading เป็น false เมื่อสิ้นสุดกระบวนการ
      setLoading(false);
    }
  };
  

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleRowModesModelChange = (newModel) => {
    setRowModesModel(newModel);
  };

  // const handleSetEditValue = (event) => {
  //   const field = event.currentTarget.field;
  //   const id = event.currentTarget.id;
  //   const row = rows.find((r) => r.id === id);

  //   setRows(...rows, row[field]);
  //   console.log(rows);
  // };
  const columns = [
    {
      field: "roomNumber",
      headerName: "หมายเลขห้อง",
      flex: 1,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "roomType",
      headerName: "ประเภทห้อง",
      flex: 2,
      editable: true,
      align: "center",
      headerAlign: "center",
      type: "singleSelect",
      valueOptions: ["ห้องปกติ", "ห้องปรับอากาศ"],
    },
    {
      field: "roomDetail",
      headerName: "รายละเอียดห้อง",
      flex: 2,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "rent",
      headerName: "ค่าห้อง",
      flex: 1,
      editable: true,
      align: "center",
      headerAlign: "center",
      type: "singleSelect",
      valueOptions: [5000, 7000],
    },
    {
      field: "roomStatus",
      headerName: "สถานะห้อง",
      flex: 1,
      editable: true,
      align: "center",
      headerAlign: "center",
      type: "singleSelect",
      valueOptions: ["ว่าง", "ไม่ว่าง"],
    },
    {
      field: "actions",
      type: "actions",
      headerName: "แก้ไข",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={(e) => deleteRoom(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  // ตัวอย่าง Custom Column Menu (ถ้าต้องการ)
  function CustomColumnMenu(props) {
    return (
      <GridColumnMenu
        {...props}
        slots={{
          columnMenuColumnsItem: null, // ซ่อนตัวเลือก column menu item
        }}
      />
    );
  }

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
            <Box sx={{ my: 4 }}>
              <Typography
                variant="h5"
                sx={{ color: "#16325B", fontWeight: "700" }}
              >
                รายการห้องทั้งหมด
              </Typography>
            </Box>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 },
                },
              }}
              slots={{
                columnMenu: CustomColumnMenu,
                toolbar: EditToolbar,
              }}
              slotProps={{
                toolbar: { setRows, setRowModesModel },
                // cell: {
                //   onChange: handleSetEditValue,
                // },
              }}
              // autoPageSize
              disableColumnResize
              pageSizeOptions={[5,10,15,20]}
              disableRowSelectionOnClick
              editMode="row"
              rowModesModel={rowModesModel}
              onRowModesModelChange={handleRowModesModelChange}
              onRowEditStop={handleRowEditStop}
              processRowUpdate={processRowUpdate}
              onProcessRowUpdateError={(error) => {
                console.error("Row update error:", error);
                // สามารถแสดง toast หรือแจ้งเตือนผู้ใช้ได้เช่นกัน
              }}
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
