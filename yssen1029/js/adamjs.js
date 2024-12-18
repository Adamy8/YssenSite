document.getElementById("email-form").addEventListener("submit", (event) => { sendEmail(event); });

function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    var firstName = document.getElementById("First-Name-2").value;
    var lastName = document.getElementById("Last-Name-2").value;
    var email = document.getElementById("Shipping-Form-3").value;
    var company = document.getElementById("Phone-2").value;
    var cargoDesc = document.getElementById("Shipping-Form-2").value;  // Assuming there's only one cargo description input
    var size = document.getElementById("Shipping-Form-2").value;  // Assuming the input ID is the same for packing size and cargo description
    var number = document.getElementById("Shipping-Form-2").value;  // Number of packages
    var cubicMetre = document.getElementById("Shipping-Form-2").value;  // Cubic meter
    var portLoading = document.getElementById("Shipping-Form-2").value;  // Port of loading
    var portDischarge = document.getElementById("Shipping-Form-2").value;  // Port of discharge
    var comment = document.getElementById("Shipping-Form-2").value;  // Requirement comment

    // Prepare the mailto link
    var subject = "Shipping Quote Request(auto mail)";
    var body = "Name: " + firstName + " " + lastName + "\n" +
                "Email: " + email + "\n" +
                "Company: " + company + "\n" +
                "Cargo Description: " + cargoDesc + "\n" +
                "Size: " + size + "\n" +
                "Number of Packages: " + number + "\n" +
                "Cubic Metre: " + cubicMetre + "\n" +
                "Port of Loading: " + portLoading + "\n" +
                "Port of Discharge: " + portDischarge + "\n" +
                "Comments: " + comment;

    // Open the default email client
    window.location.href = "mailto:Helen.Z@yssentc.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

