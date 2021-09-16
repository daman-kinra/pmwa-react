import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userProvider } from "../../user/User";
import {
  createProject,
  getAllUserSpecificProjects,
} from "../../utils/functions";

function Home() {
  const { setUser, setToken, user, token } = useContext(userProvider);
  const [newProject, setNewProject] = useState({
    title: "project-2",
    team: [user.email],
    owner: user.email,
    totalTasks: 0,
    completedTasks: 0,
    id: "123456789",
    requestedUser: [],
    tasks: [],
  });
  const [allProjects, setAllProjects] = useState([]);
  useEffect(async () => {
    try {
      const res = await getAllUserSpecificProjects(user, token);
      setAllProjects(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createNewProject = async () => {
    try {
      const res = await createProject(newProject, token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Home
      <button
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem("token");
          setUser(null);
          setToken(null);
        }}
      >
        Logout
      </button>
      <button onClick={createNewProject}>Project</button>
      {allProjects.map((project, pos) => {
        return (
          <Link to={`/project/${project._id}`} key={project._id}>
            {project.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
