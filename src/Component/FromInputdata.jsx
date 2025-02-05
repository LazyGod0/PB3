import DoneIcon from "@mui/icons-material/Done";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import XIcon from "@mui/icons-material/X";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const WATER_RATE = 1.2;
const ELECTRICITY_RATE = 4.15;

const FormInputData = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const southzyRef = collection(db, "southzy");

  useEffect(() => {
    const unsubscribe = loadRealtime();
    return () => {
      unsubscribe();
    };
  }, []);

  const loadRealtime = () => {
    const unsubscribe = onSnapshot(southzyRef, (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    });
    return () => {
      unsubscribe();
    };
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(southzyRef, id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async (id) => {
    try {
      const updatedForm = {
        ...form,
        roomRent: parseFloat(form.roomRent) || 0,
        waterBill: (parseFloat(form.waterBill) || 0) * WATER_RATE,
        electricityBill:
          (parseFloat(form.electricityBill) || 0) * ELECTRICITY_RATE,
      };
      updatedForm.totalExpense =
        updatedForm.roomRent +
        updatedForm.waterBill +
        updatedForm.electricityBill;

      await updateDoc(doc(southzyRef, id), updatedForm);
      setEditId(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setForm({});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddData = async () => {
    const { name, roomRent, waterBill, electricityBill } = form;

    const rent = parseFloat(roomRent) || 0;
    const water = (parseFloat(waterBill) || 0) * WATER_RATE;
    const electricity = (parseFloat(electricityBill) || 0) * ELECTRICITY_RATE;
    const totalExpense = rent + water + electricity;

    try {
      await addDoc(southzyRef, {
        name,
        roomRent: rent,
        waterBill: water,
        electricityBill: electricity,
        totalExpense,
      });
      setForm({ name: "", roomRent: "", waterBill: "", electricityBill: "" });
    } catch (err) {
      console.error("Error adding document:", err);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name || ""}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="roomRent"
          placeholder="Room Rent"
          value={form.roomRent || ""}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="waterBill"
          placeholder="Water Bill (units)"
          value={form.waterBill || ""}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="electricityBill"
          placeholder="Electricity Bill (units)"
          value={form.electricityBill || ""}
          onChange={handleChange}
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
      <hr />
      <table className="table" style={{
      fontSize:20
    }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Room Rent</th>
            <th>Water Bill</th>
            <th>Electricity Bill</th>
            <th>Total Expense</th>
            <th>Status</th>
            <th>เหตุ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                {editId === item.id ? (
                  <input
                    type="text"
                    name="name"
                    value={form.name ?? item.name}
                    onChange={handleChange}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editId === item.id ? (
                  <input
                    type="number"
                    name="roomRent"
                    value={form.roomRent ?? item.roomRent}
                    onChange={handleChange}
                  />
                ) : (
                  item.roomRent
                )}
              </td>
              <td>
                {editId === item.id ? (
                  <input
                    type="number"
                    name="waterBill"
                    value={form.waterBill ?? item.waterBill}
                    onChange={handleChange}
                  />
                ) : (
                  item.waterBill
                )}
              </td>
              <td>
                {editId === item.id ? (
                  <input
                    type="number"
                    name="electricityBill"
                    value={form.electricityBill ?? item.electricityBill}
                    onChange={handleChange}
                  />
                ) : (
                  item.electricityBill
                )}
              </td>
              <td>{item.totalExpense}</td>
              <td>
                {item.totalExpense === 0 ? (
                  <div>
                    <DoneIcon style={{ color: "green" }} />
                  </div>
                ) : (
                  <div>
                    <XIcon style={{ color: "red" }} />
                  </div>
                )}
              </td>
              <td>
                {item.totalExpense === 0 ? (
                  <div>
                    <h6 style={{ color: "green" }}>ชำระแล้ว</h6>
                  </div>
                ) : (
                  <div>
                    <h6 style={{ color: "red" }}>ค้างชำระ</h6>
                  </div>
                )}
              </td>
                <td>
                  {editId === item.id ? (
                    <>
                      <button onClick={() => handleSave(item.id)}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                      <button onClick={() => setEditId(item.id)}>Edit</button>
                    </>
                  )}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormInputData;
