const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');

let sunFlower = ["https://www.just-b-photography.com/wp-content/uploads/2023/09/Orange-yellow-sunflowers-2809-BP-1024x683.jpg",
                "https://dengarden.com/.image/w_750,q_auto:good,c_limit/MjAzMzUyNzQ0NzAxMDExNDM3/bright-sunflower-colors-to-add-to-your-garden.jpg?arena_f_auto",
                "https://hips.hearstapps.com/hmg-prod/images/procut-red-is-a-hybrid-variety-of-sunflower-that-royalty-free-image-1755012261.pjpeg?crop=0.906xw:0.681xh;0.0527xw,0.0664xh",
                "https://hips.hearstapps.com/hmg-prod/images/miniature-sunflower-italian-white-with-big-creamy-royalty-free-image-1755012301.pjpeg?crop=0.668xw:1.00xh;0.0731xw,0"];


img1.addEventListener('click', function() {
    img1.src = sunFlower[0];
});

img2.addEventListener('click', function() {
    img2.src = sunFlower[1];
});

img3.addEventListener('click', function() {
    img3.src = sunFlower[2];
});      

img4.addEventListener('click', function() {
    img4.src = sunFlower[3];
});


