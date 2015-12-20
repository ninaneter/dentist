var $heb = $('.heb');
var $rus = $('.rus');

var $menuItem = $('.menuItem');
var $contentItem = $('.contentItem');
var $menuHome = $('.menuHome');
var $homeDiv = $('.home');

var showHome = function (){
	$menuItem.removeClass('active');
	$menuHome.addClass('active');
	$contentItem.addClass('hidden');
	$homeDiv.removeClass('hidden');
};

$heb.on('click', function(event) {
	$('.rusContainer').addClass('hidden');
	$('.hebContainer').removeClass('hidden');
	showHome();
});

$rus.on('click', function(event) {
	$('.rusContainer').removeClass('hidden');
	$('.hebContainer').addClass('hidden');
	showHome();
});

$menuItem.on('click', function(event){
	var $target = $(event.currentTarget);
	var targetClass = $target.context.className;
	targetClass = '.' + targetClass.replace('menuItem', '').replace('active', '').replace('menu', '').replace(' ', '').toLowerCase();

	$menuItem.removeClass('active');
	$target.addClass('active');
	$contentItem.addClass('hidden');
	$(targetClass).removeClass('hidden');
});

