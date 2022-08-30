const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.querySelector("#emojiContainer");
const pushEnd = document.querySelector("#push-btn");
const pushBegin = document.querySelector("#unshift-btn");
const popBtn = document.querySelector("#pop-btn");
const shiftBtn = document.querySelector("#shift-btn");

const inputEmoji = document.querySelector("#emoji-input");

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const span = document.createElement("span");
    span.textContent = `${myEmojis[i]}`;
    emojiContainer.appendChild(span);
  }
}

renderEmojis();

pushEnd.addEventListener("click", () => {
  const emo = inputEmoji.value;
  if (emo.length === 0) return;
  myEmojis.push(emo);
  inputEmoji.value = "";
  renderEmojis();
});

pushBegin.addEventListener("click", () => {
  const emo = inputEmoji.value;
  if (emo.length === 0) return;
  myEmojis.unshift(emo);
  inputEmoji.value = "";

  renderEmojis();
});

popBtn.addEventListener("click", () => {
  myEmojis.pop();
  renderEmojis();
});

shiftBtn.addEventListener("click", () => {
  myEmojis.shift();
  renderEmojis();
});
