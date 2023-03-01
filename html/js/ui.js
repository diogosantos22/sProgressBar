var ROOT = "";
var isProgressShowing = false
var intervalID = undefined;

function show() {
    $('.progressDiv').css('display', 'block');
}

function hide() {
    $('.progressDiv').css('display', 'none');
}

function start(timer){
    show();
    
    var bar = document.getElementById('progressB').ldBar;
    const start = Date.now();
    const anim = () => {
        if (bar.value >= 100) {
            $.post(`http://${ROOT}/stop`, JSON.stringify());
            
            const end = Date.now();

            hide();
            bar.set(0)
            

            if (intervalID) { clearInterval(intervalID) };
        } else {
            bar.set(bar.value+1)
        }
    };
  
    intervalID = setInterval(anim, timer/100);
}

$(function () {
    window.addEventListener('message', function (event) {
        if (event.data.action == "update") {
            ROOT = event.data.data;
        } else if (event.data.action == "start") {
            start(event.data.data)
        }
    });
});

