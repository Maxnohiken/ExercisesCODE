const ImgOne=document.getElementById('Img1')
const ImgTwo=document.getElementById('Img2')

function scambiaImmagini() {
    const ImgOne = document.getElementById('Img1');
    const ImgTwo = document.getElementById('Img2');

    if (ImgOne.style.display === 'none') {
        ImgOne.style.display = 'inline';
        ImgTwo.style.display = 'none';
    } else {
        ImgOne.style.display = 'none';
        ImgTwo.style.display = 'inline';
    }
}

ImgOne.addEventListener('mouseenter', ChangeImg1)
ImgTwo.addEventListener('mouseenter', ChangeImg2)