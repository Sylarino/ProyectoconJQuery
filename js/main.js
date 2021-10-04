$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.slider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 880,
            responsive: true,
            speed: 800
        });
    }

    //Post generados con json
    if(window.location.href.indexOf('index') > -1){
        posts = [
            {
                title: 'Publicación N°1',
                date: 'Se publico el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                title: 'Publicación N°2',
                date: 'Se publico el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                title: 'Publicación N°3',
                date: 'Se publico el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            },
            {
                title: 'Publicación N°4',
                date: 'Se publico el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del año ' + moment().format("YYYY"),
                content:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting'
            }
        ]

        posts.forEach((value, index)  => {

            var item = `
            <article class="section-main-post">
            <h2>${value.title}</h2>
            <span>${value.date}</span>
            <p>${value.content}</p>
            <a class="button-more" href="#">Leer más</a>
            </article>
            `;

            $('#posts').append(item);
        });
    }
    //Cambiador de temas
    var theme = $("#theme");
    $('div[name="theme"]').click(function(){

        theme_name = $(this).attr('class').replace('-theme', '');

        $("body").animate(5000, "linear", function(){
            theme.attr("href", "css/themes/"+theme_name+".css");
        });
    });

    //Scroll suavizado de la web
    $(".up-page").click(function(e){
        
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login-form").submit(function(){
        var name = $("#form-name").val();
         
        localStorage.setItem("form-name", name);
    });

    var name = localStorage.getItem("form-name");

    if(name!= null && name != "undefined") {

        var about = $(".sidebar-item p");
        about.html("<br><strong>Bienvenide "+name+"</strong>");
        about.append("<a href='#' id='logout'> Cerrar Sesión </a>");
    
        $("#login-form").hide();
    
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });    
    }

    if(window.location.href.indexOf('about-me') > -1){
        $("#accordion").accordion();
    }

    if(window.location.href.indexOf('clock') > -1){

        setInterval(function(){
            var clock = moment().format("hh:mm:ss");
            $(".clock-content").html(clock);
        }, 1000);

    }

    //Validación
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
  });