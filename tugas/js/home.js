document.addEventListener("DOMContentLoaded", function() {
    var fadeElement = document.querySelector('.fade-element');
  
    document.addEventListener('scroll', function() {
      var scrollHeight = window.scrollY;
      var fadeInStart = 100; // Titik scroll untuk memulai fade in
      var fadeOutStart = 200; // Titik scroll untuk memulai fade out
  
      var opacity = 0;
        console.log(scrollHeight);
        console.log(fadeInStart)
      if (scrollHeight < fadeInStart) {
        opacity = 0;
      } else if (scrollHeight < fadeOutStart) {
        opacity = (scrollHeight - fadeInStart) / (fadeOutStart - fadeInStart);
      } else {
        opacity = 1;
      }
  
      fadeElement.style.opacity = opacity;
    });
  });



  let observer = new IntersectionObserver(enteries => {
    enteries.forEach(entery => {
        if(entery.isIntersecting) {
            entery.target.style.opacity = 1;
            entery.target.style.transform = "translateX(0)"
        }else {
            entery.target.style.opacity = 0;
            entery.target.style.transform = "translateX(10rem)"
        }
    })
  });

  let pichome1 = document.querySelector(".pichome1");
  let pichome2 = document.querySelector(".pichome2");
  let deskripsi = document.querySelector('.deskripsi')
  let pichome6 = document.querySelector('.pichome6');
  let locationss = document.querySelector('.location');
  let locationicon = document.querySelector('.locationicon');
  let isideskrip = document.querySelector('.isideskripsi');
  let pichome5 = document.querySelector('.pichome5');
  let divlokasi = document.querySelector('.divlokasi');
  let klilklokasi = document.querySelector('.klilklokasi');
  let dropdown_content = document.querySelector('.dropdown-content');
  let list = document.querySelector('.list');


  observer.observe(pichome1);
  observer.observe(pichome2);
  observer.observe(deskripsi);
  observer.observe(pichome6);
  observer.observe(locationicon);
  observer.observe(locationss);
  observer.observe(isideskrip);
  observer.observe(pichome5);
  observer.observe(divlokasi);
  



  function hoverloc() {
    klilklokasi.style.visibility = "visible";
    klilklokasi.style.opacity = 1;
    pichome5.style.opacity = 0.4;
  }

  function unhoverloc() {
    var klilklokasi = document.querySelector('.klilklokasi');
    klilklokasi.style.opacity = 0;
    pichome5.style.opacity = 1;
    setTimeout(function () {
      klilklokasi.style.visibility = "hidden";
    }, 1); // Menyesuaikan dengan waktu transisi
  }

  document.addEventListener("DOMContentLoaded", function() {
    var locationicon = document.querySelector(".locationicon");
  
    locationicon.addEventListener("click", function() {
      window.location.href = "https://www.google.co.id/maps/place/The+National+Museum+of+Emerging+Science+and+Innovation/@35.6193359,139.7738246,17z/data=!3m2!4b1!5s0x601889fe8b178f81:0xf235a0f8ea536912!4m6!3m5!1s0x601889fef478fdcf:0xf6b165739f8c89a0!8m2!3d35.6193359!4d139.7763995!16s%2Fm%2F02plzvg?entry=ttu";
    });
  });
  
list.addEventListener('click', function() {
  dropdown_content.classList.toggle('dropdown');
})

document.addEventListener('click', function(e) {
  var dropdownContent = document.querySelector('.dropdown_content');

  // Check if the clicked element is not part of the dropdown
  if (!e.target.classList.contains('dropdown_content')) {
    // Hide the dropdown
    dropdownContent.classList.remove('dropdown');
  }
});

