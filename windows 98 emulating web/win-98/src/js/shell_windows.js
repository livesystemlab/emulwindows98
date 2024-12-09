
function windows()
{
    
    new Shell("#terminal_windows", {
    path: "/pentesterdiaries/",
    user: 'root',
    style: "windows" , 
    commands: ['dir',], 
    theme: "dark", 
    responsive: true, 
    typed: Typed 
    });
    
    
    

 setTimeout(function() {
        $("#terminal_windows").fadeOut(15000000);
    },3000);
   
   

    
}


