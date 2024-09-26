const segments = document.querySelectorAll('.segment'); // 选择所有的path元素
const secondpage = document.querySelector('.secondpage');
const title = document.querySelector('.customize');
let selectedSegments = new Set(); // 用 Set 来存储选中状态

// 为每个path绑定mouseover和mouseout事件
segments.forEach(segment => {
    segment.addEventListener('mouseover', (event) => {
        const segmentId = event.target.id; // 获取当前悬停的元素id
        changeBackground(segmentId); // 调用背景切换函数
        showDescription(segmentId);
        
        const lineClass = event.target.classList[1] + '-line';
        const textClass = event.target.classList[1] + '-text';
        const textClass2 = event.target.classList[1] + '-text-2';
        
        if (!selectedSegments.has(event.target)) {
            event.target.classList.add('transformed'); // 添加缩放效果
            document.querySelector('.' + lineClass).style.display = 'block';
            document.querySelector('.' + textClass).style.display = 'block';
            document.querySelector('.' + textClass2).style.display = 'block';
        }
    });

    segment.addEventListener('mouseout', (event) => {
        if (!selectedSegments.has(event.target)) {
            hideDescription();
            event.target.classList.remove('transformed'); // 移除缩放效果
            const lineClass = event.target.classList[1] + '-line';
            const textClass = event.target.classList[1] + '-text';
            const textClass2 = event.target.classList[1] + '-text-2';

            document.querySelector('.' + lineClass).style.display = 'none';
            document.querySelector('.' + textClass).style.display = 'none';
            document.querySelector('.' + textClass2).style.display = 'none';
        }
    });

    segment.addEventListener('click', (event) => {
        if (selectedSegments.has(event.target)) {
            // 取消选中
            selectedSegments.delete(event.target);
            event.target.classList.remove('selected', 'transformed'); // 移除变换效果
            const lineClass = event.target.classList[1] + '-line';
            const textClass = event.target.classList[1] + '-text';
            const textClass2 = event.target.classList[1] + '-text-2';

            document.querySelector('.' + lineClass).style.display = 'none';
            document.querySelector('.' + textClass).style.display = 'none';
            document.querySelector('.' + textClass2).style.display = 'none';
        } else {
            // 选中状态
            selectedSegments.add(event.target);
            event.target.classList.add('selected', 'transformed'); // 添加变换效果
            const lineClass = event.target.classList[1] + '-line';
            const textClass = event.target.classList[1] + '-text';
            const textClass2 = event.target.classList[1] + '-text-2';

            document.querySelector('.' + lineClass).style.display = 'block';
            document.querySelector('.' + textClass).style.display = 'block';
            document.querySelector('.' + textClass2).style.display = 'block';
        }
    });
});


// 根据id切换背景图片
function changeBackground(segmentId) {
    switch (segmentId) {
        case 'segment1':
            secondpage.style.backgroundImage = 'url("./images/drywoods.png")';
            title.style.color = 'white';
            break;
        case 'segment2':
            secondpage.style.backgroundImage = 'url("./images/aromatic.jpg")';
            title.style.color = 'black';
            break;
        case 'segment3':
            secondpage.style.backgroundImage = 'url("./images/citrus.jpg")';
            title.style.color = 'black';
            break;
        case 'segment4':
            secondpage.style.backgroundImage = 'url("./images/water.jpg")';
            title.style.color = 'black';
            break;
        case 'segment5':
            secondpage.style.backgroundImage = 'url("./images/green.jpg")';
            title.style.color = 'white';
            break;
        case 'segment6':
            secondpage.style.backgroundImage = 'url("./images/fruity.jpg")';
            title.style.color = 'white';
            break;
        case 'segment7':
            secondpage.style.backgroundImage = 'url("./images/floral.jpg")';
            title.style.color = 'white';
            break;
        case 'segment8':
            secondpage.style.backgroundImage = 'url("./images/soft-floral.jpg")';
            title.style.color = 'black';
            break;
        case 'segment9':
            secondpage.style.backgroundImage = 'url("./images/floral-oriental.jpg")';
            title.style.color = 'white';
            break;
        case 'segment10':
            secondpage.style.backgroundImage = 'url("./images/soft-oriental.png")';
            title.style.color = 'white';
            break;
        case 'segment11':
            secondpage.style.backgroundImage = 'url("./images/oriental.jpeg")';
            title.style.color = 'white';
            break;
        case 'segment12':
            secondpage.style.backgroundImage = 'url("./images/woody-oriental.png")';
            title.style.color = 'white';
            break;
        case 'segment13':
            secondpage.style.backgroundImage = 'url("./images/woods.jpeg")';
            title.style.color = 'white';
            break;
        case 'segment14':
            secondpage.style.backgroundImage = 'url("./images/mossy-woods.jpg")';
            title.style.color = 'white';
            break;
    }
}

function showLineAndText(segment) {
    const lineClass = segment.classList[1] + '-line';
    const textClass = segment.classList[1] + '-text';
    const textClass2 = segment.classList[1] + '-text-2';

    document.querySelector('.' + lineClass).style.display = 'block';
    document.querySelector('.' + textClass).style.display = 'block';
    document.querySelector('.' + textClass2).style.display = 'block';
}

function hideLineAndText(segment) {
    const lineClass = segment.classList[1] + '-line';
    const textClass = segment.classList[1] + '-text';
    const textClass2 = segment.classList[1] + '-text-2';

    document.querySelector('.' + lineClass).style.display = 'none';
    document.querySelector('.' + textClass).style.display = 'none';
    document.querySelector('.' + textClass2).style.display = 'none';
}


document.querySelectorAll('.round-button').forEach(button => {
  button.addEventListener('click', function() {
      // 切换选中状态
      this.classList.toggle('button-selected');
  });
});

// button 1
document.querySelector('.lemon').addEventListener('click', function() {
    const pathElements = document.getElementsByClassName('citrus'); // 获取所有类名为 citrus 的元素
    if (pathElements.length > 0) {
        const citrusSegment = pathElements[0];

        // 切换选中状态
        if (selectedSegments.has(citrusSegment)) {
            selectedSegments.delete(citrusSegment); // 取消选中
            citrusSegment.classList.remove('transformed'); // 移除效果
            hideLineAndText(citrusSegment); // 隐藏线条和文本
        } else {
            selectedSegments.add(citrusSegment); // 添加选中
            citrusSegment.classList.add('transformed'); // 添加效果
            showLineAndText(citrusSegment); // 显示线条和文本
        }
    }
});

// button 2
document.querySelector('.grass').addEventListener('click', function() {
    const pathElements = document.getElementsByClassName('mossy-woods'); // 获取所有类名为 citrus 的元素
    if (pathElements.length > 0) {
        const mossywoodsSegment = pathElements[0];

        // 切换选中状态
        if (selectedSegments.has(mossywoodsSegment)) {
            selectedSegments.delete(mossywoodsSegment); // 取消选中
            mossywoodsSegment.classList.remove('transformed'); // 移除效果
            hideLineAndText(mossywoodsSegment); // 隐藏线条和文本
            this.classList.remove('button-selected'); // 更新按钮状态
        } else {
            selectedSegments.add(mossywoodsSegment); // 添加选中
            mossywoodsSegment.classList.add('transformed'); // 添加效果
            showLineAndText(mossywoodsSegment); // 显示线条和文本
            this.classList.add('button-selected'); // 更新按钮状态
        }
    }
});


let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.5 + 'px';
});


// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     if (value > secondpage.offsetHeight) {
//         selectedSegments.forEach(segment => {
//             segment.classList.add('fall-animation');
//         });
//     } else {
//         // Remove the animation class if scrolling back
//         selectedSegments.forEach(segment => {
//             segment.classList.remove('fall-animation');
//         });
//     }
// });




// 创建一个函数来显示描述
function showDescription(segmentId) {
    let description;
    switch (segmentId) {
        case 'segment1':
            description = "干木香调 皮革和烟草的味道为木质香味增添了干燥的烟熏味，成熟而稳重";
            break;
        case 'segment2':
            description = "芳馥香调 恍若置身薰衣草和天竺葵混合柑橘，草药和木材的馥郁中";
            break;
        case 'segment3':
            description = "柑橘调 来闻一闻清新的佛手柑、柠檬、柑橘和酸橙，橙子和葡萄柚的味道吗，走在阳光下的果园中，芬芳沁人心脾";
            break;
        case 'segment4':
            description = "清新调 站在沙滩上，细嗅海风的清香；漫步森林间体会瀑布的清新，感受雷雨过后潮湿空气的独特嗅觉体验";
            break;
        case 'segment5':
            description = "绿叶调 新割的草、紫罗兰叶或黄瓜的清香刺激着你的感官";
            break;
        case 'segment6':
            description = "水果调 果园的水果，各种颜色的浆果，加上花的香味，仿佛在品尝一杯美味的水果花香鸡尾酒";
            break;
        case 'segment7':
            description = "花香调 从单一花朵的协奏曲到一捧不同种类花朵奏响的交响乐，今天我们的的调香师捕捉到娇翠欲滴的花朵精华，只为您提供最高级的香氛原料";
            break;
        case 'segment8':
            description = "柔软花香调 晶莹剔透的醛液与花朵麝香的精致结合创造了柔软的，宛若细粉般的朦胧花氛";
            break;
        case 'segment9':
            description = "东方花香调 想象一下用香料、树脂和香草加热的闪耀花朵正是您香水中的原料之一";
            break;
        case 'segment10':
            description = "柔香东方调 在甜香料和树脂上施下魔香咒语，协调出柔和的香味会最大程度地安抚您的感官";
            break;
        case 'segment11':
            description = "东方调 宛若散发着金光的树脂、华丽花朵和甜香草都融化在这无形的空间里";
            break;
        case 'segment12':
            description = "木质东方调 浓烈的琥珀香与广藿香、木香和檀香的香味交织在一起";
            break;
        case 'segment13':
            description = "木质调 纯粹的木质气息使雪松、广藻香、松木、檀香和香根草的香味谱写出和谐的奏鸣曲乐章";
            break;
        case 'segment14':
            description = "苔木香调 天鹅绒般的橡木苔和广藿香的味道与琥珀和柑橘的味道完美融合在一起，让人沉溺";
            break;
    }
    // 显示描述（可以在你的HTML中有一个元素用于显示）
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = description;
    descriptionElement.style.display = 'block'; // 显示描述
}

function hideDescription() {
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = "";
    descriptionElement.style.display = 'none'; // 显示描述
}

document.getElementById("finish-button").addEventListener("click", function() {
    // 显示新部分
    const newSection = document.getElementById("new-section");
    newSection.classList.add('newsection-activated');
    
    selectedSegments.forEach(segment => {
        segment.classList.add('fall-animation');
    });

    // 延时一秒钟再滚动
    setTimeout(() => {
        newSection.scrollIntoView({ behavior: "smooth" });
    }, 200);
});



const items = document.querySelectorAll('.gardenia, .iris, .litchi, .orange, .rock, .styrax, .vanilla');
const pot = document.getElementById('pot');

// 为每个元素添加点击事件
items.forEach(item => {
  item.addEventListener('click', function() {
    // 计算目标位置
    const targetX = pot.offsetLeft + 200;
    const targetY = pot.offsetTop + 200;

    // 设置元素的 transform 属性以移动到目标位置
    item.style.transform = `translate(${targetX - item.offsetLeft}px, ${targetY - item.offsetTop}px)`;
    item.style.transition = 'transform 0.5s ease';
    
  });
});



// const pot = document.getElementById('pot');
// const items = document.querySelectorAll('.gardenia, .iris, .litchi, .orange, .rock, .styrax, .vanilla');

// // 为每个食材添加点击事件
// items.forEach(item => {
//   item.addEventListener('click', function() {
//     // 计算食材相对于锅中心的移动距离
//     const itemCenterX = pot.offsetLeft + pot.offsetWidth / 2;
//     const itemCenterY = pot.offsetLeft + pot.offsetHeight / 2;

//     // 设置食材的 transform 属性以移动到锅中心
//     const translateX = itemCenterX - itemCenterX;
//     const translateY = itemCenterY - itemCenterY;

//     this.style.transform = `translate(${translateX}px, ${translateY}px)`;

//     // 应用过渡效果
//     this.style.transition = 'transform 0.5s ease';
//   });
// });



// 监听点击事件
pot.addEventListener('click', function() {
    this.classList.add('squash-stretch-animation');
});


function openPopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.querySelector('.popup');
    overlay.style.display = 'flex'; // 显示遮罩层
    setTimeout(() => { // 确保popup已经渲染
        popup.style.transform = 'translateY(-50%)'; // 移动弹出框到屏幕中间
        popup.style.transition = 'transform 0.5s ease-in-out'; // 应用过渡效果
    }, 0);
}

function closePopup() {
    const popup = document.querySelector('.popup');
    popup.style.transform = 'translateY(100%)'; // 移动弹出框出视图
    popup.style.transition = 'transform 0.5s ease-in-out'; // 应用过渡效果
    const overlay = document.getElementById('overlay');
    setTimeout(() => overlay.style.display = 'none', 500); // 延时隐藏遮罩层
}

document.getElementById('pot').addEventListener('click', function() {
    setTimeout(openPopup, 1500); // 点击后2秒打开弹出框
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    closePopup(); // 提交后关闭弹出框
    // 这里可以添加 AJAX 请求发送数据
    window.location.href = './final.html';
});
