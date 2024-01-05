window.onload = function() {
    setInterval(OrologioInFunzione, 1000);
  };
  
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function OrologioInFunzione() {
    let orologio = document.getElementById("orologio");
    let d = new Date();
    let date = d.getDate();
    let ora = addZero(d.getHours());
    let min = addZero(d.getMinutes());
    let sec = addZero(d.getSeconds());
    orologio.innerHTML = ora + ":" + min + ":" + sec;
  }
  
  document.addEventListener('DOMContentLoaded', OrologioInFunzione)