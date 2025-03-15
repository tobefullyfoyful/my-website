let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击次数

// No 按钮的文本变化
const noTexts = [
    "？你认真的吗？", 
    "要不再想想？", 
    "不许选这个！", 
    "我会很伤心的", 
    "不行"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让“可以”按钮变大
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 让“不要”按钮向右移动
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // 让图片和标题向上移动
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 按钮文本变化
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 根据点击次数切换图片
    if (clickCount === 1) mainImage.src = "images/crying.png"; // 惊讶
    if (clickCount === 2) mainImage.src = "images/crying.png";   // 思考
    if (clickCount === 3) mainImage.src = "images/crying.png";   // 生气
    if (clickCount === 4) mainImage.src = "images/crying.png";  // 哭泣
    if (clickCount >= 5) mainImage.src = "images/crying.png";   // 哭泣
});

// Yes 按钮点击事件
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >&#10084;<)❤️</h1>
            <img src="images/hug.png" alt="!!!喜欢你!! ( >&#10084;<)❤️" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});