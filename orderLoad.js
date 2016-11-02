(function($){

	$.fn.orderLoad = function () {

		var _this = $(this);

		var index = 0;

		function loadImg (){

			var url = _this.eq(index).attr('data-original');

			_this.eq(index).attr('src', url);

			_this.eq(index).load(function() {
				console.log(index);
				index++;
				loadImg();
			});
		}

		loadImg();

		_this.each(function(index, el) {

			var src = $(this).attr('src');

			var url = $(this).attr('data-original');

			if(src.length == 0){
				$(this).attr('src', url);
			}
		});

	}

})(jQuery)