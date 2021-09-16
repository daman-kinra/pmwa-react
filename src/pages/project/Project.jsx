import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userProvider } from "../../user/User";
import { addNewMember, getSingleProject } from "../../utils/functions";

function Project() {
  const { token, user } = useContext(userProvider);
  const [projectDetails, setProjectDetails] = useState(null);
  const param = useParams();
  useEffect(async () => {
    try {
      const res = await getSingleProject(param.id, token);
      console.log(res);
      setProjectDetails(res);
    } catch (error) {
      console.log(error);
    }
  }, [param.id]);
  const addMemberToThisProject = async (e) => {
    if (e) e.preventDefault();
    try {
      const res = await addNewMember(
        "daman.kinra@gmail.com",
        {
          projectName: projectDetails.title,
          projectOwner: projectDetails.owner,
          projectOwnerName: user.name,
          projectId: param.id,
        },
        token
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={addMemberToThisProject}>Add</button>
    </div>
  );
}

export default Project;
