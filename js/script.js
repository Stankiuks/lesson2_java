var auto = [
    ['ZBG 123', 98450, 3645],
    ['ABC 345', 1500, 91],
    ['LRS 222', 49506, 3250],
    ['LRS 222',  985622,  7551]
];

var headerAuto = ['Valstybiniai numeriai', 'Nuvaziuotas atstumas, km', 'Sugaistas laikas, h', 'Vidutinis greitis, km/h'];

//Kvieciame funkcija kuri atspausdins lentele
createTable(auto, headerAuto);

//Lenteles sukurimas
function createTable(auto, headerAuto){
    var text = '';

    text += '<table border="2">';
        text += '<thead>';
            text += '<tr>';
                for(var i =0; i<headerAuto.length; i++){
                    text += '<td>' + headerAuto[i] + '</td>';

                }
            text += '</tr>';
        text += '</thead>';
        text += '<tbody>';
            for(var i=0; i < auto.length; i++){
                text += '<tr>';
                    var greitis, laikas;
                    for (var j = 0; j < auto[i].length; j++){
                        text += '<td>' + auto [i][j] + '</td>';
                        switch (j){
                            case 1:
                                atstumas = auto [i][j]/1000;
                                break;
                            case 2:
                                laikas = auto [i][j]/3600;
                                break;
                        }
                    }
                    text += '<td>' + (atstumas / laikas).toFixed(0) + '</td>';
                text += '</tr>'

            }
        text += '</tbody>';
    text += '</table>';

    document.querySelector('.table').innerHTML = text;
}