const app = document.querySelector(".app"),
      input = document.querySelector("input");

input.addEventListener("keypress", popLateTag);

function popLateTag(e) {
  if (e.key !== "Enter") { return; }
  const span = document.createElement("span");
  span.innerText = e.target.value.trim();
  span.setAttribute("onclick", "this.remove()");
  app.insertBefore(span, input);
  input.value = "";
}