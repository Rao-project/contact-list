// fav button event
document.getElementsByClassName("list")[0].addEventListener('click', function (event) 
{
    window.location.href="index.html";
    console.log("clicked");
});
// profile button event
document.getElementsByClassName("fav")[0].addEventListener('click', function (event) 
{
    window.location.href="fav.html";
    console.log("clicked");
}); 