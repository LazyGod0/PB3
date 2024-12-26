import { createContext, useContext, useState,useEffect } from "react";
import { auth,db } from "../firebase/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { getDocs,doc,setDoc,query,collection,where } from "firebase/firestore";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};


//Must be pascalcase start with upper in each word
export function AuthProvider({ children }) {
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
  }, [])

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
          // Optional: Fetch user data from Firestore for additional validation
          // getDocs will return querySnapshot object
          // const userDocs = await getDocs(
          //   query(collection(db, "Users"), where("email", "==", formData.email))
          // );
          
          // If username does not exist in firebase then sign out and throw error
          // if (userDocs.empty) {
          //   handleSignOut();
          //   throw new Error("User not found in Firestore");
          // }
          
          //  Get the document using docs property which will return array of documents
          // const userDoc = userDocs.docs[0];
          //  Use property data() to get the data of document
          // const userData = userDoc.data();
          
          //  Check if username is same as in firestore if not then throw error
          // if (formData.userName !== userData.username) {
          //   throw new Error("Invalid Username");
          // }
  
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
        await signOut(auth); // Ensure sign-out completes successfully
        setUser(null); // Update the user state to null
        if(user===null) {
          setLogOutState((prevState) => !prevState); // Toggle the logout state
        setFormData((prev) => ({
            ...prev,
            firstName: "",
            lastName: "",
            roomNumber: "",
            email: "",
            password: "",
            showPassword: false,
            state: "fail"
        }));
        console.log("User signed out");
        console.log(user)
        }
        
    } catch (error) {
        console.error("Error during sign out:", error); // Handle any sign-out errors
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
        logOutState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
