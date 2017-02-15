<?php

get_header(); ?>

<div class="nav hide" id="nav">
   
    <ul>
        <img class="opacity-out" src="<?php echo get_template_directory_uri();?>/img/logo.svg" alt="creative connell logo">
        <li class="opacity-out"> <a href="<?php echo get_home_url(); ?>"> Home </a></li>
        <li class="opacity-out"> <a href="<?php echo get_page_link(133); ?>"> My Hobby </a></li>
    </ul>
</div>



  
  
   
    <div class="work page-work">
       
       <div class="back-page">
           <a href="">Back</a>
       </div>
        
        <div class="work-item">
                    <?php

                if(have_posts()) {

                    while (have_posts()) : the_post(); ?>

                    <div class="work-item">
                        <img class="lazy" data-original="<?php the_post_thumbnail_url(); ?>"/>
                        <div class="work-heading"> <?php the_title(); ?> </div>
                        <div class="work-description"> <?php the_content(); ?>
                        
                       
                        </div>
                    </div>
                
                  <?php endwhile;

                } else {

                    echo "<p> You have no posts </p>";
                }

            ?>
        </div>
    </div>
   
    
   
<?php

get_footer(); ?>