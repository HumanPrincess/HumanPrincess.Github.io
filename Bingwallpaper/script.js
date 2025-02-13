// 当DOM内容加载完成后，执行fetchImageData函数
document.addEventListener("DOMContentLoaded", function () {
    // 开始获取图片数据
    fetchImageData();
});

/**
 * 更新页面内容的函数，根据传入的数据更新图片标题、版权信息和故事内容
 * @param {Object} data - 包含图片信息的对象
 */
function updatePageContent(data) {
    // 获取图片描述信息，若不存在则显示“无描述”
    const imageDescription = data.imgshow || '无描述';
    // 获取图片标题信息，若不存在则显示“无标题”
    const imageTitle = data.imgtitle || '无标题';

    // 获取图片标题元素
    const titleElement = document.getElementById('image-title');
    // 获取图片版权信息元素
    const copyrightElement = document.getElementById('image-copyright');
    // 获取图片故事内容元素
    const storyElement = document.getElementById('image-story');

    // 如果标题元素存在，则更新其文本内容
    if (titleElement) {
        titleElement.innerText = `${imageDescription} | ${imageTitle}`;
    }
    // 如果版权信息元素存在，则更新其文本内容
    if (copyrightElement) {
        copyrightElement.innerText = data.imgcopyright || '无版权信息';
    }
    // 如果故事内容元素存在，则更新其HTML内容
    if (storyElement) {
        storyElement.innerHTML = data.imgdetail || '无故事内容';
    }
}

/**
 * 处理错误的函数，当发生错误时，更新图片标题为错误提示信息
 * @param {Error} error - 错误对象
 */
function handleError(error) {
    // 在控制台输出错误信息
    console.error('Error:', error);
    // 获取图片标题元素
    const titleElement = document.getElementById('image-title');
    // 如果标题元素存在，则更新其文本内容为错误提示信息
    if (titleElement) {
        titleElement.innerText = '加载失败，请检查网络连接或链接的合法性';
    }
}

/**
 * 获取图片数据的函数
 */
function fetchImageData() {
    // 获取当前日期
    const currentDate = new Date();
    // 获取当前年份
    const year = currentDate.getUTCFullYear();
    // 获取当前月份，月份从0开始，需要加1，并补零
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
    // 获取当前日期，并补零
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    // 拼接日期字符串
    const dateString = `${year}${month}${day}`;

    // 拼接图片API请求URL
    const imageUrl = `https://bing.ee123.net/img/?date=${dateString}&type=json`;
    // 在控制台输出请求的URL
    console.log('请求的 URL:', imageUrl);

    // 发起网络请求
    fetch(imageUrl)
        .then((response) => {
            // 如果响应状态码不是200-299之间，抛出错误
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // 将响应数据解析为JSON格式
            return response.json();
        })
        .then((data) => {
            // 在控制台输出API响应数据
            console.log('API响应数据:', data);

            // 如果响应数据中缺少imgurl字段，在控制台输出错误信息并返回
            if (!data.imgurl) {
                console.error('API 响应中缺少 imgurl 字段');
                return;
            }

            // 去除imgurl中的反斜杠
            const imageUrl = data.imgurl.replace(/\\/g, '');
            // 在控制台输出即将设置的背景图片URL
            console.log('即将设置的背景图片 URL:', imageUrl);

            // 获取背景图片容器元素
            const backgroundImageDiv = document.querySelector('.background-image');
            // 如果背景图片容器元素存在，则设置其背景图片
            if (backgroundImageDiv) {
                backgroundImageDiv.style.backgroundImage = `url('${imageUrl}')`;
            } else {
                // 如果背景图片容器元素不存在，在控制台输出错误信息
                console.error('未找到 .background-image 元素');
            }

            // 调用updatePageContent函数更新页面内容
            updatePageContent(data);
        })
        .catch(handleError);
}