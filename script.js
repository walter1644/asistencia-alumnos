const alumnos = [];

function obtenerCampo(id) {
    return document.getElementById(id).value;
}

function camposCompletos() {
    return obtenerCampo('alumno') && obtenerCampo('numero') &&
    obtenerCampo('fecha') && obtenerCampo('valor');
}

function registrar() {
    if (!camposCompletos()) {
        alert('Completá todos los campos');
        return;
    }

    alumnos.push({
        nombre: obtenerCampo('alumno'),
        numero: obtenerCampo('numero'),
        fecha: obtenerCampo('fecha'),
        valor: obtenerCampo('valor')
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
        ['N°', 'Nombre', 'Numero', 'Fecha', 'Valor'],
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