export class Fecha {

    static meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Noviembre',
        'Diciembre'
    ]

    static diasSemana = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sabado'
    ]

    static getMarcaTiempo(fecha) {
        let diaSemana = this.diasSemana[new Date(fecha).getDay()];
        let dd = new Date(fecha).getDate();
        let MM = this.meses[new Date(fecha).getMonth()];
        let yyyy = new Date(fecha).getFullYear();
        let hh = ('0' + new Date(fecha).getHours()).slice(-2);
        let mm = ('0' + new Date(fecha).getMinutes()).slice(-2);
        let ss = ('0' + new Date(fecha).getSeconds()).slice(-2);
    
        return `${diaSemana}, ${dd} de ${MM} de ${yyyy} a las ${hh}:${mm}:${ss}`;
    }

}

export let mensaje = 'Hola Mundo!';