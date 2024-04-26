
const users = [
    {
        email: "e1001@cuchd.in",
        password: "admin1",
    },
    {
        email: "e1002@cuchd.in",
        password: "admin2",
    },
    {
        email: "e1003@cuchd.in",
        password: "admin3",
    },
    {
        email: "e1004@cuchd.in",
        password: "admin4",
    },
    {
        email: "e1005@cuchd.in",
        password: "admin5",
    },
    
  ];
  
  function validateLogin(email, password) {
    for (let user of users) {
        if (user.email === email && user.password === password) {
            return true;
        }
    }
    return false;
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
  
    if (validateLogin(email, password)) {
        // Redirect to another page upon successful login
        window.location.href = "dashboarda.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
  }
  
  document.querySelector('button').addEventListener("click", handleSubmit);
  