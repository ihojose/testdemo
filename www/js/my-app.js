// Initialize app
var myApp = new Framework7();

var $$ = Dom7;

// Add view
var mainView = myApp.addView( '.view-main', {
	dynamicNavbar: true
} );

// noinspection JSUnresolvedFunction
myApp.onPageInit( 'about', function ( page ) {

} );

$$( document ).on( 'pageInit', function ( e ) {
	var page = e.detail.page;

	if ( page.name === 'video' ) {

	}
} );