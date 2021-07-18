var posts = []

var terminalpoker = {
  title: "Networking a Poker Game Played in the Terminal!",
  date: "6/2/2021",
  category: "Programming",
  thumb: "assets/terminalpoker/terminalpoker2.png"
};

posts.push(terminalpoker)

for (var i = 0; i < posts.length; i++){
  var htmlString = "";
  htmlString += "<div class='post'>";
  htmlString +=  "<a href='./posts/terminalpoker.html'>";
  htmlString +=    "<div class='post-table'>";
  htmlString +=      "<div class='thumbnail'>";
  htmlString +=        "<img src='" + posts[i].thumb + "' width='300' height='200' alt=''>";
  htmlString +=      "</div>";
  htmlString +=      "<div class='post-table-content'>";
  htmlString +=        "<div class='row'>";
  htmlString +=          "<div class='col-md-8'>";
  htmlString +=            "<h2>" + posts[i].title+ "</h2>";
  htmlString +=            "<span class='category'>" + posts[i].category + "</span>";
  htmlString +=            "<span class='date'>" + posts[i].date + "</span>";
  htmlString +=          "</div>";
  htmlString +=        "</div>";
  htmlString +=      "</div>";
  htmlString +=    "</div>";
  htmlString +=  "</a>";
  htmlString += "</div>";
  $('#posts').append(htmlString);
}
