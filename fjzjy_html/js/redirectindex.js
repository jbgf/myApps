var flag = true;
document.onmousemove = new Function('flag = false;');
function judgeMouse() {
	if(flag) {
		location.href = 'index.html';
	} else {
		flag = true;
	}
}
setInterval('judgeMouse()', 100000);//超时返回时间数（毫秒）