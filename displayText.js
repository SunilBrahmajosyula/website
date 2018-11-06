function makeCanvas(){
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
    
  ctx.font = '50pt Arial';
  ctx.fillStyle = randomColorRGB();
  
  ctx.fillText("! L0ve You Baby",250,150);
  
  
  function randomColorRGB(){
    
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb('+r+','+g+','+b+')';  
  }
  setInterval(makeCanvas,1000);
}