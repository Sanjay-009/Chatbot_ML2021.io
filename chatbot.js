//Making the chatting page responsive using javascript

function input(msg){
	var para=document.createElement("p");								//Taking the input from the input bar and creating the 'p' tag element with the input using DOM 
	para.innerText=msg;
	var att=document.createAttribute("class");							//Naming the class name for "p" tag element
	att.value="user_input";
	para.setAttributeNode(att);							
	document.getElementById("div").appendChild(para);					//Appending the tag in to div tag in html page
}

//output function based on the user input 
function output_msg(msg){
	
	if(msg=="Trending technologies"){
		var ans="HERE ARE THE TRENDING TECHNOLOGIES FOR YOU.....\n\n";
		var tech=["1.Data Science","2.Artificial Intelligence","3.Blockchain","4.Augmented Reality and Virtual Reality","5.Cognitive Cloud Computing","6.Angular and React","7.DevOps","8.Internet of Things (IoT)","9.Intelligent Apps (I – Apps)","10.Big Data","11.RPA (Robotic Process Automation)"];
		for(var i=0;i<tech.length;i++){									//If user enters "Trending technologies" it returns the top technologies.
			ans=ans+tech[i]+"\n";
		}
		return ans;
	}
	
	else if(msg=="Job requirements"){
		var str1="1.Current job requierments";
		var str2="2.Governament jobs";				
		var result1=str1.link("https://linkup.com/\n")					//If user inputs"Job requirements" it returns websites for applying jobs by converting links in to messages.
		var result2=str2.link("https://www.indgovtjobs.in/");
		return "Please select your option"+"\n"+result1+"\n"+result2;
	}
	
	else if(msg=="Interview tips"){
		var str="Interviewtips";										//If user enters "Interview tips" it returns the youtube vedio for giving interview tips.		
		var result=str.link("https://youtu.be/HG68Ymazo18");
		return "Click the below link to gain some interview tips:"+"\n"+result;
	}
	
	else if(msg=="Online platforms"){
		var str1="1.Coursera";											//If user enters "Online platforms" it returns the onlinne coding platform links.
		var str2="2.Harvard";
		var str3="3.Udacity";
		var str4="4.Udemy";
		var str5="5.Edx";
		var result1=str1.link("https://www.coursera.org/imperial")
		var result2=str2.link("https://online-learning.harvard.edu/");
		var result3=str3.link("https://www.udacity.com/")
		var result4=str4.link("https://www.udemy.com/")
		var result5=str5.link("https://www.edx.org/");
		var result= "Here are some best online courses for you"+"\n"+result1+"\n"+result2+"\n"+result3+"\n"+result4+"\n"+result5;
		return result;
	}
	
	else{																//If user enters any other input it returns the following page
		return "Hey!I can't reach you.Please enter valid input."+"\n"+"Type the following text to get the output:1.Trending technologies,2.Job requirements,3.Online platforms,4.Interview tips and type End to exit the chat";
	}
	
}


document.getElementById("submit").onclick=function output(){
	
	var msg=document.getElementById("type_bar").value;
	
	if(msg=="End"){
		document.location="End.html";									//If the user enters End it goes to end page.
	}
	
	else{
		input(msg);
		var para=document.createElement("p");
		para.innerHTML=output_msg(msg);
		var att=document.createAttribute("class");
		att.value="bot_output";											//After user enter input it class input and output messages by calling the output and input messages.
		para.setAttributeNode(att);
		document.getElementById("div").appendChild(para);
		document.getElementById("type_bar").value="";
	}
	
}