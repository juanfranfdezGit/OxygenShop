export default function newsletter() {
    const back = document.getElementById("newsletterBack");
    const newsletter = document.getElementById("newsletter");
    const closeButton = document.getElementById("closeButton");
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterSubmit = document.getElementById("newsletterSubmit");
    const successfullMessage = document.getElementById("successfullMessage");
    const newsletterEmail = document.getElementById("newsletterEmail");
    const newsletterEmailError = document.getElementById("newsletterEmailError");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let status = true;

    setTimeout(() => {
        if (status === true) {
            back.style.display = "flex";
            newsletter.style.display = "flex";
            document.body.style = "overflow: hidden";
        }
    }, "5000");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / windowHeight) * 100;

        if ( status === true && scrollPercent > 25) {
            back.style.display = "flex";
            newsletter.style.display = "flex";
            document.body.style = "overflow: hidden";
        }
    })

    closeButton.addEventListener("click", () => {
        back.style.display = "none";
        newsletter.style.display = "none";
        document.body.style = "overflowY: scroll";

        status = false;
    })

    back.addEventListener("click", () => {
        back.style.display = "none";
        newsletter.style.display = "none";
        document.body.style = "overflowY: scroll";

        status = false;
    })

    newsletterSubmit.addEventListener("click", (e) => {
        e.preventDefault();

        let emailValue = newsletterEmail.value;

        if (emailPattern.test(emailValue))  {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    email: emailValue,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                document.getElementById("newsletterEmail").value = ""; 
                successfullMessage.style.display = "flex";
                newsletterForm.style.display = "none";
            })
            .catch((error) => {
                console.error("Error al enviar el formulario:", error);
            });
        } else if (!emailPattern.test(emailValue)) {
            newsletterEmailError.style.display = "flex";
        }
    })

    newsletterEmail.addEventListener("change", () => {
        if (!emailPattern.test(newsletterEmail.value)) {
            newsletterEmailError.style.display = "block";
        } else {
            newsletterEmailError.style.display = "none";
        }
    })

    
}