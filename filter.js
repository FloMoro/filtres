(function() {
	var invertbutton = null;
	var BWbutton = null;
	var Greybutton = null;
	var redbutton = null;
	var greenbutton = null;
	var bluebutton = null;
	var vinvertbutton = null;



	function myInvert(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			pix[i  ] = 255 - pix[i  ]; // red
			pix[i+1] = 255 - pix[i+1]; // green
			pix[i+2] = 255 - pix[i+2]; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}
	
	function myBW(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			if ((pix[i  ] + pix[i+1] + pix[i+2])/3 <= 128){
				pix[i  ] = 0; // red
				pix[i+1] = 0; // green
				pix[i+2] = 0; // blue
			} else {
				pix[i  ] = 255; // red
				pix[i+1] = 255; // green
				pix[i+2] = 255; // blue
				// i+3 is alpha (the fourth element)
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myGrey(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {

				var color =  (pix[i  ] + pix[i+1] + pix[i+2])/3;

				pix[i  ] = color; // red
				pix[i+1] = color; // green
				pix[i+2] = color; // blue
				
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

///////////////////////////////////////////////////////////////////////////////////////

	function mygreen(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // green
				pix[i+2] = pix[i+2]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myblue(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myred(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = pix[i+2]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function mycyan(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // green
				pix[i+2] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function mymagenta(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myyellow(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // red
				pix[i+1] = (pix[i  ] + pix[i+1] + pix[i+2] + pix[i+3])/4; // green
				pix[i+2] = pix[i+2]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

//////////////////////////////////////////////////////////////////////////////////////

	function myhalfW(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length/2; i < n; i += 4) {
			pix[i  ] = 255; // red
			pix[i+1] = 255; // green
			pix[i+2] = 255 ; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}
/*
	function myhalfW2(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			
			pix[i  ] = 255; // red
			pix[i+1] = 255; // green
			pix[i+2] = 255 ; // blue
			// i+3 is alpha (the fourth element)
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

//////////////////////////////////////////////////////////////////////////////////////////////

	function myfiltergreen(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = pix[i+3]; // green
				pix[i+2] = pix[i+2]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myfilterblue(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = pix[i+3]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myfilterred(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i+3]; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = pix[i+2]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myfilteryellow(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i+3]; // red
				pix[i+1] = pix[i+3]; // green
				pix[i+2] = pix[i+2]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myfiltercyan(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = pix[i+3]; // green
				pix[i+2] = pix[i+3]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myfiltermagenta(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i+3]; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = pix[i+3]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}
*/
///////////////////////////////////////////////////////////////////////////////////////////

	function mymag(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = 255; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = 255; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myyel(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = 255; // red
				pix[i+1] = 255; // green
				pix[i+2] = pix[i+2]; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function mycy(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = 255; // green
				pix[i+2] = 255; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function mygre(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = (pix[i  ] + pix[i+2])/2; // red
				pix[i+1] = 255; // green
				pix[i+2] = (pix[i  ] + pix[i+2])/2; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myre(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = 255; // red
				pix[i+1] = (pix[i+1] + pix[i+2])/2; // green
				pix[i+2] = (pix[i+1] + pix[i+2])/2; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function mybl(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = (pix[i  ] + pix[i+1])/2; // red
				pix[i+1] = (pix[i  ] + pix[i+1])/2; // green
				pix[i+2] = 255; // blue
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

////////////////////////////////////////////////////////////////////////////////////////////

	function myren(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
    
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = pix[i  ]; // red
				pix[i+1] = 0; // green
				pix[i+2] = 0; // blue
			}

			// Draw the ImageData at the given (x,y) coordinates.
			context.putImageData(imgd, x, y);
			
			var data = canvas.toDataURL('image/png');
			photo.setAttribute('src', data);	
		}

	function mygren(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
	
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = 0; // red
				pix[i+1] = pix[i+1]; // green
				pix[i+2] = 0; // blue
			}

			// Draw the ImageData at the given (x,y) coordinates.
			context.putImageData(imgd, x, y);
			
			var data = canvas.toDataURL('image/png');
			photo.setAttribute('src', data);
		}

	function mybln(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
	
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = 0; // red
				pix[i+1] = 0; // green
				pix[i+2] = pix[i+2]; // blue
			}

			// Draw the ImageData at the given (x,y) coordinates.
			context.putImageData(imgd, x, y);
			
			var data = canvas.toDataURL('image/png');
			photo.setAttribute('src', data);
		}

	function mymagn(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
	
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = (pix[i] + pix[i+2])/2; // red
				pix[i+1] = 0; // green
				pix[i+2] = (pix[i] + pix[i+2])/2; // blue
			}

			// Draw the ImageData at the given (x,y) coordinates.
			context.putImageData(imgd, x, y);
			
			var data = canvas.toDataURL('image/png');
			photo.setAttribute('src', data);
		}

	function myyeln(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
	
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = (pix[i+1] + pix[i])/2; // red
				pix[i+1] = (pix[i+1] + pix[i])/2; // green
				pix[i+2] = 0; // blue	
			}

			// Draw the ImageData at the given (x,y) coordinates.
			context.putImageData(imgd, x, y);
			
			var data = canvas.toDataURL('image/png');
			photo.setAttribute('src', data);
		}

	function mycyn(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
	
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
				pix[i  ] = 0; // red
				pix[i+1] = (pix[i+1] + pix[i+2])/2; // green
				pix[i+2] = (pix[i+1] + pix[i+2])/2; // blue
			}

			// Draw the ImageData at the given (x,y) coordinates.
			context.putImageData(imgd, x, y);
			
			var data = canvas.toDataURL('image/png');
			photo.setAttribute('src', data);
		}
	
/////////////////////////////////////////////////////////////////////////////////

	function mynoise(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
				

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;

		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
		let m = 0;
		

		// Loop over each pixel and invert the color.
		while (m < 1000) {

			
			var randomcolor = Math.floor(Math.random() * 255);
			var randompix = 4 * Math.floor(Math.random() * (width * height));

			
			pix[randompix] = randomcolor;
			pix[randompix+1] = randomcolor;
			pix[randompix+2] = randomcolor;
			pix[randompix+3] = randomcolor;

			m += 1;
			}
			

			// Draw the ImageData at the given (x,y) coordinates.
			context.putImageData(imgd, x, y);
			
			var data = canvas.toDataURL('image/png');
			photo.setAttribute('src', data);

		}

////////////////////////////////////////////////////////////////////////////////////////

	function mylumimoins(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			pix[i  ] = pix[i  ] * 0.75; // red
			pix[i+1] = pix[i+1] * 0.75; // green
			pix[i+2] = pix[i+2] * 0.75; // blue
			// i+3 is alpha (the fourth element)
		}
		
		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

	}

	function mylumiplus(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;

		// Loop over each pixel and invert the color.
		for (var i = 0, n = pix.length; i < n; i += 4) {
			pix[i  ] = pix[i  ] * 1.75; // red
			pix[i+1] = pix[i+1] * 1.75; // green
			pix[i+2] = pix[i+2] * 1.75; // blue
			// i+3 is alpha (the fourth element)
		}
		
		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, x, y);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);

	}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

	function mymoitr(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;


		console.log("height="+height+", width="+width);
		/*
		// EXEMPLE DE TRAITEMENT EN 1D
		// Loop over each pixel and invert the color.
		for (var i = 0; i < pix.length; i += 4) {
			pix[i  ] = 255 - pix[i  ]; // red
			pix[i+1] = 255 - pix[i+1  ]; // green
			pix[i+2] = 255 - pix[i+2  ]; // blue

			pix[i  ] = 255 ; // red
			pix[i+1] = 255 ; // green
			pix[i+2] = 0 ; // blue
			// i+3 is alpha (the fourth element)
		}
		*/

		// PASSAGE EN 1D POUR SIMPLIFIER LA GESTION DU VOISINAGE
		// 1 tab 1D -> 4 tab 2D (r,g,b,a) 
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
		// mise en rouge de la moitier gauche
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width/2; x++) {
				tr[x][y] = 255;
				tg[x][y] = 0;
				tb[x][y] = 0;
				// ta[x][y] = ta[x][y];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myflou(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;


		console.log("height="+height+", width="+width);
		/*
		// EXEMPLE DE TRAITEMENT EN 1D
		// Loop over each pixel and invert the color.
		for (var i = 0; i < pix.length; i += 4) {
			pix[i  ] = 255 - pix[i  ]; // red
			pix[i+1] = 255 - pix[i+1  ]; // green
			pix[i+2] = 255 - pix[i+2  ]; // blue

			pix[i  ] = 255 ; // red
			pix[i+1] = 255 ; // green
			pix[i+2] = 0 ; // blue
			// i+3 is alpha (the fourth element)
		}
		*/

		// PASSAGE EN 1D POUR SIMPLIFIER LA GESTION DU VOISINAGE
		// 1 tab 1D -> 4 tab 2D (r,g,b,a) 
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
		// mise en rouge de la moitier gauche
		for (var y = 1; y < height - 1; y++) { 
			for (var x = 1; x < width - 1; x++) {
				
				var mr = (tr[x-1][y-1] + tr[x-1][y] + tr[x-1][y+1] + tr[x][y] +	tr[x][y-1] + tr[x][y+1] + tr[x+1][y+1] + tr[x+1][y-1] + tr[x+1][y])/9;
				var mg = (tg[x-1][y-1] + tg[x-1][y] + tg[x-1][y+1] + tg[x][y] + tg[x][y-1] + tg[x][y+1] + tg[x+1][y+1] + tg[x+1][y-1] + tg[x+1][y])/9;
				var mb = (tb[x-1][y-1] + tb[x-1][y] + tb[x-1][y+1] + tb[x][y] + tb[x][y-1] + tb[x][y+1] + tb[x+1][y+1] + tb[x+1][y-1] + tb[x+1][y])/9;

				tr[x][y] = mr;
				tg[x][y] = mg;
				tb[x][y] = mb;
				// ta[x][y] = ta[x][y];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}


	function myflou2(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;


		console.log("height="+height+", width="+width);
		/*
		// EXEMPLE DE TRAITEMENT EN 1D
		// Loop over each pixel and invert the color.
		for (var i = 0; i < pix.length; i += 4) {
			pix[i  ] = 255 - pix[i  ]; // red
			pix[i+1] = 255 - pix[i+1  ]; // green
			pix[i+2] = 255 - pix[i+2  ]; // blue

			pix[i  ] = 255 ; // red
			pix[i+1] = 255 ; // green
			pix[i+2] = 0 ; // blue
			// i+3 is alpha (the fourth element)
		}
		*/

		// PASSAGE EN 1D POUR SIMPLIFIER LA GESTION DU VOISINAGE
		// 1 tab 1D -> 4 tab 2D (r,g,b,a) 
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
		// mise en rouge de la moitier gauche
		for (var y = 2; y < height - 2; y++) { 
			for (var x = 2; x < width - 2; x++) {
				
				var mr = (tr[x-1][y-1] + tr[x-1][y] + tr[x-1][y+1] + tr[x][y] +	tr[x][y-1] + tr[x][y+1] + tr[x+1][y+1] + tr[x+1][y-1] + tr[x+1][y] + tr[x-2][y-2] + tr[x-1][y-2] + tr[x][y-2] + tr[x+1][y-2] + tr[x+2][y-2] + tr[x-2][y-1] + tr[x+2][y+1] + tr[x-2][y] + tr[x+2][y] + tr[x-2][y-1] + tr[x+2][y-1] + tr[x-2][y-2] + tr[x-1][y-2] + tr[x][y-2] + tr[x+1][y-2] + tr[x+2][y-2])/25;
				var mg = (tg[x-1][y-1] + tg[x-1][y] + tg[x-1][y+1] + tg[x][y] + tg[x][y-1] + tg[x][y+1] + tg[x+1][y+1] + tg[x+1][y-1] + tg[x+1][y] + tg[x-2][y-2] + tg[x-1][y-2] + tg[x][y-2] + tg[x+1][y-2] + tg[x+2][y-2] + tg[x-2][y-1] + tg[x+2][y+1] + tg[x-2][y] + tg[x+2][y] + tg[x-2][y-1] + tg[x+2][y-1] + tg[x-2][y-2] + tg[x-1][y-2] + tg[x][y-2] + tg[x+1][y-2] + tg[x+2][y-2])/25;
				var mb = (tb[x-1][y-1] + tb[x-1][y] + tb[x-1][y+1] + tb[x][y] + tb[x][y-1] + tb[x][y+1] + tb[x+1][y+1] + tb[x+1][y-1] + tb[x+1][y] + tb[x-2][y-2] + tb[x-1][y-2] + tb[x][y-2] + tb[x+1][y-2] + tb[x+2][y-2] + tb[x-2][y-1] + tb[x+2][y+1] + tb[x-2][y] + tb[x+2][y] + tb[x-2][y-1] + tb[x+2][y-1] + tb[x-2][y-2] + tb[x-1][y-2] + tb[x][y-2] + tb[x+1][y-2] + tb[x+2][y-2])/25;

				tr[x][y] = mr;
				tg[x][y] = mg;
				tb[x][y] = mb;
				// ta[x][y] = ta[x][y];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function myfloup(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');
	
		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;
	
	
		console.log("height="+height+", width="+width);
		/*
		// EXEMPLE DE TRAITEMENT EN 1D
		// Loop over each pixel and invert the color.
		for (var i = 0; i < pix.length; i += 4) {
			pix[i  ] = 255 - pix[i  ]; // red
			pix[i+1] = 255 - pix[i+1  ]; // green
			pix[i+2] = 255 - pix[i+2  ]; // blue
	
			pix[i  ] = 255 ; // red
			pix[i+1] = 255 ; // green
			pix[i+2] = 0 ; // blue
			// i+3 is alpha (the fourth element)
		}
		*/
	
		// PASSAGE EN 1D POUR SIMPLIFIER LA GESTION DU VOISINAGE
		// 1 tab 1D -> 4 tab 2D (r,g,b,a) 
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));
	
		// copie des valeurs
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}
	
		// TRAITEMENT / APPLICATION D'UN FILTRE
		// mise en rouge de la moitier gauche
		for (var y = 2; y < height - 2; y++) { 
			for (var x = 2; x < width - 2; x++) {
				
				var mr = (tr[x-1][y-1]*6 + tr[x-1][y]*8 + tr[x-1][y+1]*6 + tr[x][y]*10 + tr[x][y-1]*8 + tr[x][y+1]*8 + tr[x+1][y+1]*6 + tr[x+1][y-1]*6 + tr[x+1][y]*8 + tr[x-2][y+2] + tr[x-1][y+2]*2 + tr[x][y+2]*3 + tr[x+1][y+2]*2 + tr[x+2][y+2] + tr[x-2][y+1]*2 + tr[x+2][y+1]*2 + tr[x-2][y]*3 + tr[x+2][y]*3 + tr[x-2][y-1]*2 + tr[x+2][y-1]*2 + tr[x-2][y-2] + tr[x-1][y-2]*2 + tr[x][y-2]*3 + tr[x+1][y-2]*2 + tr[x+2][y+2])/98;
				var mg = (tg[x-1][y-1]*6 + tg[x-1][y]*8 + tg[x-1][y+1]*6 + tg[x][y]*10 + tg[x][y-1]*8 + tg[x][y+1]*8 + tg[x+1][y+1]*6 + tg[x+1][y-1]*6 + tg[x+1][y]*8 + tg[x-2][y+2] + tg[x-1][y+2]*2 + tg[x][y+2]*3 + tg[x+1][y+2]*2 + tg[x+2][y+2] + tg[x-2][y+1]*2 + tg[x+2][y+1]*2 + tg[x-2][y]*3 + tg[x+2][y]*3 + tg[x-2][y-1]*2 + tg[x+2][y-1]*2 + tg[x-2][y-2] + tg[x-1][y-2]*2 + tg[x][y-2]*3 + tg[x+1][y-2]*2 + tg[x+2][y+2])/98;
				var mb = (tb[x-1][y-1]*6 + tb[x-1][y]*8 + tb[x-1][y+1]*6 + tb[x][y]*10 + tb[x][y-1]*8 + tb[x][y+1]*8 + tb[x+1][y+1]*6 + tb[x+1][y-1]*6 + tb[x+1][y]*8 + tb[x-2][y+2] + tb[x-1][y+2]*2 + tb[x][y+2]*3 + tb[x+1][y+2]*2 + tb[x+2][y+2] + tb[x-2][y+1]*2 + tb[x+2][y+1]*2 + tb[x-2][y]*3 + tb[x+2][y]*3 + tb[x-2][y-1]*2 + tb[x+2][y-1]*2 + tb[x-2][y-2] + tb[x-1][y-2]*2 + tb[x][y-2]*3 + tb[x+1][y-2]*2 + tb[x+2][y+2])/98;

				tr[x][y] = mr;
				tg[x][y] = mg;
				tb[x][y] = mb;
				// ta[x][y] = ta[x][y];
			}
		}
	
		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}
	
		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

	function mypasso(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;


		console.log("height="+height+", width="+width);
		/*
		// EXEMPLE DE TRAITEMENT EN 1D
		// Loop over each pixel and invert the color.
		for (var i = 0; i < pix.length; i += 4) {
			pix[i  ] = 255 - pix[i  ]; // red
			pix[i+1] = 255 - pix[i+1  ]; // green
			pix[i+2] = 255 - pix[i+2  ]; // blue

			pix[i  ] = 255 ; // red
			pix[i+1] = 255 ; // green
			pix[i+2] = 0 ; // blue
			// i+3 is alpha (the fourth element)
		}
		*/

		// PASSAGE EN 1D POUR SIMPLIFIER LA GESTION DU VOISINAGE
		// 1 tab 1D -> 4 tab 2D (r,g,b,a) 
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}

		// TRAITEMENT / APPLICATION D'UN FILTRE
		// mise en rouge de la moitier gauche
		for (var y = 1; y < height - 1; y++) { 
			for (var x = 1; x < width - 1; x++) {
				
				var mr = (tr[x-1][y-1] + tr[x-1][y]*2 + tr[x-1][y+1] + tr[x][y]*4 + tr[x][y-1]*2 + tr[x][y+1]*2 + tr[x+1][y+1] + tr[x+1][y-1] + tr[x+1][y]*2)/16;
				var mg = (tg[x-1][y-1] + tg[x-1][y]*2 + tg[x-1][y+1] + tg[x][y]*4 + tg[x][y-1]*2 + tg[x][y+1]*2 + tg[x+1][y+1] + tg[x+1][y-1] + tg[x+1][y]*2)/16;
				var mb = (tb[x-1][y-1] + tb[x-1][y]*2 + tb[x-1][y+1] + tb[x][y]*4 + tb[x][y-1]*2 + tb[x][y+1]*2 + tb[x+1][y+1] + tb[x+1][y-1] + tb[x+1][y]*2)/16;


				tr[x][y] = mr;
				tg[x][y] = mg;
				tb[x][y] = mb;
				// ta[x][y] = ta[x][y];
			}
		}

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);		
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

	function mymed(){
		var photo = document.getElementById('photo');
		var canvas = document.getElementById('mycanvas');
		var context = canvas.getContext('2d');

		// Get the CanvasPixelArray from the given coordinates and dimensions.
		x = 0;
		y = 0;
		width = canvas.width;
		height = canvas.height;
		
		var imgd = context.getImageData(x, y, width, height);
		var pix = imgd.data;


		console.log("height="+height+", width="+width);
		/*
		// EXEMPLE DE TRAITEMENT EN 1D
		// Loop over each pixel and invert the color.
		for (var i = 0; i < pix.length; i += 4) {
			pix[i  ] = 255 - pix[i  ]; // red
			pix[i+1] = 255 - pix[i+1  ]; // green
			pix[i+2] = 255 - pix[i+2  ]; // blue

			pix[i  ] = 255 ; // red
			pix[i+1] = 255 ; // green
			pix[i+2] = 0 ; // blue
			// i+3 is alpha (the fourth element)
		}
		*/

		// PASSAGE EN 1D POUR SIMPLIFIER LA GESTION DU VOISINAGE
		// 1 tab 1D -> 4 tab 2D (r,g,b,a) 
		// déclaration de 4 tableaux à 2 dim (de taille width * height)
		var tr = new Array(width).fill().map(() => Array(height));
		var tg = new Array(width).fill().map(() => Array(height));
		var tb = new Array(width).fill().map(() => Array(height));
		var ta = new Array(width).fill().map(() => Array(height));

		// copie des valeurs
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				tr[x][y] = pix[x*4+y*(width*4)+0];
				tg[x][y] = pix[x*4+y*(width*4)+1];
				tb[x][y] = pix[x*4+y*(width*4)+2];
				ta[x][y] = pix[x*4+y*(width*4)+3];
			}
		}
		
		var moy = [];
		for (var i = 0, n = pix.length; i < n; i += 4) {
			moy.push = (tr[x][y] + tg[x][y] + tb[x][y])/3;
			
		}
		var max = Math.max(moy);
		var min = Math.min(moy);


		// TRAITEMENT / APPLICATION D'UN FILTRE
		// mise en rouge de la moitier gauche
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {

				

				var calculr = 255/(max-min)*(tr[x][y]-min);
				var calculg = 255/(max-min)*(tg[x][y]-min);
				var calculb = 255/(max-min)*(tb[x][y]-min);

				tr[x][y] = calculr;
				tg[x][y] = calculg;
				tb[x][y] = calculb;
				//ta[x][y] = pix[x*4+y*(width*4)+3];

			}
		}
	
	

		// RETOUR EN 1D POUR AFFICHER LES MODIFICATIONS
		// 4 tab 2D (r,g,b,a) -> 1 tab 1D POUR METTRE A JOUR L'IMAGE
		for (var y = 0; y < height; y++) { 
			for (var x = 0; x < width; x++) {
				pix[x*4+y*(width*4)+0] = tr[x][y];
				pix[x*4+y*(width*4)+1] = tg[x][y];
				pix[x*4+y*(width*4)+2] = tb[x][y];
				pix[x*4+y*(width*4)+3] = ta[x][y];
			}
		}

		// Draw the ImageData at the given (x,y) coordinates.
		context.putImageData(imgd, 0, 0);
		
		var data = canvas.toDataURL('image/png');
		photo.setAttribute('src', data);
	}
		


//////////////////////////////////////////////////////////////////////////////////////////////////////////

	function afterload(){
		invertbutton = document.getElementById('invertbutton');
		BWbutton = document.getElementById('BWbutton');
		Greybutton = document.getElementById('Greybutton');
		redbutton = document.getElementById('redbutton');
		greenbutton = document.getElementById('greenbutton');
		bluebutton = document.getElementById('bluebutton');
		/*
		redfilterbutton = document.getElementById('redfilterbutton');
		greenfilterbutton = document.getElementById('greenfilterbutton');
		bluefilterbutton = document.getElementById('bluefilterbutton');
		magentabutton = document.getElementById('magentabutton');
		yellowbutton = document.getElementById('yellowbutton');
		cyanbutton = document.getElementById('cyanbutton');
		*/
		halfWbutton = document.getElementById('halfWbutton');
		//halfW2button = document.getElementById('halfW2button');

		rebutton = document.getElementById('rebutton');
		grebutton = document.getElementById('grebutton');
		blbutton = document.getElementById('blbutton');
		magbutton = document.getElementById('magbutton');
		yelbutton = document.getElementById('yelbutton');
		cybutton = document.getElementById('cybutton');

		renbutton = document.getElementById('renbutton');
		grenbutton = document.getElementById('grenbutton');
		blnbutton = document.getElementById('blnbutton');
		magnbutton = document.getElementById('magnbutton');
		yelnbutton = document.getElementById('yelnbutton');
		cynbutton = document.getElementById('cynbutton');

		noisebutton = document.getElementById('noisebutton');
		lumimoinsbutton = document.getElementById('lumimoinsbutton');
		lumiplusbutton = document.getElementById('lumiplusbutton');

		floubutton = document.getElementById('floubutton');
		flou2button = document.getElementById('flou2button');
		floupbutton = document.getElementById('floupbutton');
		passobutton = document.getElementById('passobutton');

		medbutton = document.getElementById('medbutton');




		invertbutton.addEventListener('click', function(ev){
			myInvert();
			}, false);
		BWbutton.addEventListener('click', function(ev){
			myBW();
			}, false);
		Greybutton.addEventListener('click', function(ev){
			myGrey();
			}, false);
		redbutton.addEventListener('click', function(ev){
			myred();
			}, false);
		greenbutton.addEventListener('click', function(ev){
			mygreen();
			}, false);
		bluebutton.addEventListener('click', function(ev){
			myblue();
			}, false);
/*
		redfilterbutton.addEventListener('click', function(ev){
			myfilterred();
			}, false);
		greenfilterbutton.addEventListener('click', function(ev){
			myfiltergreen();
			}, false);
		bluefilterbutton.addEventListener('click', function(ev){
			myfilterblue();
			}, false);
		magentafilterbutton.addEventListener('click', function(ev){
			myfiltermagenta();
			}, false);
		yellowfilterbutton.addEventListener('click', function(ev){
			myfilteryellow();
			}, false);
		cyanfilterbutton.addEventListener('click', function(ev){
			myfiltercyan();
			}, false);
			halfW2button.addEventListener('click', function(ev){
			myhalfW2();
			}, false);
*/
		magentabutton.addEventListener('click', function(ev){
			mymagenta();
			}, false);
		yellowbutton.addEventListener('click', function(ev){
			myyellow();
			}, false);
		cyanbutton.addEventListener('click', function(ev){
			mycyan();
			}, false);

		

		halfWbutton.addEventListener('click', function(ev){
			myhalfW();
			}, false);
		

		rebutton.addEventListener('click', function(ev){
			myre();
			}, false);
		grebutton.addEventListener('click', function(ev){
			mygre();
			}, false);
		blbutton.addEventListener('click', function(ev){
			mybl();
			}, false);
		magbutton.addEventListener('click', function(ev){
			mymag();
			}, false);
		yelbutton.addEventListener('click', function(ev){
			myyel();
			}, false);
		cybutton.addEventListener('click', function(ev){
			mycy();
			}, false);

		renbutton.addEventListener('click', function(ev){
			myren();
			}, false);
		grenbutton.addEventListener('click', function(ev){
			mygren();
			}, false);
		blnbutton.addEventListener('click', function(ev){
			mybln();
			}, false);
		magnbutton.addEventListener('click', function(ev){
			mymagn();
			}, false);
		yelnbutton.addEventListener('click', function(ev){
			myyeln();
			}, false);
		cynbutton.addEventListener('click', function(ev){
			mycyn();
			}, false);

		noisebutton.addEventListener('click', function(ev){
			mynoise();
			}, false);

		lumimoinsbutton.addEventListener('click', function(ev){
			mylumimoins();
			}, false);

		lumiplusbutton.addEventListener('click', function(ev){
			mylumiplus();
			}, false);

		floubutton.addEventListener('click', function(ev){
			myflou();
			}, false);
		flou2button.addEventListener('click', function(ev){
			myflou2();
			}, false);
		floupbutton.addEventListener('click', function(ev){
			myfloup();
			}, false);
		passobutton.addEventListener('click', function(ev){
			mypasso();
			}, false);
		medbutton.addEventListener('click', function(ev){
			mymed();
			}, false);
	


///////////////////////////////////////////////////////////////////////////////
		moitrbutton = document.getElementById('moitrbutton');

		// ICI je fais le lien entre ma fonction myInert() et l'évenement click du bouton innvert
		moitrbutton.addEventListener('click', function(ev){mymoitr();}, false);
	}
	window.addEventListener('load', afterload, false);
})();
