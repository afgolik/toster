function updateCountdown() {
    const timer = document.querySelector('.main__count');
    const currentTime = timer.textContent;
    const timeParts = currentTime.split(':');
    let hours = +timeParts[0];
    let minutes = +timeParts[1];
    let seconds = +timeParts[2];

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                clearInterval(countdownInterval);
                timer.textContent = '00:00:00';
                return;
            }
        }
    }
    timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

$('.cart__slider-item').click(function (){
    const slider = $('.cart__slider-main');
    const width = 358;
    const index = $(this).attr('data-slide');
    slider.css('left', `-${width * index}px`)

    const miniSlides = $('.mini-slide-active');
    miniSlides.removeClass('mini-slide-active');
    $(this).addClass('mini-slide-active');
});
