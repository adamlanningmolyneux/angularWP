<html>

  <head>
  	<base href="/">
    <title></title>

    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    <?php wp_head(); ?>
    
    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
				map: {
					app: 'wp-content/themes/angularwp/app'
				},
        packages: {   
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/main').then(null, console.error.bind(console));
    </script>

  </head>
  

  <!-- 3. Display the application -->
  <body <?php body_class(); ?>>
    <angularwp>Loading...</angularwp>
  </body>

</html>