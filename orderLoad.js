(function($){

	$.fn.orderLoad = function () {

		var _this = $(this);

		var length = _this.length;

		var index = 0;

		var loadDone = false;

		function loadImg (){

			var url = _this.eq(index).attr('data-original');

			_this.eq(index).attr('src', url);

			_this.eq(index).load(function() {
				
				index++;	

				console.log(index);
									
				loadImg();
				if(index == length){
					checkLoad();
				}
				
			});
		}

		loadImg();

		function checkLoad () {
			_this.each(function(index, el) {

				var src = $(this).attr('src');						

				var url = $(this).attr('data-original');

				if(src.length == 0){

					$(this).attr('src', url);
					
				}

			});
		}

		

	}

})(jQuery)