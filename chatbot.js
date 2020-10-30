//Making the chatting page responsive using javascript

function input(msg){
	var para=document.createElement("p");								//Taking the input from the input bar and creating the 'p' tag element with the input using DOM 
	para.innerText=msg;
	var att=document.createAttribute("class");							//Naming the class name for "p" tag element
	att.value="user_input";
	para.setAttributeNode(att);							
	document.getElementById("div").appendChild(para);					
	window.scrollBy(0,para.clientHeight+12);							//scrolling the section after appending the child
}

//output function based on the user input 
function output_msg(msg){
	var ans;
	if(msg=="Trending technologies"){
		ans="HERE ARE THE TRENDING TECHNOLOGIES FOR YOU.....\n\n";
		var tech=["1.Data Science","2.Artificial Intelligence","3.Blockchain","4.Augmented Reality and Virtual Reality","5.Cognitive Cloud Computing","6.Angular and React","7.DevOps","8.Internet of Things (IoT)","9.Intelligent Apps (I – Apps)","10.Big Data","11.RPA (Robotic Process Automation)"];
		for(var i=0;i<tech.length;i++){									//If user enters "Trending technologies" it returns the top technologies.
			ans=ans+tech[i]+"\n";
		}
	}
	
	else if(msg=="Job requirements"){									//If user enters job requirements it return the links to apply governament jobs and private jobs.
		ans='<p>Here are the links to apply jobs</p>'+
		'<a style="color:red;text-decoration:none;" target="_blank" href="https://linkup.com/">  1.Current job requirements</a>'+'<br>'+
		'<a style="color:red;text-decoration:none;" target="_blank" href="https://www.indgovtjobs.in/">  2.Governaments jobs</a>';
	}
	
	else if(msg=="Interview tips"){										//If user enters Interview tips it returns the youtube vedio suggesting interview tips.
		ans='<iframe width="300" height="185" target="_blank" src="https://www.youtube.com/embed/HG68Ymazo18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	}
	
	else if(msg=="Online platforms"){									//If user enters Online platforms it returns top 5 online platforms in the world.
		ans='<p>Here are the top online courses in the world</p>'+
		'<a style="color:red;text-decoration:none;" target="_blank" href="https://www.coursera.org/imperial">  1.Coursera</a>'+'<br>'+
		'<a style="color:red;text-decoration:none;" target="_blank" href="https://online-learning.harvard.edu/">  2.Harvard</a>'+'<br>'+
		'<a style="color:red;text-decoration:none;" target="_blank" href="https://www.udacity.com/">  3.Udacity</a>'+'<br>'+
		'<a style="color:red;text-decoration:none;" target="_blank" href="https://www.udemy.com/">  4.Udemy</a>'+'<br>'+
		'<a style="color:red;text-decoration:none;" target="_blank" href="https://www.edx.org/">  5.Edx</a>';
	}
	
	else{																//If user enters any other input it shows the invalid message.													//If user enters any other input it returns the following page
		ans='<p>Hey!I can not reach you.Please enter valid input.</p>'+
		'<p>Type the following text to get the output:1.Trending technologies,2.Job requirements,3.Online platforms,4.Interview tips and type End to exit the chat</p>';
	}
	return ans;
}


document.getElementById("submit").onclick=function output(){
	
	var msg=document.getElementById("type_bar").value;
	
	if(msg=="End"){
		document.location="End.html";									//If the user enters End it goes to end page.
	}
	
	else{
		input(msg);														//calling the input function
		var para=document.createElement("p");							//creates the element for output message
		para.innerHTML=output_msg(msg);
		var att=document.createAttribute("class");
		att.value="bot_output";											//creating class attribute and naming the class and also appending it to the div tag.
		para.setAttributeNode(att);
		document.getElementById("div").appendChild(para);
		document.getElementById("type_bar").value="";					//clears the message in the type bar after executing the input and output messages.
		window.scrollBy(0,para.clientHeight+12);						//scrolling the section after appending the child
	}
	
}