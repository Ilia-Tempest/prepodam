function closePopup() {
		$.magnificPopup.close();
	};

$(function() {
	 $('.popup-img').magnificPopup({
      type: 'image'
    })
    $('.popup').magnificPopup({
      type: 'inline',
      midClick: true
    })
});