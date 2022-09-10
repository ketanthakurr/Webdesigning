function Do(i) {
    let elm = document.getElementById('.courses');
    for(let j = 0; l < elm; j++){
        elm[j].style.display = "none" ;
    }
    elm[i].style.display = "block";
}

function Do2(){
    let strs = [
        "This is the courses we provides to our students in BMU and in future we are going to add some of the new courses"
    ]
    let elms = document.querySelector(".desc");
    elms.innerHTML = strs[0];
}