// Add an event listener to the form that upon submits creates a new teacher
const create = document.querySelector("form")
// When the teacher is created redirect to the teachers page
create.addEventListener ("submit", async (e)=>{

    e.preventDefault()
    const teacherData = new FormData(create)
    const reqBody = Object.fromEntries(teacherData)
    console.log(reqBody)
    
    const response = await fetch ("/add/teacher", {
        method : "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify (reqBody)

    })
const data = await response.JSON()
console.log(data)
    })