const select = document.getElementById("stateSelect");
const flag = document.getElementById("flagImg");


select.addEventListener("change", function () {
    if (select.value === "") {
        flag.src = "https://th.bing.com/th/id/R.7a27a7f2340bcf1fb8b5f559ed590967?rik=fprBkrTiPuqGhA&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f68%2f26%2fZ51hLn.jpg&ehk=Q%2fnWbEXFvhKBOUvW8JfRQENfenHraym%2fyTQi8Ea2EcI%3d&risl=&pid=ImgRaw&r=0";
    }
    if(select.value === "washington") {
        flag.src = "https://tse1.mm.bing.net/th/id/OIP.8vDQ-ETsyyFa5-wJzsYgZgHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3.png";
    }
    if(select.value === "texas") {
        flag.src = "https://www.libertyflagpoles.com/cdn/shop/products/texas-flag.jpg?v=1747269924&width=700";
    }
    if(select.value === "california") {
        flag.src ="https://www.libertyflagpoles.com/cdn/shop/products/california-state-flag.jpg?v=1752197082&width=500";
    }   
    if(select.value === "florida") {
        flag.src = "https://tse4.mm.bing.net/th/id/OIP.p1bNd5qWiYC-uewoNizrOwHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3.png";
    }
})