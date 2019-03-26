var fantasma = document.querySelector('#ghost');
var tiempo;
var key = event.key | event.keyCode;


document.addEventListener('keydown', function (event) {
    if (key === 32) {
    	saltoManual();
    	clearTimeout(tiempo);
    }else{
    	tiempo = setTimeout(saltoAutomatico(), 6000);
    }
});

function saltoManual () {
	fantasma.style.transform = "translateY(-100px)";
	setTimeout(function () {
	fantasma.style.transform = "translateY(0px)";
	}, 1000);
}

function saltoAutomatico () {
	fantasma.style.transform = "translate(150px, -100px)";
	setTimeout(function () {
		fantasma.style.transform = "translate(300px, 0px)";
		setTimeout(function () {
			fantasma.style.transform = "translate(0px, 0px)";
		}, 5000);
	}, 1000);
};
