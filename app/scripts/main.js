
$(function(){
	initialize();
});


var initialize = function(){

	//Select
	var list = imglist;
	buildSelect(list);
	currVal = $('.pic_select').val();
	//Main Pic
	var main_pic = '';
	main_pic += '<img src="' + list[currVal][0]["Image"] + '">';
	$('.main_pic').append(main_pic);
	//Main Title
	var title_ = '';
	title_ += '<p class="title">"' + list[currVal][0]["Title"] + '"</p>';
	$('.main_title').append(title_);
	//Main UL
	buildUL(list, currVal);

};


var buildSelect = function(list){

	var _select = '';
	_select += '<select class="pic_select" name="">';
	for(var k in list){
		_select += '<option value="' + k + '">';
		_select += k;
		_select += '</option>';	
	}
	_select += '</select>';
	$('._select').append(_select);


	$('.pic_select').change(function(){
		newVal = $('.pic_select').val();
		var evnt = 'select';
		updateMainPic(list, newVal, evnt);
		var titleval = list[newVal][0]["Title"]
		updateTitle(list, titleval, evnt);
		buildUL(list, newVal);
	});

};

var updateMainPic = function(list, newVal, evnt){

	$('.main_pic').empty();
	var updatePic ='';
	switch(evnt){
		case 'select':
			updatePic += '<img src="' + list[newVal][0]["Image"] + '">';
		break;

		case 'li':
			updatePic += '<img src="' + newVal + '">';
		break;
	}
	$('.main_pic').append(updatePic);

};

var buildUL = function(list, val){

	$('.left_showcase').empty();
	var _ulist = '';
	_ulist += '<ul>';
	for(var i=0; i<list[val].length; i++){
		_ulist += '<li data-title="' + list[val][i]["Title"] + '"data-pic="' + list[val][i]["Image"] + '">';
		_ulist += list[val][i]["Title"];
		_ulist += '</li>';
	}
	_ulist += '</ul>';
	$('.left_showcase').append(_ulist);
	$('.left_showcase ul li:first').addClass('black_li');

	$('.left_showcase ul li').click(function(){
		$('.left_showcase ul li').removeClass('black_li');
		$(this).addClass('black_li');

		var picval = $(this).attr('data-pic');
		var titleval = $(this).attr('data-title');
		var evnt = 'li';
		updateMainPic(list, picval, evnt);
		updateTitle(list, titleval, evnt);
	});
};

var updateTitle = function(list, val, evnt){

	$('.main_title').empty();
	var title ='';
	title += '<p>';
	title += val;
	title += '</p>';
	$('.main_title').append(title);
};

