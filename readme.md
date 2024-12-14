## Github Private Transparent

깃허브에서 Private인 Repository의 투명도를 조절하여 타인에게 보일 Repository를 한눈에 알아볼 수 있게 하는 chrome Extension

privateTransparent라는 함수를 정의하여 'Private' 배지를 감지하고, 해당 뱃지를 지닌 Repository div를 선택하여 해당 div의 투명도를 50%로 조정합니다.

```JavaScript
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
```

SPA로 동작하는 깃허브 특성 상 한번만 실행되는 기존의 주소 고정식 chrome extension은 탭 이동시 제대로 스크립트가 작동하지 않아 새로고침을 해야하는 문제점이 있었습니다.

이러한 문제점을 와일드카드 \*를 통해 github가 포함되는 모든 주소를 감지하도록 설정하고, MutationObserver를 통해 url변경을 감지하여 감지한 url이 ?tab=repositories로 끝나는 경우에만 해당 함수를 실행할 수 있도록 하였습니다.

```JavaScript
const observer = new MutationObserver(() => {
  if (window.location.href.endsWith("?tab=repositories")) {
    privateTransparent();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
```
