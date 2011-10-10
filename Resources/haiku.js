/*var win2 = Titanium.UI.createWindow({
	title:'俳句',
	backButtonTitle:"戻る",
    backgroundColor:'#fff'
});*/
var win2 = Ti.UI.currentWindow;
var margin = 74;
var fieldHeight = 30;
var leftMargin = 15;

var haikuBody = Ti.UI.createView({
	height:'auto',
	width:'auto',
	layout:'horizontal'
});
win2.add(haikuBody);

var haikuFirst = Titanium.UI.createLabel({
	text:win2.first,
	color:'#222222',
	font:{fontSize:35, fontFamily:'KouzanBrushFont'},
	height: 'auto',
	width:38,
	top:-margin,
	left:leftMargin
});

var haikuSecond = Titanium.UI.createLabel({
	text:win2.second,
	color:'#222222',
	font:{fontSize:35, fontFamily:'KouzanBrushFont'},
	height: 'auto',
	width:38,
	top:0,
	left:0
});

var haikuTherd = Titanium.UI.createLabel({
	text:win2.therd,
	color:'#222222',
	font:{fontSize:35, fontFamily:'KouzanBrushFont'},
	height: 'auto',
	width:38,
	top:(margin*1.4),
	right:leftMargin
});

haikuBody.add(haikuTherd);
haikuBody.add(haikuSecond);
haikuBody.add(haikuFirst);