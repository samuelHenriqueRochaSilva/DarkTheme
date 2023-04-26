function mudarTema(){
    document.body.classList.toggle('dark-theme')

var className = document.body.className;
if(className == "light-theme"){
    document.getElementById('dark').innerText = 'for Dark';
}
else{
    document.getElementById('dark').innerText = 'for Light';
}
}