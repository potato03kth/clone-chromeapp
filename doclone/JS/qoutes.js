const quotes = [
  {
    quote:
      "당신이 어떤 위험을 감수하냐를 보면 당신이 무엇을 가치있게 여기는지 알 수 있다",
    auther: "자넷 윈터슨",
  },
  {
    quote:
      "멈춰서 두려움에 떨게 만드는 모든 경험을 통해 강인함, 용기, 자신감을 얻는다 이런 공포를 이겨냈으니 다음에 오는 것도 문제 없어 라고 스스로 되뇌일 수 있게 된다 따라서 할 수 없다고 생각되는 일을 하라",
    auther: "엘리노어 루즈벨트",
  },
  {
    quote: "오늘 적극적으로 실행한 계획은 내일의 완벽한 계획보다 훨씬 낫다.",
    auther: "조지 패튼 -2차 세계대전 중에-",
  },
  {
    quote: "태만을 즐기고 있을 때는 태만함을 느끼지 못한다.",
    auther: "가스가 센안",
  },
  {
    quote: "걱정없는 인생을 바라지 말고 걱정에 물들지 않는 연습을 하라.",
    auther: "알랭 비타",
  },
  {
    quote: "깊고 넓은 감정의 바다가 있다.",
    auther: "김춘수",
  },
  {
    quote:
      "많이 가진 사람은 더 많은 것을 손에 넣는다. 조금밖에 갖지 못한 사람은 그것마저 빼앗긴다.",
    auther: "하인리히 하이네",
  },
  {
    quote: "나는 나 자신을 빼놓고는 모두 안다.",
    auther: "비용",
  },
  {
    quote:
      "칭찬에 흔들리지 않는 사람도 자기의 이야기를 열심히 들어주는 사람앞에 마음이 흔들린다.",
    auther: "잭 우드포드",
  },
  {
    quote: "울림이 있어야 삶이 활기차고 신선하다.",
    auther: "법정",
  },
  {
    quote: "fuck you nvidia",
    auther: "linus Torvalds",
  },
];

const quoteSelecter = document.querySelector(".zitieren span:first-child");
const autherSelecter = document.querySelector(".zitieren span:last-child");

function nummernwähler() {
  const selectedNumber = Math.random();
  objectPick = quotes[Math.floor(selectedNumber * quotes.length)];
  const a = objectPick.quote;
  const b = objectPick.auther;
  const assembledstring = `&lt${b}&gt`;
  quoteSelecter.innerHTML = a;
  autherSelecter.innerHTML = `${assembledstring}`;
  return Math.floor(selectedNumber * quotes.length);
}

nummernwähler();
// quoteSelecter.innerHTML =
