import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateTodo() {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    userId: "19318",
    title: "",
    desc: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const Submit = () => {
    axios
      .post("https://bootcamp.todo.arhamsoft.org/client/todo/create", formData)
      .then(function (response) {
        //handle success
        alert("Success");
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        alert("Failed");
        console.log(response);
      });
  };
  return (
    <div>
      <h1>Create your Todo List</h1>
      <form>
        <label >
          User ID:
          <input
            id="userId"
            name="userId"
            type="number"
            value={19318}
            onChange={(e) => handleChange(e)}
            readOnly
          />
        </label>
        <br />
        <label>
          Title:
          <input
            id="title"
            name="title"
            value={formData.title}
            type="text"
            onChange={(e) => handleChange(e)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            id="desc"
            name="desc"
            value={formData.describtion}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <br />
        <button type="button" onClick={Submit}>
          Submit
        </button>
      </form>
      <button onClick={() => navigator("/")}>Go Back</button>
    </div>
  );
}

export default CreateTodo;
