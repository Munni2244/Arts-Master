import { getAuth, signInWithPopup, GoogleAuthProvider , signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from "../components/Login/Firebase/firebase.init";

Initialization();
const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [loading, setLoading]=useState(true);
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const SignInGoogle=()=>{
        setLoading(true)
        signInWithPopup(auth, GoogleProvider)
      .then(res=>{
        setUser(res.user)
      }).finally(()=>setLoading(false));
    }

    ///user change
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged (auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({});
            }
           setLoading(false)
        })
        return ()=> unsubscribe;
    },[])

    //sign out
    const SignOut=()=>{
        setLoading(true)
signOut(auth)
.then(res=>{
    setUser({})
}).finally(()=> setLoading(false))
    }


    return{
        user,
        SignInGoogle,
        SignOut,
        loading
        
    }
}
export default useFirebase;