




document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Curso Java!',
                start: '2023-07-07',
                end:'2023-08-10'
                
            },
            {
                title: 'Curso 2',
                start: '2023-07-03',
                end:'2023-08-10'
            }
        ]
    }); 

    calendar.render();

    let carrito=document.querySelector("#session");
sesionmostrar=sessionStorage.getItem("cantidad");
carrito.innerHTML=sesionmostrar;
  });

