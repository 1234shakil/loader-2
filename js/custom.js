$(window).on('load', ()=>{
    $('#loder').fadeOut();
});



$(document).ready(()=>{
    $('.item').on('mouseover', ()=>{
        $('.item').animate({
            width: '250px',
            height:'500px',
            transform: 'skew(300deg)',
            
        }, 5000);
    });
});







