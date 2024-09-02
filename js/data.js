window.addEventListener('load', function() {
    // Obtener el dato del localStorage
    const storedData = localStorage.getItem('storedData');
    
    // Mostrar el dato en el span
    document.getElementById('data').textContent = storedData ? storedData : 'No hay datos almacenados.';
});