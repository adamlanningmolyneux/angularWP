<?php

add_action( 'wp_enqueue_scripts', function(){
	
	wp_enqueue_script(
		'es6-shim',
		get_stylesheet_directory_uri() . '/node_modules/es6-shim/es6-shim.min.js'
	);
	
	wp_enqueue_script(
		'system-polyfills',
		get_stylesheet_directory_uri() . '/node_modules/systemjs/dist/system-polyfills.js'
	);
	
	wp_enqueue_script(
		'angular2-polyfills',
		get_stylesheet_directory_uri() . '/node_modules/angular2/bundles/angular2-polyfills.js'
	);
	
	wp_enqueue_script(
		'systemjs',
		get_stylesheet_directory_uri() . '/node_modules/systemjs/dist/system.src.js'
	);
	
	wp_enqueue_script(
		'rxjs',
		get_stylesheet_directory_uri() . '/node_modules/rxjs/bundles/Rx.js'
	);
	
	wp_enqueue_script(
		'angular2',
		get_stylesheet_directory_uri() . '/node_modules/angular2/bundles/angular2.dev.js'
	);
	
	wp_enqueue_script(
		'angular2-http',
		get_stylesheet_directory_uri() . '/node_modules/angular2/bundles/http.dev.js'
	);
	
	wp_enqueue_script(
		'angular2-router',
		get_stylesheet_directory_uri() . '/node_modules/angular2/bundles/router.dev.js'
	);

});

?>