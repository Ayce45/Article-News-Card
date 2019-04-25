const articles = [
  {
    id: 1,
    thumbnail:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
    title: "City Lights in New York",
    subtitle: "The city that never sleeps.",
    category: "photos",
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
var htmlArticles;

var today = new Date(); //Date du jour

articles.forEach(element => {
  //Parcourir les articles
  var publishedComment = 0;
  var date = new Date(element.meta.date); //Date de l'article au format Date
  //Calcule ago
  var msInDay = 24 * 60 * 60 * 1000;
  date.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  var ago = (+today - +date) / msInDay;

  var month = date.toLocaleString("en-us", { month: "short" }); //Mois au format court

  //Nombre de commantaires published
  var i = 0;
  element.meta.comments.forEach(comment => {
    //Parcourir les commentaires de l'article
    if (comment.status === "published") {
      i++;
    }
    publishedComment = i;
  });

  htmlArticles +=
    "<!-- Post -->" +
    '<div class="post-module">' +
    "<!-- Thumbnail -->" +
    '<div class="thumbnail">' +
    '<div class="date">' +
    '<div class="day">' +
    ("0" + date.getDate()).slice(-2) +
    "</div>" + //8 to 08
    '<div class="month">' +
    month +
    "</div>" +
    "</div>" +
    "<img " +
    'src="' +
    element.thumbnail +
    '"' +
    "/>" +
    "</div>" +
    "<!-- Post Content -->" +
    '<div class="post-content">' +
    '<div class="category ' +
    element.category +
    '">' +
    element.category +
    "</div>" +
    '<h1 class="title">' +
    element.title +
    "</h1>" +
    '<h2 class="sub_title">' +
    element.subtitle +
    "</h2>" +
    '<p class="description">' +
    element.description +
    "</p>" +
    '<div class="post-meta">' +
    '<span class="timestamp"' +
    '><i class="fa fa-clock"></i> ' +
    Math.round(ago) +
    " days ago</span" + //Arondie
    '><span class="comments"' +
    '><i class="fa fa-comments"></i><a href="#"> ' +
    publishedComment +
    " comments</a></span" +
    ">" +
    "</div>" +
    "</div>" +
    "</div>";
});

function render() {
  htmlArticles = htmlArticles.replace("undefined", ""); //Gestion de mise en page
  document.getElementsByClassName("column")[0].innerHTML = htmlArticles; //Remplir le HTML
}

//document.addEventListener("DOMContentLoaded", () => {
render();
//});
