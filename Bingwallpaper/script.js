// 函数：更新页面内容
function updatePageContent(data) {
    const showText = data.imgshow || '无描述';
    const titleText = data.imgtitle || '无标题';
    const titleElement = document.getElementById('image-title');
    const copyrightElement = document.getElementById('image-copyright');
    const storyElement = document.getElementById('image-story');

    if (titleElement) {
        titleElement.innerText = `${showText} | ${titleText}`;
    } else {
        console.error('未找到 image-title 元素');
    }

    if (copyrightElement) {
        copyrightElement.innerText = data.imgcopyright || '无版权信息';
    } else {
        console.error('未找到 image-copyright 元素');
    }

    if (storyElement) {
        storyElement.innerHTML = data.imgdetail || '无故事内容';
    } else {
        console.error('未找到 image-story 元素');
    }
}

// 函数：处理API错误
function handleError(error) {
    console.error('Error:', error);
    const titleElement = document.getElementById('image-title');
    const copyrightElement = document.getElementById('image-copyright');
    const storyElement = document.getElementById('image-story');

    if (titleElement) {
        titleElement.innerText = '加载失败，请检查网络连接或链接的合法性';
    }

    if (copyrightElement) {
        copyrightElement.innerText = '加载失败，请检查网络连接或链接的合法性';
    }

    if (storyElement) {
        storyElement.innerText = '加载失败，请检查网络连接或链接的合法性';
    }
}

// 带超时的 fetch 函数
function fetchWithTimeout(url, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error('请求超时'));
        }, timeout);

        fetch(url)
            .then(response => {
                clearTimeout(timeoutId);
                resolve(response);
            })
            .catch(error => {
                clearTimeout(timeoutId);
                reject(error);
            });
    });
}

// 获取图片信息并更新页面
function fetchImageData() {
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, '0');
    const day = String(today.getUTCDate()).padStart(2, '0');
    const dateString = `${year}${month}${day}`;

    const imageUrl = `https://bing.ee123.net/img/?date=${dateString}&type=json`;
    console.log('请求的 URL:', imageUrl);

    fetchWithTimeout(imageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('API响应数据:', data);

            if (!data.imgurl) {
                console.error('API 响应中缺少 imgurl 字段');
                return;
            }

            const backgroundImageDiv = document.querySelector('.background-image');
            if (backgroundImageDiv) {
                console.log('即将设置的背景图片 URL:', data.imgurl);
                backgroundImageDiv.style.backgroundImage = `url('${data.imgurl}')`;
            } else {
                console.error('未找到 .background-image 元素');
            }

            // 更新页面中的内容
            updatePageContent(data);
        })
        .catch(handleError);
}

// 初始化加载数据
fetchImageData();

// 检测是否为移动设备
function isMobileDevice() {
    return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// 检测屏幕方向
function checkOrientation() {
    const warning = document.getElementById('orientation-warning');
    if (isMobileDevice() && window.innerWidth < window.innerHeight) {
        warning.style.display = 'flex';
    } else {
        warning.style.display = 'none';
    }
}

// 监听屏幕方向变化
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('resize', checkOrientation);

// 页面加载时检查一次
checkOrientation();
