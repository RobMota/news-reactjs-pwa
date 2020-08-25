const params = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const URL = "http://localhost:3333/api";

function getNews(subject) {
  return fetch(`${URL}/${subject}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.log(`Ocorreu um erro! Error: ${err}`);
    });
}

function getNewsById(subject, id){
  return fetch(`${URL}/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch((err) => {
      console.log(`Ocorreu um erro! Error: ${err}`);
    });
}

export default {
	getNews,
	getNewsById
};
