const alumnos = [];

function obtenerNumero() {
    return document.getElementById('numero').value;
}

function obtenerFecha() {
    return document.getElementById('fecha').value;
}

function obtenerValor() {
    return document.getElementById('valor').value;
}

function camposCompletos() {
    return obtenerNumero() && obtenerFecha() && obtenerValor() && 
           document.getElementById('alumno').value;
}

function registrar() {
    if (!camposCompletos()) {
        alert('Completá todos los campos');
        return;
    }

    alumnos.push({
        nombre: document.getElementById('alumno').value,
        numero: obtenerNumero(),
        fecha: obtenerFecha(),
        valor: obtenerValor()
    });

    limpiarCampos();
}

function limpiarCampos() {
    document.getElementById('alumno').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('valor').value = '';
}

function descargarCSV() {
    const filas = [
        ['#', 'Nombre', 'Numero', 'Fecha', 'Valor'],
        ...alumnos.map((a, i) => [i + 1, a.nombre, a.numero, a.fecha, a.valor])
    ];

    const csv = filas.map(f => f.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'asistencia.csv';
    a.click();
    URL.revokeObjectURL(url);
}