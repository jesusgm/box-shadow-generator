document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", inputChanged);
});

document.getElementById("btn-result").addEventListener("click", getCode);

getCode();

function inputChanged(e) {
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  );

  getCode();
}

function getCode(e) {
  // Gets Values from Inputs
  var x = document.getElementById("x-position").value;
  var y = document.getElementById("y-position").value;
  var blur = document.getElementById("blur").value;
  var spread = document.getElementById("spread").value;
  var shadow = document.getElementById("shadow-color").value;

  // Writes Values to HTML
  var cssCode = `
    box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${shadow};<br/>
    -webkit-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${shadow};<br/>
    -moz-box-shadow: ${x}px ${y}px ${blur}px ${spread}px ${shadow};<br/>
  `;

  document.getElementById("output").innerHTML = cssCode;
}
