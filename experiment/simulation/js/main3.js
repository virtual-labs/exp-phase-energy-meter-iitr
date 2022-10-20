var objImage = null;
function init() {
        objImage = document.getElementById("tri_img");
        
    }
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
                case 83: //down arrow key
                setting();
                break;
        }
    }
  
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                moveLeft();
                break;
            case 38: //Up arrow key
                moveUp();
                break;
            case 39: //right arrow key
                moveRight();
                break;
            case 40: //down arrow key
                moveDown();
                break;
                
        }
    }
    function moveLeft() {
        objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
        
    }
    function moveUp() {
        objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
        

    }
    function moveRight() {
        objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
       
    }
    function moveDown() {
        objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
        
    }
    window.onload = init;

   
    
       function start()
       {
        document.getElementById("st_main").disabled= true;
        document.getElementById("alidade_img").style.display = "inline";
        document.getElementById("stand_img").style.display = "inline";
        document.getElementById("staff_maina").style.display = "inline";
        swal("Please click on the staff placed at point A");
       }
       function viewa()
       {
        document.getElementById("cross_viewa").style.display = "inline";
        document.getElementById("save").style.display="inline";
        swal("Please click on the SAVE Button to store readings marked on the staff at point A");
       }
       function viewb()
       {
        document.getElementById("save").disabled = false;
        document.getElementById("cross_viewb").style.display = "inline";
        swal("Please click on the SAVE Button to store readings marked on the staff at point B");

       }
       function viewc()
       {
        document.getElementById("save").disabled = false;
        document.getElementById("cross_viewc").style.display = "inline";
        swal("Please click on the SAVE Button to store readings marked on the staff at point C");
       }
       function viewd()
       {
        document.getElementById("save").disabled = false;
        document.getElementById("cross_viewd").style.display = "inline";
        swal("Please click on the SAVE Button to store readings marked on the staff at point D");
        
       }
       
       function save()
       {
        if(document.getElementById("staff_maina").style.display === "inline" )
        {
            document.getElementById("cross_viewa").style.display = "none";
            swal("Please click on the NEXT Button to move the staff at point B");
        }
        else
        if(document.getElementById("staff_mainb").style.display === "inline" )
        {
            document.getElementById("cross_viewb").style.display = "none";
            document.getElementById("next_main").disabled = false;
            swal("Please click on the NEXT Button to move the staff at point C");
           
        }
        else 
        if(document.getElementById("staff_mainc").style.display === "inline" )
        {
            document.getElementById("cross_viewc").style.display = "none";
            document.getElementById("next_main").disabled = false;
            swal("Please click on the NEXT Button to move the staff at point D");
        }
        else
        if(document.getElementById("staff_maind").style.display === "inline" )
        {
            document.getElementById("cross_viewb").style.display = "none";
            document.getElementById("view_readings").style.display =  "inline";
            swal("Please take a look at the alidade view section for readings");
        }

        else{
            swal("Please click on the staff first");

        }
        document.getElementById("next_main").style.display = "inline";
      
        }
      function n(){

        if(document.getElementById("staff_maina").style.display === "inline")
        {
        
            document.getElementById("staff_maina").style.display = "none";
            document.getElementById("staff_mainb").style.display = "inline";
            swal("Please click on the staff placed at point B");
            document.getElementById("next_main").disabled = true;
            document.getElementById("save").disabled = true;
        }
        else
        if(document.getElementById("staff_mainb").style.display === 'inline')
        {
            
            swal("Please click on the staff placed at point C");
            document.getElementById("staff_maina").style.display = "none";
            document.getElementById("staff_mainb").style.display = "none";
            document.getElementById("staff_mainc").style.display = "inline";
            document.getElementById("next_main").disabled = true;
            document.getElementById("save").disabled = true;
        }
        else
        if(document.getElementById("staff_mainc").style.display === "inline")
        {
            swal("Please click on the staff placed at point D");
            document.getElementById("staff_maina").style.display = "none";
            document.getElementById("staff_mainb").style.display = "none";
            document.getElementById("staff_mainc").style.display = "none";
            document.getElementById("staff_maind").style.display = "inline";
            document.getElementById("next_main").disabled = true;
            document.getElementById("save").disabled = true;
        }
        
       }
      function view()
      {
            document.getElementById("t").style.display = "inline";
            document.getElementById("alidade_img").style.display = "none";
            document.getElementById("save").disabled = true;
            document.getElementById("finish").style.display = "inline";
      }