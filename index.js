//variable
var input_text = document.getElementById("books");
var btn_search = document.getElementById("pesquisar");

window.onload = function(){
  btn_search.addEventListener("click",function(){
      if(input_text.value === ""){
        alert("Pesquise um livro")
      }else{       
        request()
        input_text.value = ""
      }
  });
}


function request(){
  var ajax;
  ajax = new XMLHttpRequest();
  
  ajax.onreadystatechange = function(){
  	if(ajax.readyState === 4 && ajax.status === 200){
  		
  		var dates = JSON.parse(ajax.responseText);
        var resposta = document.querySelector(".resultado");
        
        for(var i =0;i < 20;i++){
 		resposta.innerHTML +=
 		"<section class='resposta'><span><h4>"
 		+dates.items[i].volumeInfo.title+
 		"</h4></span><span><img src="+dates.items[i].volumeInfo.imageLinks.smallThumbnail+"></span>"
 		+"<div class='Info'><div class='text'><h4>Author:</h4><p>"
 		+dates.items[i].volumeInfo.authors+"</p></div><div class='text'><h4>Publisher:</h4><p>"
 		+dates.items[i].volumeInfo.publisher+
 		"</p></div><div class='text'><h4>Published:</h4><p>"
 		+dates.items[i].volumeInfo.publishedDate+"</p></div></div></section>";		
  	  }
  	}
  }
  
  var input_text = document.getElementById("books").value
  
  ajax.open("GET","https://www.googleapis.com/books/v1/volumes?q="+input_text);
  ajax.send(null); 
}