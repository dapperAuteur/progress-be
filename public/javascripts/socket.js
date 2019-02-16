(function() {
  let socket = io("http://localhost:3000");

  const doneBtn = document.getElementById("doneBtn");

  doneBtn.addEventListener("click", e => {
    socket.emit("press", { isPressed: true });
  });
})();
