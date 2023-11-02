let handleOpenPopup = (event) => {
  let imgSrc = event.target.src;
  let div = document.createElement("div");
  div.style.width = 50 + "%";
  div.style.height = 50 + "vh";
  div.style.backgroundColor = "#000";
  div.style.position = "fixed";
  div.style.top = 0;

  div.innerHTML = `<div style=" height : 100% ;  display : flex; align-items : center; justify-content: center; position: relative ;">
    <button
        onclick="handleClose(event)"
        style=" position : absolute; top : 10px ; right : 10px ; background-color : red "
    >close</button>
    <img style=" height: 300px; "  src="${imgSrc}"></img>
  </div> `;

  document.body.append(div);
};

const handleClose = (event) => {
    event.target.parentElement.parentElement.remove();
};
