/* 全局样式，应用于整个网页 */
body,
html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: '楷体', SimSun, 'Times New Roman', Times, serif;
    overflow: hidden;
    background-color: #000;
}

/* 背景图片容器样式 */
.background-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; /* 修改为 cover */
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}

/* 描述容器样式 */
.description {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 描述容器悬浮时放大5% */
.description:hover {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.8);
}

/* 描述容器中的段落样式 */
.description p {
    color: #dcdcdc;
    margin: 0;
    transition: color 0.3s ease;
}

/* 标题样式 */
.title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

/* 描述文本样式 */
.sub p {
    font-size: 16px;
}

/* 描述文本悬浮时颜色高亮 */
.description:hover p {
    color: #fff;
}

/* 横屏提示样式 */
#orientation-warning {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
