import { createContext, useContext, useState,useEffect } from "react";
import { auth,db } from "../firebase/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};


//Must be pascalcase start with upper in each word
export function AuthProvider({ children }) {

  const styleMap = {
    "/":{backgroundColor:'#ffd49f',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},
    "/home": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center',gap:'20px'},
    "/Home": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center',gap:'20px'},
    "/profile": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
    "/forgetpassword": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
    "/login": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
    "/register": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
  }

  const [logOutState,setLogOutState]  = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    roomNumber:"",
    email: "",
    password: "",
    message: "",
    showPassword: false,
    state: "",
  });
  

  //Check if user is already log in or not  at the start
  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth , (currentuser) =>{
        setUser(currentuser);
    })
    return () =>{
        unsubscribe();
    }
  }, [user])

  //Handle change in input field due to change in input field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //Toggle the password visibility
  const toggleShowPassword = () => {
    setFormData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  //Handle the submit of form due to title of form
  const handleSubmit = async (event, title) => {
    event.preventDefault();
  
    if (title === "Log In") {
      try {
        // Firebase Authentication Sign In
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        // Get the user from login
        const user = userCredential.user;
        
        if (user) {
          setUser(user);
          setFormData((prev) => ({
            ...prev,
            firstName: "",
            lastName:"",
            roomNumber:"",
            email: "",
            password: "",
            showPassword: false,
            state: "success",
          }));
          
        }
      } catch (error) {
        toast.error(error.message || "Log In failed");
      }
    } else if (title === "Sign Up") {
      try {
        // Firebase Authentication Sign Up
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
  
        if (user) {
          setUser(user);
  
          // Save user data in Firestore
          await setDoc(doc(db, "Users", user.uid), {
            firstName: formData.firstName,
            lastName: formData.lastName,
            roomNumber: formData.roomNumber,
          });
  
          setFormData((prev) => ({
            ...prev,
            firstName:"",
            lastName:"",
            roomNumber:"",
            email: "",
            password: "",
            showPassword: false,
            state: "success",
          }));

          
        } else {
          throw new Error("Failed to create user");
        }
      } catch (error) {
        toast.error(error.message || "Sign Up failed");
      }
    }
  };
  

  const handleSignOut = async () => {
    try {
        await signOut(auth); 
        setUser(null); 
        setLogOutState((prevState) => !prevState); 
        setFormData({
            firstName: "",
            lastName: "",
            roomNumber: "",
            email: "",
            password: "",
            showPassword: false,
            state: "fail"
        });

    } catch (error) {
        console.error("Error during sign out:", error);
    }
};



  return (
    <AuthContext.Provider
      value={{
        user,
        handleSubmit,
        toggleShowPassword,
        formData,
        handleChange,
        handleSignOut,
        ToastContainer,
        logOutState,
        styleMap
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
