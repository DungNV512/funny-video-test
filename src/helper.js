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
    if(!value) {
      return 'This field is required'
    }
    return ''
  }