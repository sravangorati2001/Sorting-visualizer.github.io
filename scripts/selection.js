

 async function selectionSort(){
    disableButtons();
    for(var i=0;i<array_s-1;i++){
        var ind=i;
        await timeout(ms);
        div_Update(divs[i],div_size[i],"red");
        for(var j=i+1;j<array_s;j++){
            
            if(div_size[ind]>div_size[j]){
                await timeout(ms);
                if(ind===i)
                div_Update(divs[j],div_size[j],"yellow");
                else{
                    div_Update(divs[j],div_size[j],"yellow");
                    div_Update(divs[ind],div_size[ind],"purple");
                }
                ind=j;
            }
        }
        await timeout(ms);
        var temp=div_size[i];
        div_size[i]=div_size[ind];
        div_size[ind]=temp;
        div_Update(divs[ind],div_size[ind],"purple");
       div_Update(divs[i],div_size[i],"green"); 
    }
    div_Update(divs[array_s-1],div_size[array_s-1],"green");
    enableButtons()
}