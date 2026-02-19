import React, { useReducer, useRef, useState } from "react";
import { UserContext } from "../context/ UserContext";

export function UserForm() {
  //use reducer for state managemnet
  const [user, userDispatcher] = useReducer(userReducer, {});

  //creating state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const Roleref = useRef(null);

  // setting name
  // function handleName(event) {
  //   setName(event.target.value);
  //   // console.log(name);
  //}
  const handleName = (e) => {
    console.log(e.target.value, "NAME");
    setName(e.target.value);
  };

  //setting email
  function handleEmail(event) {
    setEmail(event.target.value);
    // console.log(email);
  }

  //setting select option
  function handleOption() {
    console.log(Roleref.current.value);
    const data = Roleref.current.value;
    setRole(data);
    console.log(role);
  }

  //reducer funtyioj - state =user{} action
  function userReducer(state, action) {
    console.log("action", action.payload);
    if (action.type == "add") {
      return (state = {
        ...state,
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.eamil,
        role: action.payload.role,
      });
    } else {
      return state;
    }
  }
  console.log(user);

  function onAdd(event) {
    event.preventDefault();
    if (!email && !name && !role) {
      return alert("Fill the remianing feilds ");
    }

    userDispatcher({ type: "add", payload: { name, email, role } });
    setName("");
    setEmail("");
    setRole(" ");
    Roleref.current.value = "";
    console.log(user);
  }
  
  
  return (
    <>
      <form
        onSubmit={onAdd}
        action=""
        style={{
          alignItems: "center",
          padding: "20px",
          border: "1px solid black",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <input onChange={handleName} type="text" placeholder="EnterName" />
        <input onChange={handleEmail} type="text" placeholder="Enter Email" />
        <select ref={Roleref} onChange={handleOption} defaultValue={role}>
          <option value="Fronted">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="FullStack">FullStack</option>
        </select>
        <button type="submit" style={{ width: "100px" }}>
          Add Details
        </button>
      </form>
    </>
  );
}
