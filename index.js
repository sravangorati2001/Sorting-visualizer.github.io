
var array_s= parseInt(document.getElementById('arraysize').value);
var mine=20;
var maxe=100;
var container=document.getElementById('array');
var ms=parseInt(document.getElementById('speed').value);

container.style="flex-direction:row"
var divs=[];
var div_size=[];

 window.addEventListener('load',generateArray);
$('#generate').click(generateArray);
$('#arraysize').change(generateArray);
   $('#speed').change(()=>{ms=parseInt(document.getElementById('speed').value);});

 $("#merge").on("click",mSort);
 $("#bubble").on("click",bubbleSort);
 $("#quick").on("click",qSort);
 $("#select").on("click",selectionSort);
 $("#insert").on("click",insertionSort);

function generateArray(){
   array_s= parseInt(document.getElementById('arraysize').value);
   ms=parseInt(document.getElementById('speed').value);
    container.innerHTML="";
    for(var i=0;i<array_s;i++){
   div_size[i]= Math.floor(Math.random() * (maxe - mine)) + mine;
   divs[i]=document.createElement("div");
   container.appendChild(divs[i]);
   div_Update(divs[i],div_size[i],"purple");
 }
}
function disableButtons(){
   document.getElementById("generate").disabled = true;
   document.getElementById("merge").disabled = true;
   document.getElementById("bubble").disabled = true;
   document.getElementById("quick").disabled = true;
   document.getElementById("select").disabled = true;
   document.getElementById("insert").disabled = true;
   document.getElementById('arraysize').disabled=true;

}
function enableButtons(){
   document.getElementById("generate").disabled = false;
   document.getElementById("merge").disabled = false;
   document.getElementById("bubble").disabled = false;
   document.getElementById("quick").disabled = false;
   document.getElementById("select").disabled = false;
   document.getElementById("insert").disabled = false;
   document.getElementById('arraysize').disabled=false;
}
