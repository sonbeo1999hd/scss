// paralax navbar

var trangthai = false;
var small_navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 120) {
        if (trangthai == true) {
            small_navbar.classList.add('smaller');
            trangthai = false;
        }

    } else {
        if (trangthai == false) {
            small_navbar.classList.remove('smaller');
            trangthai = true;
        }
    }
});

// parallax image 

// scroll smooth when click on navbar 


var menu_link = document.getElementById('menu_link');
menu_link.addEventListener('click', function (e) {
    
    let temp = menu_link.getAttribute('href');
    let target = document.querySelector(temp);
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    history.pushState(null, null, temp);
    e.preventDefault();
    
})
var list = document.querySelectorAll('.js-scroll-trigger');
for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        let collapse = document.getElementsByClassName('navbar-collapse')[0];
        collapse.classList.remove('show');
    })
}

window.addEventListener('scroll', function () {
    var x = this.pageYOffset;
    if (x >= 3509 && x <= 4362) {
        this.document.getElementById('menu_link').classList.add('red');
    }
    else {
        this.document.getElementById('menu_link').classList.remove('red');
    }
})
// close responsive menu when scroll trigger link is clicked




// slide_show when click icon in group5
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    // var x = document.getElementById('group5').scrollHeight; // 375
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" animated bounceInLeft", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " animated bounceInLeft "
    dots[slideIndex - 1].className += " active";
}

// validation name, phone, email
var inputs = document.querySelectorAll('.right-col input');

function validation() {
    var name = document.querySelector("input[name='name']");
    var email = document.querySelector("input[name='email']");
    var phone = document.querySelector("input[name='phone']");
    var name_value = name.value;
    var email_value = email.value;
    var phone_value = phone.value;

    name.style.borderColor = "#fff";
    email.style.borderColor = "#fff";
    phone.style.borderColor = "#fff";
    
    if (name_value == "") {
        document.querySelector('.error_name').style.display="block";
        name.style.borderColor = "red";
    }
    else {
        document.querySelector('.error_name').style.display="none";
        if (email_value == "") {
            document.querySelector('.error_email1').style.display="block";
            email.style.borderColor = "red";
        } else if ((/\S+@\S+\.\S+/).test(email_value) == false) {
            document.querySelector('.error_email1').style.display="none";
            document.querySelector('.error_email2').style.display="block";
            email.style.borderColor = "red";
        }
        else {
            document.querySelector('.error_email1').style.display="none";
            document.querySelector('.error_email2').style.display="none";
            if (phone_value == "") {
                document.querySelector('.error_phone1').style.display="block";
                phone.style.borderColor = "red";
            }
            else if ((/((09|03|07|08|05)+([0-9]{8})\b)/g).test(phone_value) == false) {
                document.querySelector('.error_phone1').style.display="none";
                document.querySelector('.error_phone2').style.display="block";
                phone.style.borderColor = "red";
            }
            else{
                document.querySelector('.error_phone1').style.display="none";
                document.querySelector('.error_phone2').style.display="none"; 
                alert("Done!!!");
                
            }
        }
    }

}
