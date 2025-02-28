document.addEventListener("DOMContentLoaded", () => {
  const bg = document.getElementById("bg");
  bg.style.position = "relative"; // 親要素の position を relative に設定
  
  function createFallingSpan() {
    const span = document.createElement("span");
    span.textContent = Math.floor(Math.random() * 2); // 落下する要素の内容
    span.style.position = "absolute";
    span.style.left = Math.random() * (window.innerWidth - 20) + "px";
    span.style.top = "0px";
    span.style.fontSize = "24px";
    span.style.color = "green";
    span.style.zIndex = -1;
    document.body.appendChild(span);
    
    let speed = Math.random() * 4 + 2; // 落下速度 (1~3px)
    
    function fall() {
      let top = parseFloat(span.style.top);
      if (top >= window.innerHeight - 50) { // 画面下より20px上で消える
        document.body.removeChild(span); // 画面外に出たら削除
      } else {
        span.style.top = (top + speed) + "px";
        requestAnimationFrame(fall);
      }
    }
    requestAnimationFrame(fall); // アニメーション開始
  }
  
  setInterval(createFallingSpan, 100); // 0.5秒ごとに新しい要素を追加
});
