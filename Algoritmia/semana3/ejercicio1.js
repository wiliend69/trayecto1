function simularCajero() {
    let totalRetirado = 0; // Acumulador
    let cantidadRetiros = 0; // Contador
    
    // Pedimos el primer valor antes de entrar al ciclo
    let monto = parseFloat(prompt("Ingrese el monto a retirar (O digite 0 para terminar):"));

    // El ciclo continúa mientras el usuario ingrese un monto mayor a 0
    while (monto > 0) {
        totalRetirado += monto; // Acumulamos el dinero
        cantidadRetiros++;      // Contamos la transacción
        
        // Volvemos a pedir el valor dentro del ciclo para la siguiente iteración
        monto = parseFloat(prompt(`Monto acumulado: $${totalRetirado}.\nIngrese el siguiente monto (O digite 0 para terminar):`));
    }

    // Al salir del ciclo, mostramos los resultados
    alert(`--- RESUMEN DEL CAJERO ---\nTotal retirado: $${totalRetirado}\nCantidad de retiros: ${cantidadRetiros}`);
}

simularCajero();
