function Ajax(){
  
  var new_row = document.createElement( "div" );
  new_row.setAttribute( "class", "container text-end user ");
  
  new_row.setAttribute("id","Profile");
  
  const node = document.createTextNode($("#userinput").val());
  
  new_row.appendChild(node);
  document.body.appendChild( new_row );
  elem = document.createElement("img");
  new_row.class= "container text-end User";
  console.log("Printing my new element: ", elem)
  elem.src= "/IoTbot/__libraries/__images/User.png";
  elem.height= "50";
  elem.width= "70";
  elem.border= "3px solid gainsboro";
  elem.alt= "User";
  elem.setAttribute( "class", "rounded-circle ");
  
  //  ($spacer * .5)
  new_row.appendChild(elem);
 
  
  document.body.appendChild( new_row );
  
  
 
 
  
    $.ajax({ type :"post", url: "/IoTbot/__libraries/ajax.php",
      data:{
        
        userinput:$("#userinput").val(),
      },
  
      success: function(response){
        
        result_=JSON.parse(response)
        var new_row = document.createElement( "div" );
        new_row.setAttribute( "class", "container AI pe-3" );
        new_row.setAttribute("id","Profile");
        const node = document.createTextNode(result_['output']);
      
      
          result_=JSON.parse(response)
          elem = document.createElement("img");
          new_row.class= "AI";
          console.log("Printing my new element: ", elem)
          elem.src= "/IoTbot/__libraries/__images/AI.png";
          elem.height= "50";
          elem.width= "70";
          elem.border= "3px solid gainsboro";
          elem.alt= "User";
          elem.setAttribute( "class", "rounded-circle ");
        
          new_row.appendChild(elem);
          
          new_row.appendChild(node);
          document.body.appendChild( new_row );
        
          
        }
    })
}



