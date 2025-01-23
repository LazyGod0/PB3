import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useMediaQuery,useTheme } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const styleMap = {
    "/": {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "/home": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    "/bill": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    "/profile": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      alignItems: "center",
    },
    // "/forgetpassword": {
    //   width: "100%",
    //   height: "100%",
    //   display: "flex",
    //   flexFlow: "column nowrap",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
    // "/register": {
    //   width: "100%",
    //   height: "100%",
    //   display: "flex",
    //   flexFlow: "column nowrap",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
  };

  // const [logOutState, setLogOutState] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [password, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    roomNumber: "",
    email: "",
    password: "",
    state: "",
  });

  useEffect(() => {
    // Load user data from Firestore if needed in the future
  }, []);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const collectionRef = collection(db, "Users");
      const querySnapshot = await getDocs(collectionRef);
      let foundUser = null;
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        if (
          docData.userName === formData.userName &&
          docData.password === formData.password
        ) {
          foundUser = docData;
        }
      });
      if (foundUser) {
        setUser(foundUser);
        toast.success("Sign In successful", {
          position: 'top-center',
        });
      } else {
        toast.error("Invalid username or password", {
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error("Error during sign-in", {
        position: 'top-center',
      });
    }
  };

  const handleSignOut = async () => {
    try {
      setUser(null);
      toast.success("Successfully signed out", {
        position: 'top-center',
      });
    } catch (error) {
      toast.error("Error during sign out", {
        position: 'top-center',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleSignIn,
        handleSignOut,
        toast,
        ToastContainer,
        // logOutState,
        styleMap,
        formData,
        setFormData,
        handleChange,
        toggleShowPassword,
        password,
      }}
    >
      {toast && (
        <ToastContainer
        style={{
          position: "absolute",
          top: isMobile? 10:30,
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "90%" : "70%",
          maxWidth: "800px",
        }}
      />  )}
      {children}
    </AuthContext.Provider>
  );
}
