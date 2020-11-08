var coll = document.getElementsByClassName("collapsible");
var filtMat = document.getElementsByClassName("stretchlistdiv");
var filt = document.getElementsByClassName("button");
var res = document.getElementsByClassName("rstButton");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

res[0].addEventListener("click", function () {
  for (j = 0; j < filtMat.length; j++) {
    filtMat[j].style.display = 'block';
  }
});

for (i = 0; i < filt.length; i++){
  filt[i].addEventListener("click", function() {
    for (j=0; j < filtMat.length; j++){
      if (filtMat[j].classList.contains(this.name)){
      }
      else {
        filtMat[j].style.display = 'none';
      }
    }
  })
}




