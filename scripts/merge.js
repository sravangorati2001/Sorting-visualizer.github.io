


async function mSort(){
  disableButtons();
   await mergeSort(0,array_s-1);
    enableButtons()
}
 async function mergeSort(low , high){
  if(low<high){
      var mid=Math.floor((low+high)/2);
     await timeout(ms);
     div_Update(divs[mid],div_size[mid],"yellow");
     await mergeSort(low,mid);
     await mergeSort(mid+1,high);
     await merge(low,mid,high);
  }
 }

 async function merge(low,mid,high){
   var arr=[];
   var start1=low,end1=mid;
   var start2=mid+1,end2=high;
   var i=0;
   while(start1<=end1 && start2<=end2){
     await timeout(ms);
     if(div_size[start1]<div_size[start2]){
       arr[i]=div_size[start1];
       div_Update(divs[start1],div_size[start1],"red");
       start1++;
     }
     else{
         arr[i]=div_size[start2];
          div_Update(divs[start2],div_size[start2],"red");
         start2++;
     }
     i++;
   }
   while(start1<=end1){
    await timeout(ms);
    arr[i]=div_size[start1];
     div_Update(divs[start1],div_size[start1],"red");
    start1++;
    i++;
   }
   while(start2<=end2){
    await timeout(ms);
    arr[i]=div_size[start2];
     div_Update(divs[start2],div_size[start2],"red");
    start2++;
    i++;
   }
   await timeout(ms);
   for(var j=low,k=0;k<i;j++,k++){
   div_size[j]=arr[k];
    div_Update(divs[j],div_size[j],"green");
   }
 }


