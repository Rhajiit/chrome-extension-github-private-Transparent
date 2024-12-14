function privateTransparent() {
  const privateRepository = document.querySelectorAll(
    ".Label.Label--secondary"
  );
  privateRepository.forEach((element) => {
    if (element.innerText === "Private") {
      element.parentNode.parentNode.parentNode.parentNode.style =
        "opacity: 50%";
    }
  });
}

const observer = new MutationObserver(() => {
  if (window.location.href.endsWith("?tab=repositories")) {
    privateTransparent();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
