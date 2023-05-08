document.getElementById('items').addEventListener('click', function() {
    fetch('table.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('#content').innerHTML = html;
      });
  });