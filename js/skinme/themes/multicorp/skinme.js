/*
 * Create HTML SkinMe
 */

var theme_ID = ishyoboy_globals.THEME_SLUG + '_';
var all_options_url = 'http://themes.ishyoboy.com/multicorp/';

var skinme = '' +
	'<div class="skinme">' +
        '<a href="#reset" class="skinme-reset ish-skinme-icon-arrows-cw-1" title="Reset to default"></a>' +
        '<a href="#close" class="skinme-close ish-skinme-icon-cancel" title="Close"></a>' +
        '<div class="skinme-content"></div>' +
		'<div class="skinme-btn ish-skinme-icon-cog-alt"></div>' +
	'</div>';

var skinme_content = '' +
    '<section>' +
    '<div class="headline first">Layout options</div>' +

    '<ul class="layout clearfix">' +
    '<li><a href="#" data-layout="ish-boxed"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/assets/images/3cm.png" alt="Boxed" title="Boxed" width="45" height="36" /></a></li>' +
    '<li><a href="#" data-layout="ish-unboxed"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/assets/images/1col.png" alt="Unboxed" title="Unboxed" width="45" height="36" /></a></li>' +
    '</ul>' +
    '</section>' +

    '<section>' +
    '<div class="headline">Pre-defined skins</div>' +

    '<ul class="predefined clearfix">' +
    '<li><a href="#reset" title="Default Skin"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/layouts/default.png" alt="Default" title="Default" /></a></a></li>' +
    '<li><a href="?skin=theme1" title=""><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/layouts/theme1.png" alt="" title="" /></a></a></li>' +
    '<li><a href="?skin=theme2" title=""><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/layouts/theme2.png" alt="" title="" /></a></a></li>' +
    '<li><a href="?skin=theme3" title=""><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/layouts/theme3.png" alt="" title="" /></a></a></li>' +
    '<li><a href="?skin=theme4" title=""><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/layouts/theme4.png" alt="" title="" /></a></a></li>' +
    '<li><a href="?skin=theme5" title=""><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/admin/layouts/theme5.png" alt="" title="" /></a></a></li>' +
    '</ul>' +
    '</section>' +

    '<section>' +
    '<div class="headline">Background images</div>' +

    '<ul class="bg-images clearfix">' +

    '<li><a href="#" class="pattern" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-patterns/ish-solid-wood-dark.jpg"></a></li>' +
    '<li><a href="#" class="pattern" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-patterns/ish-solid-wood-light.jpg"></a></li>' +
    '<li><a href="#" class="pattern" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-patterns/solid-dark-irongrip.png"></a></li>' +
    '<li><a href="#" class="pattern" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-patterns/solid-light-bg2.png"></a></li>' +
    '<li><a href="#" class="pattern" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-patterns/solid-light-bg4.png"></a></li>' +
    '<li><a href="#" class="pattern" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-patterns/solid-light-bg6.jpg"></a></li>' +

    '<li><a href="#" class="cover" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_01.jpg"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_01_thumb.jpg" alt="" title="" width="33" height="33" /></a></li>' +
    '<li><a href="#" class="cover" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_02.jpg"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_02_thumb.jpg" alt="" title="" width="33" height="33" /></a></li>' +
    '<li><a href="#" class="cover" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_03.jpg"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_03_thumb.jpg" alt="" title="" width="33" height="33" /></a></li>' +
    '<li><a href="#" class="cover" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_04.jpg"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_04_thumb.jpg" alt="" title="" width="33" height="33" /></a></li>' +
    '<li><a href="#" class="cover" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_05.jpg"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_05_thumb.jpg" alt="" title="" width="33" height="33" /></a></li>' +
    '<li><a href="#" class="cover" data-img="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_06.jpg"><img src="' + ishyoboy_globals.IYB_TEMPLATE_URI + '/assets/frontend/images/bg-images/bg_06_thumb.jpg" alt="" title="" width="33" height="33" /></a></li>' +




'</ul>' +

    //'<a href="' + all_options_url + '" style="text-align: right; margin-bottom: -30px;">View all styling options</a>' +

    '</section>';

/*
 * Append
 */
jQuery( skinme ).appendTo('body');

/*
 * Mai functionality
 */
var btn;
var btnClose;
var wrap;
var opened;
var reset;

jQuery(document).ready( function($){

    btn = jQuery('.skinme-btn');
    btnClose = jQuery('.skinme-close');
    wrap = jQuery('.skinme');
    opened = false;

	// If woocommerce demo store message
	jQuery(window).resize(function() {
		checkSkinmePosition()
	}).resize();
	jQuery(window).scroll(function() {
		checkSkinmePosition()
	}).scroll();

	function checkSkinmePosition() {
		var adminBar = jQuery('#wpadminbar');
		var wooBar = jQuery('.demo_store');
		var stickyBar = jQuery('.ish-sticky-nav');
		var offst = 50;

		if ( adminBar.length > 0 ) {
			offst += adminBar.height();
		}
		if ( wooBar.length > 0 ) {
			offst += wooBar.height();
			offst += 10;
		}
		/*if ( stickyBar.length > 0 ) {
			offst += stickyBar.height();
		}*/

		wrap.css('top', ( offst + 10 ) + 'px');
	}

    setTimeout(function() {
        btn.animate({ 'right': '-100px' }, 25);
    }, 500);

    /*
     * Open / close
     */
    btn.click(function() {
        var del = 250;

        var skm_content = wrap.find('.skinme-content');

        if ( '' == skm_content.html() ){
            skm_content.html( skinme_content );
            init_skinme();
        }

        if ( !opened ) {
            btn.animate({ 'right': '0' }, 25);

            setTimeout(function() {
                btn.hide();
                wrap.animate({ 'left': '-28px' });

                opened = true;
            }, del);

            eraseCookie( theme_ID + 'skinme_closed' );
        }

        return false;
    });

    btnClose.click(function() {
        var del = 400;

        if ( opened ) {
            wrap.animate({ 'left': '-335px' }, del, function() {
                btn.show();
                btn.animate({ 'right': '-100px' }, 25);

                opened = false;
            });

            createCookie( theme_ID + 'skinme_closed', true );
        }

        return false;
    });

    /*
     * Change predefined skin
     */
    var predef = jQuery('.predefined');

    predef.find('a').click(function() {
        predef.find('a').removeClass('selected');
        jQuery(this).addClass('selected');
    });

    // Automatically open skinme
    if ( null === readCookie(theme_ID + 'skinme_closed') ){
        btn.click();
    }

});



/* *********************************************************************************************************************
 * Functions
 */

function activate_reset_button(){
    /*
     * Reset to default
     */
    reset = jQuery('a[href="#reset"]');

    reset.click(function() {
        //eraseCookie(theme_ID + 'layout');
        //eraseCookie(theme_ID + 'bgimage');
        //eraseCookie(theme_ID + 'bgtype');
        //eraseCookie(theme_ID + 'skin');
        eraseCookie( theme_ID + 'skinme_closed' );

        window.location.href = window.location.href.split('?')[0];

        return false;
    });
}

/*
 * Cookies
 */
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

/*
 * Change layout option
 */
function init_skinme() {

    activate_reset_button();

    var body = jQuery('body');
    var ish_body = body.find('.ish-body');

    // SET UP LAYOUT SELECTOR
    var layout = jQuery('.layout');

    if ( body.hasClass('ish-boxed') ){
        layout.find('a[data-layout="ish-boxed"]').addClass('selected');
    }
    else{
        layout.find('a[data-layout="ish-unboxed"]').addClass('selected');
    }

    layout.find('a').click(function() {
        layout.find('a').removeClass('selected');
        jQuery(this).addClass('selected');

        var class_to_add = jQuery(this).attr('data-layout');
        var class_to_remove = ( 'ish-boxed' == class_to_add ) ? 'ish-unboxed' : 'ish-boxed';
        var header_rows = jQuery('.ish-part_header .ish-row_inner');

        // Add the new class
        if ( ! body.hasClass( class_to_add ) ){
            body.addClass( class_to_add );
        }

        // Remove the transitions to avoid header animation
        header_rows.addClass('ish-no-transition');

        // Remove the old one
        body.removeClass( class_to_remove );

        // Restore Transitions
        header_rows[0].offsetHeight; // Trigger a reflow, flushing the CSS changes
        header_rows.removeClass('ish-no-transition');

        // Resize packery elements
        jQuery('.ish-sc_portfolio .ish-p-items-container, .ish-blog-masonry .ish-packery').packery();

        // Resize Window
        jQuery(window).resize();

        // Resize OWL Carousel
        jQuery('.ish-slidable-container').each( function(){
            jQuery(this).data('owlCarousel').updateVars();
        });

        //createCookie(theme_ID + 'layout', jQuery(this).attr('data-layout'), 0);
        return false;
    });


    // SET UP BACKGROUND IMAGES SELECTOR
    var bgimages = jQuery('.bg-images');

    bgimages.find('a').each(function(){

        if ( jQuery(this).hasClass('cover') ){

        }
        else{
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-img') + ')' );
            jQuery(this).css('background-repeat', 'repeat').css('background-size', 'auto' ).css('background-attachment', 'scroll' );
        }

    });

    bgimages.find('a').click(function() {
        bgimages.find('a').removeClass('selected');
        jQuery(this).addClass('selected');

        if ( body.hasClass('ish-unboxed') ){
            body.removeClass('ish-boxed').removeClass('ish-unboxed').addClass('ish-boxed');
            layout.find('a').removeClass('selected');
            layout.find('a[data-layout="ish-boxed"]').addClass('selected');
            //createCookie(theme_ID + 'layout', 'boxed', 0);
        }

        body.css('background-image', 'url(' + jQuery(this).attr('data-img') + ')' );
        ish_body.css('background-image', 'url(' + jQuery(this).attr('data-img') + ')' );
        //createCookie(theme_ID + 'bgimage', jQuery(this).attr('data-img'), 0);

        if ( jQuery(this).hasClass('cover') ){
            //createCookie(theme_ID + 'bgtype', 'cover', 0);
            ish_body.css('background-size', 'cover' );
            ish_body.css('background-attachment', 'fixed' );

            body.css('background-size', 'cover' );
            body.css('background-attachment', 'fixed' );
        }
        else{
            //createCookie(theme_ID + 'bgtype', 'pattern', 0);
            ish_body.css('background-repeat', 'repeat' );
            ish_body.css('background-size', 'auto' );
            ish_body.css('background-attachment', 'scroll' );

            body.css('background-repeat', 'repeat' );
            body.css('background-size', 'auto' );
            body.css('background-attachment', 'scroll' );
        }

        // Resize Window
        jQuery(window).resize();

        // Resize OWL Carousel
        jQuery('.ish-slidable-container').each( function(){
            jQuery(this).data('owlCarousel').updateVars();
        });

        // Resize packery elements
        jQuery('.ish-sc_portfolio .ish-p-items-container, .ish-blog-masonry .ish-packery').packery();


        return false;
    });

}