// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var margin = 10;
var fieldHeight = 30;

var tabGroup = Ti.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'俳句を入力',
    backgroundColor:'#fff',
    tabBarHidden:true
});

var tab = Ti.UI.createTab({
    title:"Doesn't matter",
    window: win1
});

var body = Titanium.UI.createView({top:margin, height:'50%', layout:'vertical', backgroundColor:'#fff'});
win1.add(body);

var label1 = Titanium.UI.createLabel({
	text:'七五調で俳句を入力してください',
	color:'#222222',
	font:{fontSize:22, fontFamily:'KouzanBrushFont'},
	height: 48,
	width:250,
	top:margin
});

var tf1 = Titanium.UI.createTextField({
	color:'#222222',
	font:{fontSize:18, fontFamily:'KouzanBrushFont'},
	height:fieldHeight,
	top:margin,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
});
tf1.addEventListener('return',function(e)
{
	tf2.focus();
});

var tf2 = Titanium.UI.createTextField({
	color:'#222222',
	font:{fontSize:18, fontFamily:'KouzanBrushFont'},
	height:fieldHeight,
	top:margin,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
});
tf2.addEventListener('return',function(e)
{
	tf3.focus();
});

var tf3 = Titanium.UI.createTextField({
	color:'#222222',
	font:{fontSize:18, fontFamily:'KouzanBrushFont'},
	height:fieldHeight,
	top:margin,
	width:250,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType:Titanium.UI.RETURNKEY_DONE,
	clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
});
tf3.addEventListener('return',function(e)
{
	genbtn.fireEvent("click");
});

var genbtn = Titanium.UI.createButton({
	color: '#004',
	title: "俳句を詠む",
	top:margin,
	width: 250,
	height:(fieldHeight * 1.5)
});

genbtn.addEventListener("click", function(){
	var win2 = Ti.UI.createWindow({
		url:"haiku.js",
		title:'俳句',
		backButtonTitle:"戻る",
	    backgroundColor:'#fff',
	    backgroundImage:'washi.jpg'
	});
	win2.first = tf1.value;
	win2.second = tf2.value;
	win2.therd = tf3.value;
	tab.open(win2, {animated:true});
	
});

body.add(label1);
body.add(tf1);
body.add(tf2);
body.add(tf3);
body.add(genbtn);




tabGroup.addTab(tab);
tabGroup.open();
