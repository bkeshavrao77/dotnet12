<<<<<<< HEAD
jQuery(document).ready(function($) {
  //MEGA MENU SCRIPT
  $('.mega-menu-content ul.sb-nav-item.main-tbcat li > a').hover(function(){
    let currentItem = $(this).attr('data-main-ct');
    $('.sb-nav-item.main-tbcat > li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-cat1 ul.sb-nav-item').removeClass('active');
      $('.sub-cat1 ul.sb-nav-item').addClass('hidden');
      $("ul[data-subcat='" + currentItem + "']").removeClass('hidden');
      $("ul[data-subcat='" + currentItem + "']").addClass('active');

      $('.sub-cat2 ul.sb-nav-item').removeClass('active');
      $('.sub-cat2 ul.sb-nav-item').addClass('hidden');

      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
    }
  });

  $('.mega-menu-content .sub-cat1 ul li > a').hover(function(){
    let currentItem = $(this).attr('data-subcat-ct');
    $('.sub-cat1 ul li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-cat2 ul.sb-nav-item').removeClass('active');
      $('.sub-cat2 ul.sb-nav-item').addClass('hidden');
      $("ul[data-sscat='" + currentItem + "']").removeClass('hidden');
      $("ul[data-sscat='" + currentItem + "']").addClass('active');

      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
    }
  });

  $('.mega-menu-content .sub-cat2 ul li > a').hover(function(){
    let currentItem = $(this).attr('data-sfproduct');
    $('.sub-cat2 ul li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
      $("ul[data-fproduct='" + currentItem + "']").removeClass('hidden');
      $("ul[data-fproduct='" + currentItem + "']").addClass('active');
    }
  });


=======
jQuery(document).ready(function($) {
  //MEGA MENU SCRIPT
  $('.mega-menu-content ul.sb-nav-item.main-tbcat li > a').hover(function(){
    let currentItem = $(this).attr('data-main-ct');
    $('.sb-nav-item.main-tbcat > li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-cat1 ul.sb-nav-item').removeClass('active');
      $('.sub-cat1 ul.sb-nav-item').addClass('hidden');
      $("ul[data-subcat='" + currentItem + "']").removeClass('hidden');
      $("ul[data-subcat='" + currentItem + "']").addClass('active');

      $('.sub-cat2 ul.sb-nav-item').removeClass('active');
      $('.sub-cat2 ul.sb-nav-item').addClass('hidden');

      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
    }
  });

  $('.mega-menu-content .sub-cat1 ul li > a').hover(function(){
    let currentItem = $(this).attr('data-subcat-ct');
    $('.sub-cat1 ul li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-cat2 ul.sb-nav-item').removeClass('active');
      $('.sub-cat2 ul.sb-nav-item').addClass('hidden');
      $("ul[data-sscat='" + currentItem + "']").removeClass('hidden');
      $("ul[data-sscat='" + currentItem + "']").addClass('active');

      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
    }
  });

  $('.mega-menu-content .sub-cat2 ul li > a').hover(function(){
    let currentItem = $(this).attr('data-sfproduct');
    $('.sub-cat2 ul li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
      $("ul[data-fproduct='" + currentItem + "']").removeClass('hidden');
      $("ul[data-fproduct='" + currentItem + "']").addClass('active');
    }
  });


  // Event listener for input field
  $('#cat-search').on('input', function () {
      // Get user input
      var userInput = $(this).val();

      // Make AJAX request to server-side script
      $.ajax({
          url: 'autocomplete.aspx',
          method: 'POST',
          dataType: 'json',
          data: {query: userInput},
          success: function (data) {
              // Handle the response data
              displayResults(data);
          },
          error: function (error) {
              console.error('Error fetching autocomplete suggestions:', error);
          }
      });
  });

  // Function to display autocomplete results
  function displayResults(results) {
      var resultsContainer = $('#autocomplete-results');
      resultsContainer.empty();

      // Display each result as a list item
      $.each(results, function (index, result) {
          resultsContainer.append('<li>' + result + '</li>');
      });
  }

  // Event listener for clicking on autocomplete result
  $(document).on('click', '#autocomplete-results li', function () {
      // Set the clicked result as the input value
      $('#cat-search').val($(this).text());

      // Clear the autocomplete results
      $('#autocomplete-results').empty();
  });


  $(".browser-cats li.cat-list").on("click", function() {
      $(this).toggleClass("active");
  });

  // Function to load more content via AJAX
  function loadMoreContent() {
      $.ajax({
        url: 'your_backend_endpoint.aspx', // Replace with your backend endpoint
        method: 'GET',
        data: { page: currentPage },
        success: function(response) {
          // Append the new content to the container
          $('.plist-loadmore').append(response);

          // Increment the page counter
          currentPage++;

          // If there is no more content, hide the "Load More" button
          if (response.trim() === '') {
            $('#load-more-btn').addClass('hidden');
          }
        },
        error: function(error) {
          console.error('Error loading more content:', error);
        }
      });
  }

  // Load more content when the button is clicked
  $('#load-more-product').on('click', function() {
      loadMoreContent();
  });

>>>>>>> 2c8e14b (Updated code Jan 11 2024)
});