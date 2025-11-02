document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtención de Elementos del DOM
    const formulario = document.getElementById('formulario');
    const emailInput = document.getElementById('email_usuario');
    const thanksDialog = document.getElementById('thanks');
    const dismissButton = document.getElementById('cerrar');
    
    const emailDisplay = document.querySelector('#thanks p strong'); 

    // 2. Manejo del Envío del Formulario (Abre el Diálogo y establece display: flex)
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const email = emailInput.value.trim();

        // [Opcional: Mostrar email]
        if (emailDisplay && email) {
            emailDisplay.textContent = email;
        } else {
            emailDisplay.textContent = 'la dirección proporcionada'; 
        }

        
        thanksDialog.showModal(); 
        formulario.reset(); 
    });

    // 3. Manejo del Cierre del Diálogo (Solo llama a close() y quita el estilo flex)
    dismissButton.addEventListener('click', () => {
        // Cierra el modal de agradecimiento (Manejado por el navegador)
        thanksDialog.close();
        
        // ----------------------------------------
        // CORRECCIÓN CLAVE: Resetea el estilo 'display' a una cadena vacía 
        // para que no interfiera si el modal se abre de nuevo.
        // **Es crucial no establecerlo a 'none'**.
        thanksDialog.style.display = ''; 
        // ----------------------------------------
    });
});