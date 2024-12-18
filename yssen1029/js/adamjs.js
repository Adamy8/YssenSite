document.getElementById("email-form").addEventListener("submit", (event) => { sendEmail(event); });

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    var firstName = document.getElementById("First-Name-2").value;
    var lastName = document.getElementById("Last-Name-2").value;
    var email = document.getElementById("Email-2_adam").value;
    var company = document.getElementById("Firm-Name_adam").value;
    var cargoDesc = document.getElementById("Description_adam").value;  // Assuming there's only one cargo description input
    var size = document.getElementById("Size_adam").value;  // Assuming the input ID is the same for packing size and cargo description
    var number = document.getElementById("Num_adam").value;  // Number of packages
    var cubicMetre = document.getElementById("CBM_adam").value;  // Cubic meter
    var portLoading = document.getElementById("Loading_adam").value;  // Port of loading
    var portDischarge = document.getElementById("Discharge_adam").value;  // Port of discharge
    var comment = document.getElementById("Comment_adam").value;  // Requirement comment

    // Prepare the mailto link
    var subject = "Shipping Quote Request (Auto Mail)";
    var body = 
    `Shipping Quote Request Details:
    
    Name: ${firstName} ${lastName}
    Email: ${email}
    Company: ${company}
    
    Cargo Information:
        Description: ${cargoDesc}
        Size: ${size}
        Number of Packages: ${number}
        Cubic Metre: ${cubicMetre}
    
    Shipping Details:
        Port of Loading: ${portLoading}
        Port of Discharge: ${portDischarge}
    
    Additional Comments:
        ${comment}`;

    // Open the default email client
    window.location.href = "mailto:Helen.Z@yssentc.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

