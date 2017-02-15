<?php get_header(); ?>
   

<div class="panel">
  
  <div class="error-content">
    <img class="error-img" src="<?php echo get_template_directory_uri();?>/img/logo.svg" alt="Seán Connell logo">

    <p class="error">This is not the page your looking for</p>

    <p class="return"><a href="<?php echo get_home_url(); ?>">Go Back</a></p>
  </div>
    
    <div class="bg-error-img" style="background: url(<?php echo get_template_directory_uri();?>/img/starwars.png) no-repeat center; background-size: cover;"></div>
    
</div>
    

    

   
<?php get_footer(); ?>
   
</body>
</html>