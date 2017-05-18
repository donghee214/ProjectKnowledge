var ranOnce = false;
var ranOnce1 = false;
var ranOnce2 = false;
var ranOnce3 = false;
var ranOnce4 = false;
var event1Left;

function testScroll(ev) {
    if ((window.pageYOffset > 740) && ranOnce3 == false) {
        var event1Center = document.getElementById("bio");
        event1Center.className += " nowVisible";
        ranOnce3 = true;
    };
    if ((window.pageYOffset > 1450) && ranOnce4 == false) {
        var event2Center = document.getElementById("bio1");
        var event2Center1 = document.getElementById("bio2");
        var event2Center2 = document.getElementById("bio3");
        event2Center.className += " nowVisible";
        event2Center1.className += " nowVisible";
        event2Center2.className += " nowVisible";
        ranOnce4 = true;
    };
    if ((window.pageYOffset > 1600) && ranOnce == false) {
        event1Left = document.getElementById("uno");
        event1Left.className += " showDisplay";
        var event1Right = document.getElementById("dos");
        event1Right.className += " showDisplay";
        ranOnce = true;
        var event1Center = document.getElementById("bio");
        event1Center.className += " nowVisible";
    };
    if ((window.pageYOffset > 2000) && ranOnce1 == false) {
        var event2Left = document.getElementById("trois");
        event2Left.className += " showDisplay";
        var event2Right = document.getElementById("quatro");
        event2Right.className += " showDisplay";
        ranOnce1 = true;
    };
    if ((window.pageYOffset > 2400) && ranOnce2 == false) {
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


function clickMe() {
var shit = document.getElementById("shit")
   shit.className += " bringModal";
}