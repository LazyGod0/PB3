import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
  Box,
  Grid2,
} from "@mui/material";
import NavBar from "../Component/NavBar";
import { DataGrid } from "@mui/x-data-grid";
import { GridColumnMenu } from "@mui/x-data-grid";

const PaymentHistory = () => {
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1,align:'center',headerAlign:'center' },
    {
      field: 'date',
      headerName: 'วันที่ชำระ',
      flex: 2, // ขยายพื้นที่คอลัมน์
      editable: false,
      align:'center'
      ,headerAlign:'center'
    },
    {
      field: 'type',
      headerName: 'ประเภท',
      flex: 2,
      editable: false,align:'center'
      ,headerAlign:'center'
    },
    {
      field: 'cost',
      headerName: 'ค่าใช้จ่าย',
      flex: 1.5,
      editable: false,align:'center'
      ,headerAlign:'center'
    },
    {
      field: 'status',
      headerName: 'สถานะ',
      flex: 1.5,
      editable: false,align:'center'
      ,headerAlign:'center'
    },
    {
      field: 'note',
      headerName: 'หมายเหตุ',
      flex: 1,
      editable: false,align:'center'
      ,headerAlign:'center'
    },
  ];
  

const paymentData = [
  { id:1,
    date: "18 ม.ค. 2019",
    type: "ค่าสมัครสมาชิก",
    cost: 9999,
    status: "สำเร็จ",
    note: "-",
  },
  { id:2,
    date: "18 ม.ค. 2019",
    type: "ค่าสมัครสมาชิก",
    cost: 6999,
    status: "สำเร็จ",
    note: "-",
  },
  { id:3,
    date: "18 ม.ค. 2019",
    type: "ค่าสมัครสมาชิก",
    cost: 5999,
    status: "สำเร็จ",
    note: "-",
  },
  { id:4,
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
        <Grid2 size={12} >
          {/* <Box sx={{ mx: 3 }}>
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#16325B" }}>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontWeight: "700" }}
                    >
                      วันที่ชำระ
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontWeight: "700" }}
                    >
                      ประเภท
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontWeight: "700" }}
                    >
                      ค่าใช้จ่าย
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontWeight: "700" }}
                    >
                      สถานะ
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "white", fontWeight: "700" }}
                    >
                      หมายเหตุ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paymentData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        bgcolor:
                          index % 2 === 0 ? "rgba(150,200,210,0.2)" : "white",
                      }}
                    >
                      <TableCell align="center" sx={{ fontWeight: "700" }}>
                        {row.date}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "700" }}>
                        {row.type}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "700" }}>
                        {row.cost}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "700" }}>
                        {row.status}
                      </TableCell>
                      <TableCell align="center" sx={{ fontWeight: "700" }}>
                        {row.note}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box> */}
          <Box sx={{ height: 'auto','.MuiDataGrid-columnHeader': {backgroundColor:'#16325B',color:'white'}}}>
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
              checkboxSelection
              sx={{
                '& .MuiDataGrid-row:nth-of-type(odd)': {
                  backgroundColor: '#78B7D0', // สีสำหรับแถวเลขคี่
                },
                '& .MuiDataGrid-row:nth-of-type(even)': {
                  backgroundColor: '#F2F3F4', // สีสำหรับแถวเลขคู่
                },
                '& .MuiDataGrid-cell': {
                  color: '#000', // สีตัวอักษรในเซลล์
                },
              }}
            />
          </Box>
        </Grid2>

        {/* <Box sx={{ bgcolor: "#080160", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
      
      <AppBar position="static" sx={{ bgcolor: "#ffffff", color: "black", width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            OUR-HOME
          </Typography>
        </Toolbar>
      </AppBar>

      
      <Container maxWidth="md" sx={{ bgcolor: "rgba(150,200,210,1)", p: 3, borderRadius: 2, mt: 3, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          ประวัติการชำระเงิน
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#080160" }}>
                <TableCell align="center" sx={{ color: "white" }}>วันที่ชำระ</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>ประเภท</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>ค่าใช้จ่าย</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>สถานะ</TableCell>
                <TableCell align="center" sx={{ color: "white" }}>หมายเหตุ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paymentData.map((row, index) => (
                <TableRow key={index} sx={{ bgcolor: index % 2 === 0 ? "rgba(150,200,210,0.2)" : "white" }}>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.cost}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box> */}
      </Container>
    </Box>
  );
};

export default PaymentHistory;
