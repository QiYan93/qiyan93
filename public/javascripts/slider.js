var list = [
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/2.jpg' /></a>"},
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/1.jpg' /></a>"},
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/3.jpg' /></a>"},
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/4.jpg' /></a>"},
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/5.jpg' /></a>"},
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/6.jpg' /></a>"},
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/7.jpg' /></a>"},
    {content: "<a href='#'><img src='//be-fe.github.io/static/images/iSlider-card/8.jpg' /></a>"}
];

var S = new iSlider(document.getElementById('slider'), list, {
    isLooping: 1,
    isOverspread: 1,
    isAutoplay: 1,
    animateTime: 800,
    animateType: 'flow'
});