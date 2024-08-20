// 函数：更新页面内容
function updatePageContent(data) {
    const showText = data.imgshow || '无描述';
    const titleText = data.imgtitle || '无标题';
    document.getElementById('image-title').innerText = `${showText} | ${titleText}`;
    document.getElementById('image-copyright').innerText = data.imgcopyright || '无版权信息';
    document.getElementById('image-story').innerHTML = data.imgdetail || '无故事内容';
}

// 函数：处理API错误
function handleError(error) {
    console.error('Error:', error);
    document.getElementById('image-title').innerText = '加载失败';
    document.getElementById('image-copyright').innerText = '加载失败';
    document.getElementById('image-story').innerText = '加载失败';
}

// 获取图片信息并更新页面
function fetchImageData() {
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, '0');
    const day = String(today.getUTCDate()).padStart(2, '0');
    const dateString = `${year}${month}${day}`;

    fetch(`https://bing.ee123.net/img/?date=${dateString}&type=json`)
      .then(response => response.json())
      .then(data => {
          console.log('API响应数据:', data);

          // 更新背景图片
          document.querySelector('.background-image').style.backgroundImage = `url('${data.imgurl}')`;

          // 更新页面中的内容
          updatePageContent(data);
      })
      .catch(handleError);
}

// 初始化加载数据
fetchImageData();
