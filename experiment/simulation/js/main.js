

function fl_br_based()
{   
    if(document.getElementById("browser_based").style.display === "none" && document.getElementById("flash_based").style.display === "none")
    {   document.getElementById("browser_based").style.display="inline";
        document.getElementById("flash_based").style.display="inline";
        
    }
    else
    {
        document.getElementById("browser_based").style.display="none";
        document.getElementById("flash_based").style.display="none";
    }

}
function set(){
    swal("Click on EQUIPEMNT SETUP Button");
}
window.onload = set;


