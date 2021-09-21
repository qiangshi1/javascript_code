# navigator实现根据浏览器类型（PC或者移动端）跳转网页

核心是这句话：`navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)`, 可以区分浏览器是PC还是移动端。这句话用到了正则表达式。
