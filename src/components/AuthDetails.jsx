import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import "./authdetails.css";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p id="current-state-p">{`Signed in as ${authUser.email}`}</p>
          <button onClick={userSignOut} id="sign-out-button">Sign Out</button>
        </>
      ) : (
        <p id="current-state-p">Currently: Not Signed In</p>
      )}
    </div>
  );
};

export default AuthDetails;