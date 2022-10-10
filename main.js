

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
	fabric.Image.fromURL(getImage, function(img){
		blockImageObject=img
		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top:blockY,
			left:blockX
		});
		canvas.add(blockImageObject);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		newImage("rr1.png");
		console.log("e");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		// enviar ranger verde
		newImage("gr.png");
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
		newImage("yr.png");
		console.log("a");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		newImage("pr.png");
		console.log("r");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	// enviar ranger índigo
	newImage("br.png");
		console.log("b");
	}
	
}

