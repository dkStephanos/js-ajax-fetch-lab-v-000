function getIssues() {
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues', {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res));
}

function showIssues(json) {
}

function createIssue() {
  const title = document.getElementById('title').value
  const body = document.getElementById('body').value

  
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab', {
  method: 'post',
  headers: {
    Authorization: `token ${getToken()}`
  }
}).then(res => console.log(res));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'd5a37406e38cc71a1707bc1199f0aa075f938bb7'
}
