// user can select grid size
// user can select color 
function makeGrid() {
    var table = document.getElementById('TableID');

    // get input from height and store it in rows
    var rows = document.getElementById('HeightID').value;
    // get width from width and store it columns
    var columns = document.getElementById('WidthID').value;

    var tableDraw = '';   // js script will loop and save data in tableDraw

    for(var count1 = 0; count1 < rows ; count1++){
        tableDraw+='<tr>';  // loop open tr tag

        for(var count2 = 0; count2 < columns ; count2++){
            tableDraw+='<td></td>';     // loop columns td tag

        }
        tableDraw+='</tr>';     // loop close tr tag
    }
    table.innerHTML=tableDraw;
    colorPicker();
}
function colorPicker(){
    var tds = document.getElementsByTagName('td');
    for (var i = 0 ; i < tds.length ; i++){
        tds[i].addEventListener("click",function (clicker) // clicker receive <td> info
        {
            var clickerID = clicker.target;
            clickerID.style.backgroundColor = document.getElementById('ColorID').value;
        })
    }
}
