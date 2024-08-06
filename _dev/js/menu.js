window.onscroll=function(){changeMenu()}
function changeMenu()
{
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

    // At specifiv position do what you want 
    if(scrollBarPosition == 0) {
        document.getElementById('status').innerHTML = "User is on top of the page, position=" + scrollBarPosition;
    }
    else {
        document.getElementById('status').innerHTML = "User is not on top of the page, position="  + scrollBarPosition;
    }
}