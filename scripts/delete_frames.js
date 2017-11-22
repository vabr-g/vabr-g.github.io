function deleteWithTimer() {
  window.setTimeout(function() {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; ++i) {
      document.body.removeChild(iframes[i]);
    }
  }, 5000);
}

window.onload=(function() {
  document.getElementById("deleteButton5s").addEventListener("click", deleteWithTimer);
});
