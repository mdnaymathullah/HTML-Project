//Created by Mohammad Naymathullah ID:99067
function start() {
	document.getElementById("submit").addEventListener("click",submit,false);
}
function myFunction() 
	{
	var PlaeC = document.getElementById("place").value;
	
	if(PlaeC == "Hershey Park")
		{
			window.location="Hershey Park.html";
		}
	else if(PlaeC == "Indian Echo Caverns")
		{
			window.location="Indian Echo Caverns.html";
		}
	else if(PlaeC == "West ABCLanes")
		{
			window.location="West ABCLanes.html";
		}
	else if(PlaeC == "The National Civil War Museum")
		{
			window.location="The National  Civil War Museum.html";
		}
	}
	var myImage=document.getElementById("myphoto");
			var imageArray=["dd1.jpg","dd2.jpg","dd3.jpg","dd4.jpg","dd5.jpg","dd6.jpg"];
			var imageIndex=0;

			function changeImage(){		
				myphoto.setAttribute("src",imageArray[imageIndex]);
				imageIndex++;
				if(imageIndex>=imageArray.length)
				{
					imageIndex=0;
				}
			}
			var intervalHandle = setInterval(changeImage,1000);
			myphoto.onclick = function(){
				clearInterval(intervalHandle);
			}
window.addEventListener("load",start,false);