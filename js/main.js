var SCROLLING_SPEED = 700;
var fromIndex = 1;
// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: [],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
  	responsiveWidth: 992,
    slidesNavigation: true,
    controlArrows: false,
    slidesNavPosition: 'bottom',

    anchors: ['introduction','our_belief',
    'creating_integrated_experiences','who_we_are','technology_design_and_approach','we_can_help_for','our_winning_methodology','ux_process','our_services','achievements','clientele',
    'industries_served','where_passion_meets_purpose','immunity','plexigo','axis_bank','ey','thank_you']
    , //add section id's

navigationTooltips: ['Introduction','Our Belief',
'Creating Integrated Experiences','Who We Are','Technology, Design & Approach','We Can Help For','Our Winning Methodology','UX Process','Our Services','Achievements','Clientele',
'Industries Served','Where Passion Meets Purpose','Immunity','Plexigo','Axis Bank','EY','Thank You'],
    
    menu: '#menu',
    scrollingSpeed: SCROLLING_SPEED,
    fitToSection: true,
    verticalCentered: false,
    lazyLoading: true,
  
    afterLoad: function(anchorLink, index) {},
  
    onLeave: function(index, nextIndex, direction) {},

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(!fromIndex){
        $('.fp-section').find('.fp-slidesContainer').fadeIn(0);
        $.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
      }
    },
  
    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      fromIndex = slideIndex;
      if(!slideIndex){
          $.fn.fullpage.setScrollingSpeed(0);
          $('.fp-section').find('.fp-slidesContainer').hide();
        }
    },

  }); 

