body {
    font-family: Arial, sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

nav a {
    margin-right: 20px;
    text-decoration: none;
    color: black;
}

#logo {
    width: 100px; /* Adjust as per actual logo size */
}

#contact-form {
    width: 50%;
    float: left;
}

#listing-details {
    width: 50%;
    float: right;
}

form {
    margin: 20px;
}

input, textarea {
    display: block;
    margin-bottom: 10px;
    width: 95%;
    padding: 5px;
}

button {
    padding: 10px 15px;
    background-color: #ff9900;
    border: none;
    color: white;
    cursor: pointer;
}

.price-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.deal {
    background-color: green;
    color: white;
    padding: 5px;
}

.property-info {
    background-color: #f0f0f0;
    padding: 10px;
    margin-top: 20px;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}