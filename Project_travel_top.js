function visible() 
{
    document.getElementById("topcontaineroptions").setAttribute("style","display:block") 
    document.getElementById("arrowupo").setAttribute("style","display:block")  
}
function invisiable() 
{
    document.getElementById("topcontaineroptions").setAttribute("style","display:none")
    document.getElementById("arrowupo").setAttribute("style","display:none")     
}
function storyvisible() 
{
    document.getElementById("topcontainervideos").setAttribute("style","display:block")
    document.getElementById("arrowups").setAttribute("style","display:block")   
}
function stroyinvisiable() 
{
    document.getElementById("topcontainervideos").setAttribute("style","display:none")
    document.getElementById("arrowups").setAttribute("style","display:none")     
}
function shopvisible() 
{
    document.getElementById("topcontainershop").setAttribute("style","display:block")
    document.getElementById("arrowupsh").setAttribute("style","display:block")   
}
function shopinvisiable() 
{
    document.getElementById("topcontainershop").setAttribute("style","display:none")
    document.getElementById("arrowupsh").setAttribute("style","display:none")     
}
function sub()
{
    var a =document.getElementById("subscribe").value
    if (a== "subscribe") 
    {
        document.getElementById("subscribe").setAttribute("value","SUBSCRIBED")
        document.getElementById("subscribe").style.color="white"   
        document.getElementById("subscribe").style.backgroundColor="gray" 
    }
    else
    {
        document.getElementById("subscribe").setAttribute("value","SUBSCRIBE")
        document.getElementById("subscribe").style.color="white"
        document.getElementById("subscribe").style.backgroundColor="red" 
    }
}
var imagesState = document.getElementsByClassName("imgbox")
for(i=1;i<=imagesState.length;i++)
{
    imagesState[i-1].setAttribute("src","./"+i+".jsp-min.jpg")
    imagesState[i-1].style.width="149.7px"
    imagesState[i-1].style.height="35vh"
}