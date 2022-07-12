let counter = 0;
const num = document.getElementById('percentNum');
setInterval( () => {
    if( counter != 85){
        counter++;
        num.innerHTML = `${counter}<span>%</span>`
    }
}, 2000/85)