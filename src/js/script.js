$(document).ready(pages);
function pages() {

    $('.project-thumbnail').hover(sliding);
    function sliding() {
        $(this).find('.project-thumbnail-overlay').slideToggle();
        $(this).find('.project-catogory').slideToggle();
    }

}

/*
┌──────────────────────────────────────────┐
│         Coding by M. Shikh Taleb         │
│            www.shikhtaleb.net            │
└──────────────────────────────────────────┘
*/