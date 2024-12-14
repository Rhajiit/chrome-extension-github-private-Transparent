const privateRepository = document.querySelectorAll(".Label.Label--secondary");
privateRepository.forEach((element) => {
  if (element.innerText === "Private") {
    element.parentNode.parentNode.parentNode.parentNode.style = "opacity: 50%";
  }
});
