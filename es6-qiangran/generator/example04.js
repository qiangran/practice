/**
 * Created by qr on 2015/12/13.  generator 作用 1
 */
//1 异步操作的同步化表达

function showLoadingScreen(){
    console.log("showLoadingScreen");
}
function loadUIDataAsynchronously(){
    console.log("loadUIDataAsynchronously~~~~~~~~~~~~~~~~~~~~~");
}
function hideLoadingScreen(){
    console.log("hideLoadingScreen~~~~~~~~~~~~~~~~~~~~~");
}

function* loadUI() {
  showLoadingScreen();
  yield loadUIDataAsynchronously();
 hideLoadingScreen();
}
var loader = loadUI();
// 加载UI
loader.next()

// 卸载UI
loader.next();