//Modal
var modalCallBack = new tingle.modal();
modalCallBack.setContent(document.querySelector('.call--back--modal').innerHTML);

//Отзывы
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  effect: 'fade',
  spaceBetween: 30
});

//Map
function initMap() {
  var myLatLng = {lat: 59.4243996, lng: 24.7263591}
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 16
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

//Ajax отправка формы
document.querySelectorAll('form').forEach(function(item) {
item.addEventListener('submit', function(event) {
  sendAjaxForm(this, event);
})});
function sendAjaxForm(form, event) {
  var fields = form.querySelectorAll('input, textarea')

  var formHasError =  Array.prototype.reduce.call(fields, function(invalidCount, currentItem) {
    if (currentItem.matches(':invalid')) invalidCount++;
  }, 0);

  if (formHasError) {
    return true;
  } else {
    event.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'send.php');
    xhr.onreadystatechange = function() {
      if ((xhr.readyState == 4) && (xhr.status == 200)) {
        data = xhr.responseText;
        form.outerHTML = '<h3 style="color: #000; text-align: center;">Спасибо, ваша заявка отправлена</h3><p style="color: #000; text-align: center">Наши менеджеры свяжутся с вами в течение дня</p>';
      }
    }
    xhr.send(formData);

    return false;
  }
}
  
// Click 1
var button = document.getElementById('read-more-button1'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('read-more1');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
        button.style.marginBottom = '20px';
    }
    else {
        div.style.display = 'block';
    }
};

// Click 2
var button = document.getElementById('read-more-button2'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('read-more2');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
        button.style.marginBottom = '20px';
    }
    else {
        div.style.display = 'block';
    }
};

// Click 3
var button = document.getElementById('read-more-button3'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('read-more3');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
        button.style.marginBottom = '20px';
    }
    else {
        div.style.display = 'block';
    }
};
