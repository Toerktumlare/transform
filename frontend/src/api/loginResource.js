export default function create() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("something went wrong");
    }, 3000)
  });
}
