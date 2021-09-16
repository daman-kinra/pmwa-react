import axios from "axios";

export const loginUser = (credentials) => {
  return new Promise(async (result, reject) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        ...credentials,
      });
      if (res.data.error) {
        reject(res.data.error);
      }
      localStorage.setItem("token", res.data.token);
      result(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const registerUser = (data) => {
  return new Promise(async (result, reject) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        {
          ...data,
        }
      );
      if (res.data.error) {
        console.log(res.data.error);
        return;
      }
      localStorage.setItem("token", res.data.token);
      result(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getAllUserSpecificProjects = (user, token) => {
  return new Promise(async (result, reject) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/projects/${user.email}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      result(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const createProject = (data, token) => {
  return new Promise(async (result, reject) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/newProject`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      result(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleProject = (id, token) => {
  return new Promise(async (result, reject) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/singleProject/${id}`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      result(res.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const addNewMember = (member, data, token) => {
  return new Promise(async (result, reject) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/addMember/${member}`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      result(res.data);
    } catch (error) {
      reject(error);
    }
  });
};
