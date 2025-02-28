let spanCount = 0;

document.addEventListener("DOMContentLoaded", () =>
{
  function createFallingSpan()
  {
    if (spanCount >= 20) return;
    const bgSpan = document.createElement("span");
    spanCount += 1;
    let speed = Math.floor(Math.random() * 4 + 2);
    bgSpan.textContent = speed % 2;
    bgSpan.style.position = "absolute";
    bgSpan.style.left = Math.random() * (window.innerWidth - 20) + "px";
    bgSpan.style.top = "0px";
    bgSpan.style.fontSize = "24px";
    bgSpan.style.color = "green";
    bgSpan.style.zIndex = -1;
    bgSpan.style.userSelect = "none";
    document.body.appendChild(bgSpan);
    
    function fall()
    {
      let top = parseInt(bgSpan.style.top);
      if (top >= window.innerHeight - 50)
      {
        document.body.removeChild(bgSpan);
        spanCount -= 1;
      } else {
        bgSpan.style.top = (top + speed) + "px";
        requestAnimationFrame(fall);
      }
    }
    requestAnimationFrame(fall);
  }
  
  setInterval(createFallingSpan, 100);
});
