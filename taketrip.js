
    // Start of JavaScript code tour destination
    document.addEventListener('DOMContentLoaded', function() {
        var dropdowns = document.getElementsByClassName('dropdown');
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-content').style.display = 'block';
            });
            dropdowns[i].addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-content').style.display = 'none';
            });
        }
    });
    // End of JavaScript code tour destination

    // Start of  JavaScript code tour package
    document.addEventListener('DOMContentLoaded', function() {
        var dropdowns = document.getElementsByClassName('package');
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-package').style.display = 'block';
            });
            dropdowns[i].addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-package').style.display = 'none';
            });
        }
    });
    // End of  JavaScript code tour package

    // Start of JavaScript code my account
    document.addEventListener('DOMContentLoaded', function() {
        var dropdowns = document.getElementsByClassName('myaccount');
        for (var i = 0; i < dropdowns.length; i++) {
            dropdowns[i].addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-myaccount').style.display = 'block';
            });
            dropdowns[i].addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-myaccount').style.display = 'none';
            });
        }
    });
    // End of JavaScript code my account

    // Start of JavaScript code Banner
      var bannerImages = document.getElementsByClassName('banner-image');
  var bannerDots = document.getElementsByClassName('banner-dot');
  var currentIndex = 0;
  var intervalId;
//   testing
  
    function showNextImage() {
      bannerImages[currentIndex].classList.remove('active'); // Hide current image
      bannerDots[currentIndex].classList.remove('active'); // Remove active class from current dot
      currentIndex = (currentIndex + 1) % bannerImages.length; // Update index
      bannerImages[currentIndex].classList.add('active'); // Show next image
      bannerDots[currentIndex].classList.add('active'); // Add active class to next dot
    }
  
    function showPreviousImage() {
      bannerImages[currentIndex].classList.remove('active'); // Hide current image
      bannerDots[currentIndex].classList.remove('active'); // Remove active class from current dot
      currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length; // Update index
      bannerImages[currentIndex].classList.add('active'); // Show previous image
      bannerDots[currentIndex].classList.add('active'); // Add active class to previous dot
    }
  
    function goToImage(index) {
      bannerImages[currentIndex].classList.remove('active'); // Hide current image
      bannerDots[currentIndex].classList.remove('active'); // Remove active class from current dot
      currentIndex = index; // Update index
      bannerImages[currentIndex].classList.add('active'); // Show selected image
      bannerDots[currentIndex].classList.add('active'); // Add active class to selected dot
    }
  
    function startSlideShow() {
      intervalId = setInterval(showNextImage, 2000); // Slide every 2 seconds
    }
  
    function stopSlideShow() {
      clearInterval(intervalId);
    }
  
    startSlideShow();
    // End of JavaScript code Banner