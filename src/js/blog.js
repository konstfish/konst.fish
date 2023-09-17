/*
 * David Fischer - https://konst.fish
 */

// https://api.github.com/users/konstfish/repos

// https://stackoverflow.com/questions/35294633/what-is-the-vanilla-js-version-of-jquerys-getjson
var blog_request = new XMLHttpRequest();
if(mobilecheck < 480){
  blog_request.open('GET', 'https://konst.fish/blog/api/count/2', true);
}else{
  blog_request.open('GET', 'https://konst.fish/blog/api/count/3', true);
}

blog_request.onload = function() {
  if (blog_request.status >= 200 && blog_request.status < 400) {
    // Success!
    var data = JSON.parse(blog_request.responseText);
    for (j = 0; j < data.length; j++){
      var div = document.createElement("a");
      div.classList.add("blog-post");
      div.classList.add("blog-post-selector");
      div.setAttribute('href', ('https://konst.fish/blog/post/' + data[j]["id"]))

      var img = document.createElement("div");
      img.classList.add("img-header");
      img.setAttribute('style', ("background-image: url('" + data[j]["image_url"] + "')"))
      div.appendChild(img)

      var title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = data[j]["title"]

      var date = document.createElement("div");
      date.classList.add("date");
      date.innerHTML = data[j]["date"]
      title.appendChild(date)
      div.appendChild(title)

      var brief = document.createElement("div");
      brief.classList.add("brief");
      brief.innerHTML = data[j]["desc"]
      div.appendChild(brief)

      var tags = document.createElement("div");
      tags.classList.add("tags");

      for (i = 0; i < data[j]["tags"].length ; i++){
        var tag = document.createElement("span");
        tag.innerHTML = data[j]["tags"][i];
        tag.classList.add("tag");
        tags.appendChild(tag)
      }

      div.appendChild(tags)
      document.getElementById("blog-container").appendChild(div)
    }
  } else {
    // We reached our target server, but it returned an error

  }
};

blog_request.onerror = function() {
  // There was a connection error of some sort
};

blog_request.send();
