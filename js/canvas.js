function writeContent(){
 
   var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
    
  ctx.font = '15pt Arial';
  ctx.fillStyle = '#EAEDED';
  var text1 = 'About Website';
  ctx.fillText(text1,50,60);
  ctx.fillStyle = 'white';
  ctx.font = '12pt Arial';
  var text = "This website is for finding solutions to the most common bugs and meant";
  ctx.fillText(text,60,150);  
  var text2 = "for learning html, html5, css, css3, javascript, angularjs, java, j2ee, ";
  ctx.fillText(text2,60,200); 
  var text3 = "datastructures,algorithms etc.";
  ctx.fillText(text3,60,250); 
  var text3 = "Note:You can go to hyperlinks beside to go to specific topic";
  ctx.fillText(text3,60,350); 
  
  
}