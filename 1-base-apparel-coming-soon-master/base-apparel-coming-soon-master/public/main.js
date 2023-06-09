const email = document.getElementById("input")
const form = document.getElementById("form")
const errorElement = document.getElementById("input-error")

form.addEventListener('submit', (e) => {
    let messages = []
    if (email.value === '' || email.value == null) {
      messages.push('please provide a valid email')
      
     errorElement.innerHTML = messages.join(", ")+"<img src=../images/icon-error.svg> "
     email.style.border = "red 2.2px solid"
    }
    e.preventDefault()
  })