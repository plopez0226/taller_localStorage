document.getElementById('buttonText').addEventListener('click', function() {
    // Obtener el valor del input
    const inputValue = document.getElementById('inputText').value;
    
    // Guardar el valor en localStorage
    localStorage.setItem('storedData', inputValue);
    
    // Limpiar el input después de guardar
    document.getElementById('inputText').value = '';
});