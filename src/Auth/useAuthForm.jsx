import { useState } from "react";
import { auth, db } from "../firebase/firebase"; // Adjust path
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const useAuthForm = (title) => {

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    message:"",
    showPassword: false,
    state: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setFormData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title === "Log In") {
      try {
        const userDocs = await getDocs(
          query(collection(db, "Users"), where("email", "==", formData.email))
        );
        if (userDocs.empty) throw new Error("404 Data not found");

        const userDoc = userDocs.docs[0];
        const userData = userDoc.data();

        if (formData.userName === userData.username) {
          await signInWithEmailAndPassword(auth, formData.email, formData.password);
          setFormData({
            userName: "",
            email: "",
            password: "",
            showPassword: false,
          });
          toast.success("Login Successful");
          setFormData((prev) => ({
            ...prev,
            state:"success"
          }));
        } else throw new Error("Invalid Username");
      } catch (error) {
        toast.error(error.message);
      }
    } else if (title === "Sign Up") {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        await setDoc(doc(db, "Users", user.uid), {
          username: formData.userName,
          email: formData.email,
        });
        setFormData({
          userName: "",
          email: "",
          password: "",
          showPassword: false,
        })
        toast.success("Register Successfully");
        setFormData((prev) => ({
          ...prev,
          state:"success"
        }));
        
      } catch (error) {
        toast.error(error.message);
        
      }
    }
  };

  return { formData, handleChange, toggleShowPassword, handleSubmit,ToastContainer};
};
