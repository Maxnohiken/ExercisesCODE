const Checkbox = document.getElementById('checkbox');

function OnClick() {
  const Contenuto = document.getElementById('opzione');
  if (Contenuto.style.display === "flex" ) {
    Contenuto.style.display = "none";
  } else {
    Contenuto.style.display = "flex";
  }
}

Checkbox.addEventListener('click', OnClick);