document.getElementById('btnGenerar').addEventListener('click', () => {
    // Ejemplo simple: Asignar "Juan" a todos los días
    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    dias.forEach(dia => {
        document.getElementById(dia).textContent = 'Guardia: Juan';
    });
});
