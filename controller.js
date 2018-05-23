
function updateSlider(slideAmount , sliderAmountVar) {
	var sliderDiv = document.getElementById(sliderAmountVar);
	sliderDiv.innerHTML = slideAmount;

}


function onclickDistanceMatrix()
{
window.open('http://girihlet.com/ravi/web/barcode_diversity/tmp/mat89380.html');

}

function updateImage()
{
	var randomNumber = Math.random();
	var ran = 0;
	if(randomNumber>0.5)
	{
		ran=1;
	}
	else
	{
		ran=0;
	}

		$("#img_graph").attr("src","second"+ran+".gif");
}