/**
 * Created by qr on 2015/12/13.  generator ���� 1
 */
//1 �첽������ͬ�������

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
// ����UI
loader.next()

// ж��UI
loader.next();