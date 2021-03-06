export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}

export function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
}

export function validateRequired(value) {
  if (!value) {
    return "This field is required";
  }
  return "";
}

export function validateEmail(str) {
  if (!str) {
    return "This field is required";
  }
  const isValid = str.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return isValid ? "" : "Email is invalid"
}

export const getTokenFromLocal = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return currentUser;
};

export const generateUniqueId = () => {
  const { v4: uuidv4 } = require("uuid");
  const uniqueId = uuidv4();
  return { uniqueId, smallId: uniqueId.slice(0, 8) };
};

export const checkStatusCode = (currentUser, users) => {
  let responseUser, response, lastMatch;
  const { email, password } = currentUser;
  if (!email || !password) {
    response = {
      statusCode: 400,
      message: "Bad request",
      user: responseUser,
      isAuth: false,
    };
    return response;
  }

  const check = (e) => {
    if (e.email === email) {
      lastMatch = e.password;
      if (e.password === password) {
        return true;
      }
    }
  };

  const existUser = users.find(check);

  if (existUser) {
    response = {
      statusCode: 200,
      message: "Authorized",
      user: existUser,
      isAuth: true,
    };
  } else if (!existUser && lastMatch) {
    response = {
      statusCode: 401,
      message: "Unauthorized",
      user: responseUser,
      isAuth: false,
    };
  } else {
    response = {
      statusCode: 201,
      message: "Created successful",
      user: currentUser,
      isAuth: true,
    };
  }

  return response;
};
