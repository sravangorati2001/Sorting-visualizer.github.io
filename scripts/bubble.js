

async function bubbleSort(){
  disableButtons();
    for(var i=0;i<array_s-1;i++){
      //  console.log(div_size[i]);
        for(var j=0;j<array_s-i-1;j++){
          await timeout(ms);
          div_Update(divs[j],div_size[j],"yellow");
          div_Update(divs[j+1],div_size[j+1],"yellow");
          if(div_size[j]>div_size[j+1]){
              var temp=div_size[j+1];
              div_size[j+1]=div_size[j];
              div_size[j]=temp;
              await timeout(ms);
              div_Update(divs[j],div_size[j],"yellow");
              div_Update(divs[j+1],div_size[j+1],"yellow");
          }
          div_Update(divs[j],div_size[j],"purple");
          div_Update(divs[j+1],div_size[j+1],"purple");
        }
        div_Update(divs[j],div_size[j],"green");
    }
    div_Update(divs[0],div_size[0],"green");
    enableButtons()
    }