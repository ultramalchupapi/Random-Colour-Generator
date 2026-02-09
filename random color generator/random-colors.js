const colorContainer = document.querySelector('.colors-container');

function generatePallete(){
    let colors = [];
    
    for(let i = 0; i<4; i++){
        colors.push(newColor());
    }
    
    console.log(colors);

    updateUI(colors);

}

colorContainer.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fa-copy')){
        const hexValue = e.target.previousElementSibling.textContent;
        navigator.clipboard.writeText(hexValue).then(()=>{
            e.target.classList.add('fa-check')
            e.target.classList.remove('fa-copy');

            setTimeout(() =>{
                e.target.classList.add('fa-copy')
                e.target.classList.remove('fa-check');
            }, 1500);   
        });
    }
})

function newColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';

    for(let index = 0; index<6; index++){
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color;
}

function updateUI(colors){
    const colorBox = document.querySelectorAll('.color-box');

    colorBox.forEach((box, index)=>{
        const colorDiv = box.querySelector('.color');
        const hexValue = box.querySelector('.hex-value');

        colorDiv.style.backgroundColor = colors[index];
        hexValue.textContent = colors[index];
    })
}

generatePallete();



