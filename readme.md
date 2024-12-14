## Github Private Transparent

깃허브에서 Private인 Repository의 투명도를 조절하여 타인에게 보일 Repository를 한눈에 알아볼 수 있게 하는 chrome Extension

manifest.json 부분을 다음과 같이 설정하여 레포지토리 주소에 있을 경우에만 작동하도록 하였으며, 와일드카드 \*를 이용해 특정 사용자에 따른 구분을 하지 않도록 하였습니다.

```JSON
  "matches": ["https://github.com/*?tab=repositories"],
```

자신이 아닌 다른 사용자에 대하여 어떤 것이 감춰지고 어떤 것이 보일 것인지에 대한 시인성을 높이기 위해 만들어 졌습니다.
