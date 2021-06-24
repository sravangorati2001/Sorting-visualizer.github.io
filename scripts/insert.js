

async function insertionSort(){
    disableButtons();
    for(var i=1;i<array_s;i++){
        div_Update(divs[i],div_size[i],"red");
        var key=div_size[i];
        var j=i-1;
        while(j>=0 && div_size[j]>key){
            await timeout(ms);
            div_size[j+1]=div_size[j];
            div_Update(divs[j+1],div_size[j+1],"yellow");
            div_Update(divs[j],div_size[j],"black");
            j--;
        }
        div_size[j+1]=key;
        await timeout(ms);
        div_Update(divs[j+1],div_size[j+1],"red");
       
        await timeout(ms);
        for(var k=j+1;k<=i;k++)
        div_Update(divs[k],div_size[k],"green");
    }
    enableButtons();
}