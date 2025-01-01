import { createContext, useContext, useState,useEffect } from "react";
import { auth,db } from "../firebase/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Create Context for providing the data to all components
const AuthContext = createContext(null);

//The function that will be used to get the data from the context
export const useAuth = () => {
  return useContext(AuthContext);
};


//Must be pascalcase start with upper in each word
export function AuthProvider({ children }) {

  //Styled object for all page using path as key
  const styleMap = {
    "/":{backgroundColor:'#ffd49f',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'},
    "/home": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center',gap:'20px'},
    "/bill":{width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center',gap:'20px'},
    "/profile": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
    "/forgetpassword": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
    "/login": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
    "/register": {width:'100%',height:'100%',display:'flex',flexFlow:'column nowrap',justifyContent:'center',alignItems:'center'},
  }

  //State for log out
  const [logOutState,setLogOutState]  = useState(false);
  //State for user
  const [user, setUser] = useState(null);
  //State for form data
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
  

  //Check if user is already log in or not  at the start.Trigger when user in changed
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
      //Use name in component and value in component to change the value of the input field
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
          //Set user to be user who log in 
          setUser(user);
          //Set the form data to be empty but state of log in
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
          // Set user to be user who sign up
          setUser(user);
  
          // Save user data in Firestore
          await setDoc(doc(db, "Users", user.uid), {
            firstName: formData.firstName,
            lastName: formData.lastName,
            roomNumber: formData.roomNumber,
          });
          
          //Reset user data in input form to be empty
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
        //Set the state of log out to be true by using call back function 
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
    // Here is context component which use to determine what values will apply to all components using .Provider
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
      {/* children mean the child components which this component is parent component */}
      {children}
    </AuthContext.Provider>
  );
}
