import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../index.css'

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    let response = await axios.get(
      `https://bootcamp.todo.arhamsoft.org/client/todo/list?userId=19318`
    );
    setPosts(response.data.todos);
    // console.log(response)
  };

  <h1>This is a Todo List App</h1>;
  const TodoNavigator = useNavigate();
  return (
    <div>
      <button onClick={() => TodoNavigator("/create")}>Create Todo</button>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Describtion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.desc}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
