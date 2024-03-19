const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    horas.textContent = hora;
    minutos.textContent = minuto;
   segundos.textContent = segundo;


   if (hr < 10) hr = '0' + hr;

   if (min < 10) min = '0' + min;

   if (s < 10) s = '0' + s;

   horas.textContent = hora;
   minutos.textContent = minuto;
   segundos.textContent = segundo;
   

})