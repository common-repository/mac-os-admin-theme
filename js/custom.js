jQuery(function(){
	jQuery('#adminmenu li.wp-has-submenu a:not(#adminmenu li li a)').click(function(){
		//console.log(jQuery(this).find('.wp-submenu'));
		// if(jQuery(this).parent('li').hasClass('wp-menu-open')){
		// 		jQuery(this).next('.wp-submenu').slideUp(100);
		// 		}else{
		// 		jQuery(this).next('.wp-submenu').slideDown(100);	
		// 		}
		// 		jQuery(this).parent('li').toggleClass('wp-menu-open');
		jQuery(this).prev('.wp-menu-toggle').click();
		return false;
	})
	jQuery(window).resize(function(){
			jQuery('#adminmenu, #wpbody-content').height(jQuery(window).height() - 72);			
			jQuery('#wpbody-content').width(jQuery(window).width()-jQuery('#adminmenu').width());
			jQuery('#screen-options-wrap, #contextual-help-wrap').width(jQuery('#wpbody-content').width()-70);
	}).scroll(function(){
			//if(jQuery(window).scrollTop() <= jQuery('#wphead').height()){
				jQuery('#adminmenu, #wpbody-content').css('top', jQuery('#wphead').height()-jQuery(window).scrollTop());
			//}else{
			//	jQuery('#adminmenu').css('top', 0);
			//}
	})
	jQuery('#adminmenu, #wpbody-content').height(jQuery(window).height() - 72);
	jQuery('#adminmenu a:contains(Add New)').addClass('add-new');
	jQuery('#adminmenu a:contains(Post Tags)').addClass('tags');
	jQuery('#adminmenu a:contains(Categories)').addClass('categories');
	jQuery('#adminmenu a:contains(Media Tools)').addClass('media-tools');
	jQuery('#wpbody-content').width(jQuery(window).width()-jQuery('#adminmenu').width());
	jQuery('#screen-options-wrap, #contextual-help-wrap').width(jQuery('#wpbody-content').width()-70);
});
jQuery(window).load(function(){
		swfu.setButtonImageURL('/wp-content/plugins/mac-os-admin-theme/images/upload.png');
})