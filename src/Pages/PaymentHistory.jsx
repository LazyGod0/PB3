import React from "react";
import { Container, Typography, Box, Grid2 } from "@mui/material";
import NavBar from "../Component/NavBar";
import { DataGrid } from "@mui/x-data-grid";
import { GridColumnMenu } from "@mui/x-data-grid";
const PaymentHistory = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "วันที่ชำระ",
      flex: 2, // ขยายพื้นที่คอลัมน์
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "ประเภท",
      flex: 2,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "cost",
      headerName: "ค่าใช้จ่าย",
      flex: 1.5,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "สถานะ",
      flex: 1.5,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "note",
      headerName: "หมายเหตุ",
      flex: 1,
      editable: false,
      align: "center",
      headerAlign: "center",
    },
  ];

  const paymentData = [
    {
      id: 1,
      date: "18 ม.ค. 2019",
      type: "ค่าสมัครสมาชิก",
      cost: 9999,
      status: "สำเร็จ",
      note: "-",
    },
    {
      id: 2,
      date: "18 ม.ค. 2019",
      type: "ค่าสมัครสมาชิก",
      cost: 6999,
      status: "สำเร็จ",
      note: "-",
    },
    {
      id: 3,
      date: "18 ม.ค. 2019",
      type: "ค่าสมัครสมาชิก",
      cost: 5999,
      status: "สำเร็จ",
      note: "-",
    },
    {
      id: 4,
      date: "18 ม.ค. 2019",
      type: "ค่าสมัครสมาชิก",
      cost: 8999,
      status: "สำเร็จ",
      note: "-",
    },
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
  return (
    <Box>
      <NavBar />
      <Container>
        <Grid2 size={12} sx={{ mt: 4, ml: 4, mb: 4 }}>
          <Typography variant="h5" sx={{ color: "#16325B", fontWeight: "700" }}>
            ประวัติการชำระเงิน
          </Typography>
        </Grid2>
        <Grid2 size={12}>
          <Box
            sx={{
              height: "auto",
              ".MuiDataGrid-columnHeader": {
                backgroundColor: "#16325B",
                color: "white",
              },
              ".MuiDataGrid-sortIcon": { color: "white" },
              ".css-1ckov0h-MuiSvgIcon-root":{color:'white'}
            }}
          >
            <DataGrid
              rows={paymentData}
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
          </Box>
        </Grid2>
      </Container>
    </Box>
  );
};

export default PaymentHistory;
