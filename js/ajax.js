window.addEventListener('DOMContentLoaded', (event) => {
  function render(path) {
    fetch(path).then(function(response) {
      if (response.ok) {
        response.text().then(function(t) {
          const container = document.getElementById('ajax');
          container.innerHTML = t;
        });
      } else {
        document.querySelector('#ajax').innerHTML = '<h1>No encontró el archivo</h1>';
      }
    })
    .catch(function(response) {
      console.log(response);
      document.querySelector('#ajax').innerHTML = '<h1>Error - Connection Failed!</h1>';
    });
  }

  const htmlButton = document.getElementById('html');
  htmlButton.onclick = function(event) {
    event.preventDefault;
    render('template/test.html');
  };
});
