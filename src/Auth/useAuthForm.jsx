import { createContext, useContext, useState, useEffect } from "react";
import { db,auth } from "../firebase/firebase";
import { getDoc, doc} from "firebase/firestore";
import { useMediaQuery,useTheme } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
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
  const [user, setUser] = useState(null);
  const [userData,setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      try {
        const data = await fetchData(db, currentUser);
        if (data) {
          setUserData(data);
        }
      } catch (error) {
        toast.error("Error fetching user data: " + error);
      }
    } else {
      setUser(null);
      setUserData(null);
    }
    setLoading(false);
  });
  return () => unsubscribe();
}, []);

  

  const handleSignIn = async (event,email,password) => {
  event.preventDefault()
  try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      
      if(userCredential) {
        const userLogIn = userCredential.user;
        setUser(userLogIn);
        toast.success("Log In success!!")
      }
  } catch (error) {
    toast.error("Error during sign-in "+error);
  }
};

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null)
      if(user === null) {
        setUserData(null);
        toast.success("Successfully signed out", {
          position: 'top-center',
        });
      }
      
    } catch (error) {
      toast.error("Error during sign out", {
        position: 'top-center',
      });
    }
  };

  const fetchData = async (db,user) => {
    if(user) {
      const docRef = doc(db,"Users",user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log(docSnap.data())
        setUserData(docSnap.data());
      } else {
        toast.error("Document not found ");
      }
    }  
  }

  return (
    <AuthContext.Provider
      value={{
        handleSignIn,
        handleSignOut,
        ToastContainer,
        fetchData,
        user,
        userData,
        toast,
        styleMap,
        loading
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
