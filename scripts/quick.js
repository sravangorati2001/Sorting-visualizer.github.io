
async function qSort(){
    disableButtons();
   await quickSort(0,array_s-1);
    enableButtons()
}
async function quickSort(low,high){
  if(low<high){
      var pi=await partition(low,high);
     await quickSort(low,pi-1);
     await quickSort(pi+1,high);
  }
}
async function partition(l,h){
 var i=l;
 await timeout(ms);
 div_Update(divs[h],div_size[h],"red");
 var pivot=div_size[h];
 for(var j=l;j<=h-1;j++){
    await timeout(ms);
    div_Update(divs[j],div_size[j],"yellow");
     if(pivot>div_size[j]){
         var temp=div_size[i];
         div_size[i]=div_size[j];
         div_size[j]=temp;
         div_Update(divs[j],div_size[j],"pink");
        div_Update(divs[i],div_size[i],"blue");
         i++;
     }
     else{
        div_Update(divs[j],div_size[j],"pink");
     }
 }
 var temp=div_size[i];
 div_size[i]=div_size[h];
 div_size[h]=temp;
 await timeout(ms);
  div_Update(divs[i],div_size[i],"purple");
 div_Update(divs[h],div_size[h],"pink");
 await timeout(ms);
for(var k=0;k<array_s;k++)
div_Update(divs[k],div_size[k],"green");
 return i;
}