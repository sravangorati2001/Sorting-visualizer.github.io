function div_Update(cont,height,color){
cont.style.backgroundColor=color;
cont.style.margin="0% 0.2%";
cont.style.width="5%";
cont.style.height=height+"%";
}

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
