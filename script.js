/* Task 1 */
var heading = document.getElementById('heading');
console.log(heading.innerText);
heading.innerHTML="<h3>CHANGED IT</h3>"

/* Task 2 using plain JavaScript */
var textBtn=document.getElementById("addText2");
textBtn.addEventListener("click",function(event)
{
    var task2=document.getElementById("task2a");
    var para=document.createElement('p');
    task2.innerHTML="<p>Hello World</p>";
    task2.appendChild(para);
});


/* Task 4 using jQuery */
