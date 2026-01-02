/*
created on: 12th March, 2023
author: Jogesh Ghadai (jogesh.6895@gmail.com)
*/


let about_us_img = document.getElementsByClassName("about_us_img")[0];

function toggle_about_us_img(){
    if (about_us_img.src.endsWith('1.png')) {
        about_us_img.src = "./images/AboutUs_2.png";
        about_us_img.style = "border-radius: 20px; width: 660px; height:380px;";
    }
    else {
        about_us_img.src = "./images/AboutUs_1.png";
        about_us_img.style = "border-radius: 25px; width: 660px; height:380px;";
    }
}

about_us_img.addEventListener('mouseover', toggle_about_us_img);
about_us_img.addEventListener('mouseout', toggle_about_us_img);