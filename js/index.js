var scroll_to_about = document.getElementById("scroll_to_about");
var scroll_to_contact = document.getElementById("scroll_to_contact");
var scroll_to_top = document.getElementById("home");

var about = document.getElementById("about");
var contact = document.getElementById("contact");


scroll_to_about.onclick = () => {
    // scroll to about section when "about" button is clicked
    // this will scroll smoothly until the about section is centered to the screen
    about.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

scroll_to_contact.onclick = () => {
    // scroll to contact section when "contact" button is clicked
    // this will scroll smoothly until the contact section is centered to the screen
    contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

scroll_to_top.onclick = () => {
    // scroll to top the top when "BRAYDEN" text is clicked
    // this will scroll smoothly until the top of the screen is reached
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}