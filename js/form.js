export default function sendForm() {
    let sendForm = document.getElementsByClassName("form__form__button")[0];
    let emailForm = document.getElementById("email");
    let nameForm = document.getElementById("name");
    let checkbox = document.getElementById("policy");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const namePattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,100}$/;

    sendForm.addEventListener("click", (e) => {
        e.preventDefault();
    
        let emailValue = emailForm.value;
        let nameValue = nameForm.value;
    
        if (emailPattern.test(emailValue) && namePattern.test(nameValue) && checkbox.checked)  {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    name: nameValue,
                    email: emailValue,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                document.getElementById("email").value = ""; 
                document.getElementById("name").value = ""; 
                checkbox.checked = false;
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
            });
        } else {
            if (!emailPattern.test(emailValue)) {
                document.getElementById("emailError").style.display = "block";
            }

            if (!namePattern.test(nameValue)) {
                document.getElementById("nameError").style.display = "block";
            }

            if (!checkbox.checked) {
                checkbox.style.border = "1px solid red";
            }
        }
    })    

    emailForm.addEventListener("change", () => {
        if (!emailPattern.test(emailForm.value)) {
            document.getElementById("emailError").style.display = "block";
        } else {
            document.getElementById("emailError").style.display = "none";
        }
    })

    nameForm.addEventListener("change", () => {
        if (!namePattern.test(nameForm.value)) {
            document.getElementById("nameError").style.display = "block";
        } else {
            document.getElementById("nameError").style.display = "none";
        }
    })

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            checkbox.style.border = "1px solid grey";
        } else {
            checkbox.style.border = "1px solid red";
        }
    });
}




