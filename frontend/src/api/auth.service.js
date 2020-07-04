export const authService = {
  login,
};

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("something went wrong");
    }, 3000)
  });
}
