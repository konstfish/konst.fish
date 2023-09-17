/*
 * David Fischer - https://konst.fish
 */

// https://api.github.com/users/konstfish/repos

// https://stackoverflow.com/questions/35294633/what-is-the-vanilla-js-version-of-jquerys-getjson
var request = new XMLHttpRequest();
var ids = ["182865080", "159675055", "168402776", "155883855", "201091287", "200414791"]

request.open('GET', 'https://api.github.com/users/konstfish/repos', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    var repo = null;
    var runs = ids.length;
    if(mobilecheck < 480){
      runs = 3
    }
    for (i = 0; i < runs; i++) {
        for (j = 0; j < data.length && repo == null; j++){
          if(data[j]["id"] == ids[i]){
            repo = data[j];
          }
        }
        var div = document.createElement("a");
        div.classList.add("github-repo");
        div.classList.add("github-repo-selector");
        div.setAttribute('id',ids[i])
        div.setAttribute('href',repo["html_url"])

        var title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = repo["name"]
        div.appendChild(title)

        var desc = document.createElement("div");
        desc.classList.add("desc");
        desc.innerHTML = repo["description"]
        div.appendChild(desc)

        var lang = document.createElement("div");
        lang.classList.add("lang");
        lang.innerHTML = '<i class="fas fa-code"></i>' + repo["language"]
        div.appendChild(lang)

        var stats = document.createElement("div");
        stats.classList.add("stats");

        var spanst = document.createElement("span");
        spanst.classList.add("stars");
        spanst.innerHTML = '<i class="fas fa-star"></i>' + repo["stargazers_count"]
        stats.appendChild(spanst);

        var spanfr = document.createElement("span");
        spanfr.classList.add("forks");
        spanfr.innerHTML = '<i class="fas fa-code-branch"></i>' + repo["forks"]
        stats.appendChild(spanfr);

        var spanwt = document.createElement("span");
        spanwt.classList.add("watchers");
        spanwt.innerHTML = '<i class="fas fa-eye"></i>' + repo["watchers"]
        stats.appendChild(spanwt);

        div.appendChild(stats)

        document.getElementById("repo-container").appendChild(div)
        var repo = null;
    }
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
