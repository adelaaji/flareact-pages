import Axios from "axios";

export function getComent(cId = 20) {
  return new Promise(function (resolve, reject) {
    Axios.get(`https://jsonplaceholder.typicode.com/comments/${cId}`).then(
      (response) => {
        var result = response.data;
        resolve(result);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
