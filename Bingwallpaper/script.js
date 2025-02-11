document.addEventListener("DOMContentLoaded", function () {
    fetchImageData();
});

function updatePageContent(data) {
    const showText = data.imgshow || '无描述';
    const titleText = data.imgtitle || '无标题';
    const titleElement = document.getElementById('image-title');
    const copyrightElement = document.getElementById('image-copyright');
    const storyElement = document.getElementById('image-story');

    if (titleElement) titleElement.innerText = `${showText} | ${titleText}`;
    if (copyrightElement) copyrightElement.innerText = data.imgcopyright || '无版权信息';
    if (storyElement) storyElement.innerHTML = data.imgdetail || '无故事内容';
}

function handleError(error) {
    console.error('Error:', error);
    const titleElement = document.getElementById('image-title');
    if (titleElement) titleElement.innerText = '加载失败，请检查网络连接或链接的合法性';
}

function fetchImageData() {
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, '0');
    const day = String(today.getUTCDate()).padStart(2, '0');
    const dateString = `${year}${month}${day}`;

    const imageUrl = `https://bing.ee123.net/img/?date=${dateString}&type=json`;
    console.log('请求的 URL:', imageUrl);

    fetch(imageUrl)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log('API响应数据:', data);

            if (!data.imgurl) {
                console.error('API 响应中缺少 imgurl 字段');
                return;
            }

            const imgurl = data.imgurl.replace(/\\/g, '');
            console.log('即将设置的背景图片 URL:', imgurl);

            const backgroundImageDiv = document.querySelector('.background-image');
            if (backgroundImageDiv) {
                backgroundImageDiv.style.backgroundImage = `url('${imgurl}')`;
            } else {
                console.error('未找到 .background-image 元素');
            }

            updatePageContent(data);
        })
        .catch(handleError);
}