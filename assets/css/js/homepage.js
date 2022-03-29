var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        response.json().then(function(data) {
          console.log(data);
        });
      });
};

var getUserRepos = function(user) {
    // fotmat the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};