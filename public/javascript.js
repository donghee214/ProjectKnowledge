var ranOnce = false;
var ranOnce1 = false;
var ranOnce2 = false;

function testScroll(ev) {
    if ((window.pageYOffset > 1600) && ranOnce == false) {
        var event1Left = document.getElementById("uno");
        event1Left.className += " showDisplay";
        var event1Right = document.getElementById("dos");
        event1Right.className += " showDisplay";
        ranOnce = true;
    };
    if ((window.pageYOffset > 1800) && ranOnce1 == false) {
        var event2Left = document.getElementById("trois");
        event2Left.className += " showDisplay";
        var event2Right = document.getElementById("quatro");
        event2Right.className += " showDisplay";
        ranOnce1 = true;
    };
    if ((window.pageYOffset > 2000) && ranOnce2 == false) {
        var event3Left = document.getElementById("cinco");
        event3Left.className += " showDisplay";
        var event3Right = document.getElementById("six");
        event3Right.className += " showDisplay";
        ranOnce2 = true;
    };
}
window.onscroll = testScroll;


function scroll1() {
    var counter = 0;
    var x = 0;
    var y = 1;
    var looper = setInterval(function() {
        counter++;
        window.scroll(0, x);
        x = x + 7;
        if (counter >= 107) {
            clearInterval(looper);
        }
    }, y);
};

function scroll2() {
    var counter = 0;
    var x = 757;
    var y = 1;
    var looper = setInterval(function() {
        counter++;
        window.scroll(0, x);
        x = x + 7;
        if (counter >= 107) {
            clearInterval(looper);
        }
    }, y);
};

function scroll3() {
    var counter = 0;
    var x = 1514;
    var y = 1;
    var looper = setInterval(function() {
        counter++;
        window.scroll(0, x);
        x = x + 7;
        if (counter >= 107) {
            clearInterval(looper);
        }
    }, y);
};