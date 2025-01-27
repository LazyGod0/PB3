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
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      const fetchUserData = async () => {
        if (currentuser) {
          setUser(currentuser);
          try {
            const data = await fetchData(db, currentuser);
            if (data) {
              console.log(data);
              setUserData(data);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      };
  
      fetchUserData();
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  const handleSignIn = async (event,email,password) => {
  event.preventDefault()
  try {
    if (email && password) {
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      
      if(!userCredential) {
        setLoading(true)
      } else {
        setLoading(false)
        const userLogIn = userCredential.user;
        setUser(userLogIn);
        toast.success("Log In success!!")
      }
      
    } else {
      throw new Error("Email or Password is empty");
    }
  } catch (error) {
    toast.error("Error during sign-in "+error);
  }
};

  const handleSignOut = async () => {
    try {
      console.log("Yeah it works")
      await signOut(auth);
      console.log(user)
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
        console.log(docSnap.data())
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
