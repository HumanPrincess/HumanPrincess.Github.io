// 当DOM内容加载完成后，执行fetchImageData函数
document.addEventListener("DOMContentLoaded", function () {
    if (isWechatBrowser()) {
        document.body.classList.add('rotate-90');
    }
    fetchImageData();
});

function isWechatBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) ==='micromessenger';
}

/**
 * 更新页面内容的函数，根据传入的数据更新图片标题、版权信息和故事内容
 * @param {Object} data - 包含图片信息的对象
 */
function updatePageContent(data) {
    const imageDescription = data.imgshow || '无描述';
    const imageTitle = data.imgtitle || '无标题';
    const titleElement = document.getElementById('image-title');
    const copyrightElement = document.getElementById('image-copyright');
    const storyElement = document.getElementById('image-story');
    if (titleElement) {
        titleElement.innerText = `${imageDescription} | ${imageTitle}`;
    }
    if (copyrightElement) {
        copyrightElement.innerText = data.imgcopyright || '无版权信息';
    }
    if (storyElement) {
        storyElement.innerHTML = data.imgdetail || '无故事内容';
    }
}

/**
 * 处理错误的函数，当发生错误时，更新图片标题为错误提示信息
 * @param {Error} error - 错误对象
 */
function handleError(error) {
    console.error('Error:', error);
    const titleElement = document.getElementById('image-title');
    if (titleElement) {
        titleElement.innerText = '加载失败，请检查网络连接或链接的合法性';
    }
}

/**
 * 获取图片数据的函数
 */
function fetchImageData() {
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    const dateString = `${year}${month}${day}`;
    const imageUrl = `https://bing.ee123.net/img/?date=${dateString}&type=json`;
    console.log('请求的 URL:', imageUrl);
    fetch(imageUrl)
       .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
       .then((data) => {
            console.log('API响应数据:', data);
            if (!data.imgurl) {
                console.error('API 响应中缺少 imgurl 字段');
                return;
            }
            const imageUrl = data.imgurl.replace(/\\/g, '');
            console.log('即将设置的背景图片 URL:', imageUrl);
            const backgroundImageDiv = document.querySelector('.background-image');
            if (backgroundImageDiv) {
                backgroundImageDiv.style.backgroundImage = `url('${imageUrl}')`;
                const windowWidth = window.innerWidth;
                if (windowWidth < 600) {
                    backgroundImageDiv.style.backgroundSize = 'contain';
                } else {
                    backgroundImageDiv.style.backgroundSize = 'cover';
                }
            } else {
                console.error('未找到 .background-image 元素');
            }
            updatePageContent(data);
        })
       .catch(handleError);
}