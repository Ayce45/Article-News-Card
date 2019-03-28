const articles = [
  {
    id: 1,
    thumbnail:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
    title: "City Lights in New York",
    subtitle: "The city that never sleeps.",
    category: "photo",
    description:
      "New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.",
    meta: {
      date: "2019-03-10 13:00:00",
      comments: [
        { id: 1, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 2, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 3, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 4, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 5, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 6, content: "Lorem ipsum dolor sit amet", status: "deleted" },
        { id: 7, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 8, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 9, content: "Lorem ipsum dolor sit amet", status: "deleted" },
        { id: 10, content: "Lorem ipsum dolor sit amet", status: "published" }
      ]
    }
  },
  {
    id: 2,
    thumbnail:
      "https://www.louistiti.fr/demo/Concept-Design/Carte-Article-UI/images/background.jpg",
    title: "True Paradise on Earth: Unknown Place",
    subtitle: 'They call it "God\'s Own Country."',
    category: "travel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias autem aliquid, recusandae maiores iste fuga, explicabo dolor vitae magnam!",
    meta: {
      date: "2019-03-08 11:00:00",
      comments: [
        { id: 1, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 2, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 3, content: "Lorem ipsum dolor sit amet", status: "deleted" },
        { id: 4, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 5, content: "Lorem ipsum dolor sit amet", status: "published" },
        { id: 6, content: "Lorem ipsum dolor sit amet", status: "deleted" }
      ]
    }
  }
];

function render() {
  // code here
}

document.addEventListener("DOMContentLoaded", () => {
  render();
});
