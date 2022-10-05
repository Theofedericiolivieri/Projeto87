const { fabric } = require("./fabric");

// Create canvas variable
var canvas= new fabric.Canvas("myCanvas")
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(img){
		blockImageObject.scaletoWidth(blockImageWidth);
		blockImageObject.scaletoHeight(blockImageHeight);
		blockImageObject.set({
			top:blockY,
			left:blockX
		});
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		new_image(rr1.png);
		console.log("e");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		// enviar ranger verde
		new_image(gr.png);
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
		new_image(yr.png);
		console.log("a");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		new_image(pr.png);
		console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	// enviar ranger índigo
	new_image(br.png);
		console.log("b");
	}
	
}

