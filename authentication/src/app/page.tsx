"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";  // use later




const Home = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // const myRouter = useRouter();  // error
  const handleSubmission = async (e:React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
  
    try {
      const response = await fetch("/api/hello");
  
      const data = await response.json();
  
      if(!response.ok) {
        console.log("error while fetching");
      }
  
      console.log(data);
  
    }
    catch(err) {
      console.error(err)
    }
  }

  


  return (
    <div>
      <div className="m-auto border-2 border-solid border-black w-[400px] rounded-lg relative top-10 p-5 flex flex-column flex-wrap gap-5 text-center justify-center items-center">
        <form action="/Home" onSubmit={handleSubmission}>
          <h1 className="text-2xl text-center">Login form</h1>
          <br />
          <input
            type="text"
            name="userName"
            id="username"
            placeholder="enter username"
            required
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setusername(e.target.value)
            }}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            required
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setpassword(e.target.value)
            }
          }
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;

// ------------------first approach --------------------------
// 1. create a form UI for login
// 2. create a backend route handler that respond with some data about identity of admin
// 3. Create a message for user telling him if it's admin or user