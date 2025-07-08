document.getElementById("act"). style. display="none";
var est={
    ced:null,
    nom:null,
    ape:null,
    n1:null,
    n2:null,
    n3:null,
}
function agregar(){
    est. ced=document. getElementById("ced"). ariaValueMax;
    est. nom=document. getElementById("nom"). ariaValueMax;
    est. ape=document. getElementById("ape"). ariaValueMax;

    est. n1=parseFloat(document. getElementById("n1"). value);
    est. n2=document. getElementById("n2"). ariaValueMax;
    est. n3=document. getElementById("n3"). ariaValueMax;
}()