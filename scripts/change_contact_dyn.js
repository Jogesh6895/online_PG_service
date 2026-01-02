/*
created on: 12th March, 2023
author: Jogesh Ghadai (jogesh.6895@gmail.com)
*/


let contact_map = document.getElementsByClassName("contact_map")[0];
let contact_email = document.getElementsByClassName("contact_email")[0];
let contact_phone = document.getElementsByClassName("contact_phone")[0];
let contact_clock = document.getElementsByClassName("contact_clock")[0];

function toggle_map_img(){
    if (contact_map.src.endsWith('.png')) {
        contact_map.src = "./images/map.gif";
    }
    else {
        contact_map.src = "./images/static_map.png";
    }
}

function toggle_email_img(){
    if (contact_email.src.endsWith('.png')) {
        contact_email.src = "./images/email.gif";
    }
    else {
        contact_email.src = "./images/static_email.png";
    }
}

function toggle_phone_img(){
    if (contact_phone.src.endsWith('.png')) {
        contact_phone.src = "./images/phone.gif";
    }
    else {
        contact_phone.src = "./images/static_phone.png";
    }
}

function toggle_clock_img(){
    if (contact_clock.src.endsWith('.png')) {
        contact_clock.src = "./images/clock.gif";
    }
    else {
        contact_clock.src = "./images/static_clock.png";
    }
}

contact_map.addEventListener('mouseover', toggle_map_img);
contact_map.addEventListener('mouseout', toggle_map_img);

contact_email.addEventListener('mouseover', toggle_email_img);
contact_email.addEventListener('mouseout', toggle_email_img);

contact_phone.addEventListener('mouseover', toggle_phone_img);
contact_phone.addEventListener('mouseout', toggle_phone_img);

contact_clock.addEventListener('mouseover', toggle_clock_img);
contact_clock.addEventListener('mouseout', toggle_clock_img);