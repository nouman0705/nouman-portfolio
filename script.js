let sections = document.querySelectorAll("section")
let links = document.querySelectorAll("li")
let arrow=document.getElementById("arrow")
let form = document.querySelector("form")
let formBtn = document.querySelector("[type=submit]")

window.addEventListener("scrollend",()=>{
    arrow.style.opacity="12%"
    arrow.style.transition="2s"
})

window.addEventListener("scroll",()=>{
    arrow.style.opacity="100%"
    arrow.style.transition="1s"
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();
})

formBtn.addEventListener("click",async()=>{
    const firstName = document.querySelector('input[placeholder="John"]').value.trim();
    const lastName = document.querySelector('input[placeholder="Doe"]').value.trim();
    const email = document.querySelector('input[placeholder="john@example.com"]').value.trim();
    const subject = document.querySelector('input[placeholder="Project Inquiry"]').value.trim();
    const message = document.querySelector("textarea").value.trim();

    if(!firstName || !lastName || !email || !subject || !message){
        alert("Please fill in all fields.")
        return;
    }

    const data = {firstName,lastName,email,subject,message}

    try{
        const response = await fetch("https://portfolio-backend-i90l.onrender.com/api/contact",{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(data)
        });
        if(response.ok){
            alert('Message sent successfully! I will get back to you soon.');
            document.querySelectorAll("input").forEach((element)=>{element.value = ""});
            document.querySelector("textarea").value = "";
        }else{
            alert("Something went wrong. Please try again.")
        }
    } catch(error){
        alert("Could not connect to server. Make sure the backend is running..")
        console.error(error)
    }
    
})







