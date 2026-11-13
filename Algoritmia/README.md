# Algoritmia: ejercicios por semana

Este repositorio reúne ejercicios introductorios de algoritmia. Los archivos
`.psc` están escritos para PSeInt y los archivos `.js` usan las ventanas
`prompt` y `alert` del navegador (salvo la pirámide, que también se imprime en
la consola).

## Semana 1

### [Ejercicio 1: preparar limonada](./semana1/ejercicio1.psc)

Presenta los pasos para preparar una limonada en orden: usar un vaso limpio,
exprimir dos limones, añadir azúcar y agua, mezclar durante 30 segundos y
servir. Es un algoritmo secuencial: no solicita datos ni toma decisiones; cada
instrucción se ejecuta en el orden en que aparece.

### [Ejercicio 2: área de un rectángulo](./semana1/ejercicio2.psc)

Lee la base y la altura como números reales, multiplica ambos valores
(`área = base × altura`) y muestra el resultado. La lógica separa la entrada de
datos, el cálculo y la salida.

### [Ejercicio 3: verificar un número](./semana1/ejercicio3.psc)

Solicita un número real y lo compara con cero. Si es mayor, informa que es
positivo; si no, comprueba si es menor para clasificarlo como negativo. Si
ninguna comparación se cumple, el número es cero.

### [Ejercicio 4: calcular propina y dividir la cuenta](./semana1/ejercicio4.psc)

Solicita el total de la cuenta, el porcentaje de propina y la cantidad de
personas. Calcula la propina como `total × porcentaje / 100` y la suma al total
de la cuenta. Si hay más de cero personas, divide ese total entre ellas y
muestra el desglose; si no, informa que la cantidad de personas debe ser mayor
que cero.

## Semana 2

### [Ejercicio 1: reglas de descuento](./semana2/ejercicio1.psc)

Pregunta si el cliente es VIP y si tiene un cupón. Convierte cada respuesta
`S`/`s` en verdadero y cualquier otra respuesta en falso. Aplica una disyunción
lógica: el descuento corresponde si se cumple al menos una condición; solo se
rechaza cuando ninguna se cumple.

### [Ejercicio 2: validar acceso con De Morgan](./semana2/ejercicio2.psc)

Lee la edad y pregunta si hay autorización de los padres. El acceso se deniega
únicamente cuando la persona es menor de 18 años y no tiene autorización
(`edad < 18 Y NO tienePermiso`). En todos los demás casos se permite. Esta
condición expresa directamente la negación de la regla de autorización:
`edad >= 18 O (edad < 18 Y tienePermiso)`.

### [Ejercicio 3: tarifas del parqueadero](./semana2/ejercicio3.psc)

Solicita un tipo de vehículo y las horas estacionadas. Una selección por casos
calcula el costo: automóvil, `horas × 2000`; moto, `horas × 1000`; bicicleta,
cero. Si el tipo ingresado no es 1, 2 o 3, muestra un error de opción no
válida.

### [Ejercicio 4: semáforo de inventario](./semana2/ejercicio4.psc)

Clasifica el stock ingresado mediante condiciones encadenadas:

- `stock <= 0`: crítico, sin existencias.
- `1 <= stock <= 10`: bajo.
- `11 <= stock < 50`: medio.
- `stock >= 50`: óptimo.

El orden de las comparaciones garantiza que cada cantidad se asigna a una sola
categoría, incluidos los valores límite 0, 10 y 50.

### [Ejercicio 4.2: año bisiesto](./semana2/ejercio4.2.psc)

Lee un año y aplica la regla del calendario gregoriano. Es bisiesto si es
divisible por 4 y no por 100, o si es divisible por 400. Por eso los años de
siglo no son bisiestos salvo que también sean divisibles por 400. El nombre del
archivo está escrito `ejercio4.2.psc` en la carpeta.

## Semana 3

### [Ejercicio 1: simular un cajero](./semana3/ejercicio1.js)

Solicita retiros repetidamente mientras el monto ingresado sea mayor que cero.
En cada vuelta suma el monto al acumulado y aumenta el contador de retiros.
Cuando se ingresa cero o un valor negativo, termina el ciclo y muestra el total
retirado y la cantidad de transacciones. El primer monto se solicita antes del
ciclo y los siguientes al final de cada vuelta.

### [Ejercicio 2: analizar calificaciones](./semana3/ejercicio2.js)

Primero solicita cuántas calificaciones se ingresarán. Si el dato no es un
entero interpretable o no es mayor que cero, muestra un mensaje y termina.
Luego guarda las notas en una lista y recorre esa lista para calcular la suma,
la nota mayor, la menor y cuántos estudiantes aprobaron. Se considera aprobado
quien tiene una nota de al menos 3.0. Finalmente calcula el promedio y muestra
los resultados, formateando el promedio con dos decimales. El programa no
valida que cada nota esté dentro de un rango específico.

### [Ejercicio 3: generar una pirámide de asteriscos](./semana3/ejercicio3.js)

Solicita la cantidad de pisos y termina con un mensaje si no es un entero
válido o no es positivo. Para cada fila `i`, desde 1 hasta el número de pisos,
construye primero `pisos - i` espacios y luego `2 × i - 1` asteriscos. Así las
filas aumentan de ancho de forma impar y forman una pirámide centrada. Junta
todas las filas, las imprime en la consola y avisa que se deben revisar las
herramientas de desarrollador del navegador.

### [Ejercicio 4: calcular una factura de consumo](./semana3/ejercicio4.js)

Permite agregar productos mientras la respuesta sea `si` o `s`. Para cada uno
solicita nombre, precio y cantidad, y lo guarda en una lista. Después, los
subprocesos calculan el subtotal sumando `precio × cantidad` de cada producto,
el impuesto (8 %) y la propina sugerida (10 %), ambos sobre el subtotal. El
total final es la suma del subtotal, el impuesto y la propina, y se muestra con
su desglose. No se validan los valores numéricos ingresados para precio y
cantidad.