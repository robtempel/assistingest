 const master = []
const tareas = []
const tareasInicioCRUDOS = []
const tareasInicioFTP = []
const prioridades = []
const db1 = []
const db2 = []
const arrayInforme = []
const elementodeanalisis = []
const informeenunarray = []
const notasDetalladas = []
const dur = []
const dur2 = []
const durF = []
const durF2 = []
const textoNotas = []
const arrayContFTP1 = []
const nombresArchivosInicio = []
const nombresArchivosLimpios = [""]
const nombresArchivosImperfectos = []
const contenidoFTP = []
const lineasInfArch = []
const lineasInfArch2 = []
const elementosFTP = []
const duracionesFTP = []
const infoInputFiles = []
const myVideos = [];
const consolidacionNA = [];
const arrayPT = []
const durPT = []
const arrayST = []
const durST = []
const arrayPost = []
const durPost = []
const durPostTemp = []
const dur2PostTemp = []
const durPreviaTemp = []
const dur2PreviaTemp = []
const items10 = ["","","","","","","","","","",]
const lineasInformePost = []
const lineasInformePrevia = []
const durPTtemp = []
const dur2PTtemp = []
const durSTtemp = []
const dur2STtemp = []
const temporalborrar = []
const arrayPrevia = []
const muxvacio = []
const multiuso1 = []
const multiuso2 = []
const multiuso3 = []
const multiuso4 = []
const multiuso5 = []
const multiuso6 = []
const multiuso7 = []
const multiuso8 = []
const multiuso9 = []
const multiuso10 = []
const multiuso11 = []
const multiuso12 = []
const multiuso13 = []
const multiuso14 = []
const multiuso15 = []
const multiuso16 = []
const multiuso17 = []
const multiuso18 = []
const multiuso19 = []
const multiuso20 = []

class Crudos{
    constructor (match, categoria, prioridad, clase, identificador, status, unidad){
        this.match = match
        this.categoria = categoria
        this.prioridad = prioridad
        this.clase = clase
        this.identificador = identificador
        this.status = status
        this.unidad = unidad
    }
}

class FTP{
    constructor (origen, match, prioridad, clase, identificador, status, unidad, contenidoB){
        this.origen = origen
        this.match = match
        this.prioridad = prioridad
        this.clase = clase
        this.identificador = identificador
        this.status = status
        this.unidad = unidad
        this.contenidoB = contenidoB
    }
}

class Arch{
    constructor (nombre, duracion){
        this.nombre = nombre
        this.duracion = duracion
    }
}

class Detalles{
    constructor(nombre, duracion){
        this.nombre = nombre
        this.duracion = duracion
    }
}

class MuxIND {
    constructor(identificador, nombre, duracion){
        this.identificador = identificador
        this.nombre = nombre
        this.duracion = duracion
    }
}

/*
tareasInicioCRUDOS.push(new Crudos("VELEZ VS SAN LORENZO", "LPF", parseInt("2"), "CRUDOS", randongen(), "virgo", ""));
tareasInicioCRUDOS.push(new Crudos("GIMNASIA LP VS RAFAELA", "LPF", parseInt("5"), "CRUDOS", randongen(), "virgo", ""));
tareasInicioCRUDOS.push(new Crudos("SACACHISPAS VS CEBOLLITAS", "INFANTIL", parseInt("8"), "CRUDOS", randongen(), "virgo", ""));
tareasInicioCRUDOS.push(new Crudos("FERRO VS ALMAGRO", "ASCENSO", parseInt("3"), "CRUDOS", randongen(), "virgo", ""));
tareasInicioCRUDOS.push(new Crudos("ROBOCOP VS TERMINATOR", "C. FICCION", parseInt("7"), "CRUDOS", randongen(), "virgo", ""));


tareasInicioFTP.push(new FTP("SNTV", "ARCHIVOS A DEFINIR", parseInt("2"), "FTP", randongen(), "virgo", "", ""));
tareasInicioFTP.push(new FTP("YOUTUBE", "ARCHIVOS A DEFINIR", parseInt("3"), "FTP", randongen(), "virgo", "", ""));
tareasInicioFTP.push(new FTP("WHATSAPP", "ARCHIVOS A DEFINIR", parseInt("2"), "FTP", randongen(), "virgo", "", ""));
tareasInicioFTP.push(new FTP("WE TRANSFER", "ARCHIVOS A DEFINIR", parseInt("4"), "FTP", randongen(), "virgo", "", ""));


ingresarDB1(tareasInicioCRUDOS);
ingresarDB2(tareasInicioFTP);

db1[0].color = "X19"
db1[0].previa = "X15"
db1[0].camara = "LALO LANDA F10"
db1[0].primerT = "4847"
db1[0].entreT = "X2"
db1[0].segundoT = "5048"
db1[0].alargue = ""
db1[0].penales = ""
db1[0].notas = "RIVAROLA / VELEZ VS SAN LORENZO \n \nGrabación ok desde campo + notas a Thiago Almada, Federico Mancuello y Lucas Hoyos."
db1[0].post = "X2"
db1[0].status = "virgo"
db1[0].unidad = ""
const nombresN = []


db1[0].notasDetalladas = ""
db1[0].reduccion = "0"
const dur0 = []
dur0.push("123")
dur0.push("121")
dur0.push("142")



print();

*/

function ingresarDB1(a){

    const nuevoOrden = []
    const valor = []
    for(let nuevoevento of a){
        db1.push(nuevoevento)
    }

   for(let pack of db1){
        valor.push(pack.prioridad)
    }

    valor.sort((a,b) => a-b);
  
    let result = valor.filter((item,index) => {
        return valor.indexOf(item) === index;
    })

    for(let number of result){
        for(let name of db1){
            if(name.prioridad == number){
                nuevoOrden.push(name)
            }
        }
    }

    db1.splice(0,db1.length)

    for(let tare of nuevoOrden){
        db1.push(tare)
    }

    for( i = 0 ; i <= db1.length-1; i++ ){
        var e = i.toString();
        db1[i].colclase = "colcru"
        db1[i].id = e
    }
}

function ingresarDB2(a){

    const nuevoOrden = []
    const valor = []
    for(let nuevoevento of a){
        db2.push(nuevoevento)
    }

   for(let pack of db2){
        valor.push(pack.prioridad)
    }

    valor.sort((a,b) => a-b);
  
    let result = valor.filter((item,index) => {
        return valor.indexOf(item) === index;
    })

    for(let number of result){
        for(let name of db2){
            if(name.prioridad == number){
                nuevoOrden.push(name)
            }
        }
    }

    db2.splice(0,db2.length)

    for(let tare of nuevoOrden){
        db2.push(tare)
    }

    for( i = 0 ; i <= db2.length-1; i++ ){
        f = i+100
        var e = f.toString();
        db2[i].colclase = "colftp"
        db2[i].id = e
    }

}

document.getElementById("agregarfutbol").addEventListener("click", () => {

    acotaciones = document.getElementById("acotaciones")
    acotaciones.innerHTML = `
    <div id="formNC" class="formNC">
        <input id="ingresoIniC1" type="text" class="ingresoIniC" placeholder="Nombre del evento"><br>
        <input id="ingresoIniC2"type="text" class="ingresoIniC" placeholder="Categoria"><br>
        <input id="ingresoIniC3"type="text" class="ingresoIniC" placeholder="Prioridad"><br>
        <input id="ingresoIniC4"type="button" class="ingresoIniCboton" value="Aceptar">
    </div>
    `
    ingresoCrudos = document.getElementById("ingresoIniC4").addEventListener("click", () => {

        var partido = document.getElementById("ingresoIniC1").value
        var cate = document.getElementById("ingresoIniC2").value
        var urg = document.getElementById("ingresoIniC3").value
        
        var encuentro = partido.toUpperCase()
        var cat = cate.toUpperCase();
    
        if(urg >= 0 || urg < 1000000){
            }else{
                urg = 9999999
        }
    
        if(encuentro.includes("BOCA")&&cat.includes("LPF")){
            urg = 2
        }
    
        if(encuentro.includes("BOCA") && encuentro.includes("RIVER") && cat.includes("LPF")){
            urg = 1
        }
    
        if(encuentro.includes("RIVER")&&cat.includes("LPF")){
            urg = 2
        }
    
        const temporal = []
        temporal.splice(0,temporal.length)
    
        temporal.push(new Crudos(encuentro, cat, urg, "CRUDOS", randongen(), "virgo", ""));

    
        ingresarDB1(temporal)
    
        print();

        acotaciones.innerHTML = ``



    })


});

document.getElementById("agregarftp").addEventListener("click", () => {


    acotaciones = document.getElementById("acotaciones")
    acotaciones.innerHTML = `
    <div id="formNF" class="formNF">
        <input id="ingresoIniF1" type="text" class="ingresoIniF" placeholder="Red Social / Origen"><br>
        <input id="ingresoIniF2"type="text" class="ingresoIniF" placeholder="Prioridad"><br>
        <input id="ingresoIniC4"type="button" class="ingresoIniCboton" value="Aceptar">
    </div>
    `
    ingresoCrudos = document.getElementById("ingresoIniC4").addEventListener("click", () => {


        var origen = document.getElementById("ingresoIniF1").value;
        var origen = origen.toUpperCase();
    
        var valor = document.getElementById("ingresoIniF2").value;

        if(valor >= 0 || valor < 1000000){
            }else{
            valor = 9999999
        }
    
        const temporal = []
        temporal.splice(0,temporal.length)
    
        temporal.push(new FTP(origen, "ARCHIVOS A DEFINIR", valor, "FTP", randongen(), "virgo", "", ""))
    
        ingresarDB2(temporal);
    
        print();

        acotaciones.innerHTML = ``

    });


});

document.getElementById("borrar").addEventListener("click", () => {

    master.splice(0,1);

    for( i = 0 ; i <= db1.length-1; i++ ){
        var e = i.toString();
        db1[i].id = e
    }

    db1.splice(0,db1.length)
    db2.splice(0,db2.length)

    for(let items of master){
        id = parseInt(items.id)
        if(id >= 0  && id < 100){
            db1.push(items)
        }else{
            if(id >= 100 && id < 200){
                db2.push(items)
            }
        }
    }

    print();

});

document.getElementById("borrarm").addEventListener("click", () => {
    var cualborrar = prompt("POSICION DEL EVENTO A SUPRIMIR");
    cualborrar = parseInt(cualborrar);

    if(cualborrar > 0){
        }else{
            cualborrar = 1000000
    }

    var confirmacion1 = prompt(`¿BORRAR EL ELEMENTO Nº ${cualborrar}? S/N`);

    confirmacion1 = confirmacion1.toUpperCase();

    if(confirmacion1 == "S"){
        var confirmacion2 = prompt("NO SE PODRA RECUPERAR. ¿DESEA BORRARLO DEFINITIVAMENTE? S/N");
    }

    confirmacion2 = confirmacion2.toUpperCase()

    if(confirmacion1.length < 1){
        confirmacion1 = "-"
    }
    if(confirmacion2.length < 1){
        confirmacion1 = "-"
    }

    if(confirmacion1 == "S" && confirmacion2 == "S"){
        master.splice(cualborrar-1,1);

        db1.splice(0,db1.length)
        db2.splice(0,db2.length)
    
        for(let items of master){
            id = parseInt(items.id)
            if(id >= 0  && id < 100){
                db1.push(items)
            }else{
                if(id >= 100 && id < 200){
                    db2.push(items)
                }
            }
        }
    }

    print();

})

function print(){

    gendb2unif()

    const temporal = []
    const valor = []

    for( i = 0 ; i <= db1.length-1; i++ ){
        db1[i].id = i.toString() 
    }

    for( i = 0 ; i <= db2.length-1; i++ ){
        db2[i].id = (i+100).toString() 
    }

    master.splice(0,master.length)
    temporal.splice(0,temporal.length)

    for(let items of db1){
        temporal.push(items)
    }

    for(let items of db2){
        temporal.push(items)
    }

   for(let items of temporal){
        valor.push(items.prioridad)
    }

    valor.sort((a,b) => a-b);
  
    let result = valor.filter((item,index) => {
        return valor.indexOf(item) === index;
    })

    master.splice(0,master.length)

    for(let number of result){
        for(let items of temporal){
            if(items.prioridad == number){
                master.push(items)
            }
        }
    }

    db1.splice(0,db1.length)
    db2.splice(0,db2.length)

    for(let items of master){
        id = parseInt(items.id)
        if(id >= 0  && id < 100){
            db1.push(items)
        }else{
            if(id >= 100 && id < 200){
                db2.push(items)
            }
        }
    }

    for( i = 0 ; i <= master.length-1; i++ ){
        master[i].abs = (i+1).toString();
        if(master[i].clase == "CRUDOS"){
            master[i].cota = master[i].categoria
        }else{
            if(master[i].clase == "FTP"){
                master[i].cota = master[i].origen
            }
        }
    }

    interactivo();



}

function interactivo(){

    const global = document.getElementById("global")
    
    global.innerHTML = `<div id="list" class="divlprioridades"></div>`
    
    const list = document.getElementById("list");
    
    
    for(var eventos of master){
        if(eventos.match == ""){
            eveeve = "INGRESAR DATOS"
        }else{
            eveeve = eventos.match
        }
        list.innerHTML += `
        <div class="rellenoizq"></div><div class="lprioridades" id="boton${eventos.id}">
            <div class="solocontienecotas">
                <text type="text" class="cota1">${eventos.prioridad}</text>
                <text type="text" class="cota${eventos.clase}" >${eventos.clase} ${eventos.cota}<text class="claset">${eventos.unidad}</text>
                <text type="text" class="cotapos">${eventos.abs}</text>
            </div>

            <div class="prio">
                <paragraph class="lista-evento">${eveeve}</paragraph>
            </div>
        </div>
        `    
    }

    document.getElementById("botborCRU").addEventListener("click", () => {

        db1.splice(0, db1.length)

        print()

    })

    document.getElementById("botborFTP").addEventListener("click", () => {

        db2.splice(0, db2.length)

        print()

    })

    document.getElementById("iftpu").addEventListener("click", () => {

        setTimeout(function(){
            indicador(100);
            indicador(101);
            indicador(102);
            indicador(103);
            indicador(104);
            indicador(105);
            indicador(106);
            indicador(107);
            indicador(108);
            indicador(109);
            indicador(110);
            indicador(111);
            indicador(112);
            indicador(113);
            indicador(114);
            indicador(115);
            indicador(116);
            indicador(117);
            indicador(118);
            indicador(119);
            indicador(120);
            indicador(121);
            indicador(122);
            indicador(123);
            indicador(124);
            indicador(125);
            indicador(126);
            indicador(127);
            indicador(128);
            indicador(129);
            indicador(130);
            indicador(131);
            indicador(132);

            indicadorOUT(0);
            indicadorOUT(1);
            indicadorOUT(2);
            indicadorOUT(3);
            indicadorOUT(4);
            indicadorOUT(5);
            indicadorOUT(6);
            indicadorOUT(7);
            indicadorOUT(8);
            indicadorOUT(9);
            indicadorOUT(10);
            indicadorOUT(11);
            indicadorOUT(12);
            indicadorOUT(13);
            indicadorOUT(14);
            indicadorOUT(15);
            indicadorOUT(16);
            indicadorOUT(17);
            indicadorOUT(18);
            indicadorOUT(19);
            indicadorOUT(20);
            indicadorOUT(21);
            indicadorOUT(22);
            indicadorOUT(23);
            indicadorOUT(24);
            indicadorOUT(25);
            indicadorOUT(26);
            indicadorOUT(27);
            indicadorOUT(28);
            indicadorOUT(29);
            indicadorOUT(30);
            indicadorOUT(31);
            indicadorOUT(32);
        }, 5);

        var ahora = new Date()
        var horas = ahora.getHours()
        if(horas < 10){
            horas = "0" + horas
        }
        var minutos = ahora.getMinutes()
        if(minutos < 10){
            minutos = "0" + minutos
        }

        var horamostrar = `<text class="lineainforme-1">${horas}:${minutos}</text><br>`;
        var infoencabezado = `<b>${horamostrar}<text class="lineainforme-1">Se ingestó:</text></b><br>`;
        var informeFTPunificado
        informeFTPunificado = multiuso7.join("")
        mod.innerHTML = `

    <div class="divformulario" id="formulario">

        <div class="informeimpreso" id="informe"> 
            <div class="informepropiamentedicho">
            
            <div id="informeabajo" class="informeabajo">
                <div class="sasasaftp">

                    <paragraph type="text" class="cajainfromeFTP" id="copiando">${infoencabezado}${informeFTPunificado}</paragraph>
                </div>
            </div>
        </div>
        </div>
        </div>`

        //copiarinforme()

    })

    document.getElementById("LimpiarGeneral").addEventListener("click", () => {

        setTimeout(function(){
            indicadorOUT(0);
            indicadorOUT(1);
            indicadorOUT(2);
            indicadorOUT(3);
            indicadorOUT(4);
            indicadorOUT(5);
            indicadorOUT(6);
            indicadorOUT(7);
            indicadorOUT(8);
            indicadorOUT(9);
            indicadorOUT(10);
            indicadorOUT(11);
            indicadorOUT(12);
            indicadorOUT(13);
            indicadorOUT(14);
            indicadorOUT(15);
            indicadorOUT(16);
            indicadorOUT(17);
            indicadorOUT(18);
            indicadorOUT(19);
            indicadorOUT(20);
            indicadorOUT(21);
            indicadorOUT(22);
            indicadorOUT(23);
            indicadorOUT(24);
            indicadorOUT(25);
            indicadorOUT(26);
            indicadorOUT(27);
            indicadorOUT(28);
            indicadorOUT(29);
            indicadorOUT(30);
            indicadorOUT(31);
            indicadorOUT(32);

            indicadorOUT(100);
            indicadorOUT(101); 
            indicadorOUT(102); 
            indicadorOUT(103); 
            indicadorOUT(104); 
            indicadorOUT(105); 
            indicadorOUT(106); 
            indicadorOUT(107); 
            indicadorOUT(108); 
            indicadorOUT(109); 
            indicadorOUT(110); 
            indicadorOUT(111); 
            indicadorOUT(112); 
            indicadorOUT(113); 
            indicadorOUT(114); 
            indicadorOUT(115); 
            indicadorOUT(116); 
            indicadorOUT(117); 
            indicadorOUT(118); 
            indicadorOUT(119); 
            indicadorOUT(120); 
            indicadorOUT(121); 
            indicadorOUT(122); 
            indicadorOUT(123); 
            indicadorOUT(124); 
            indicadorOUT(125); 
            indicadorOUT(126); 
            indicadorOUT(127); 
            indicadorOUT(128); 
            indicadorOUT(129); 
            indicadorOUT(130); 
            indicadorOUT(131);
            indicadorOUT(132);

            const global = document.getElementById("acotaciones")

            acotaciones.innerHTML = `<div id="mod" class="contenedorformulario"></div>`

            document.getElementById("mod");

            mod.innerHTML = `

                <div class="divformulario" id="formulario">
                </div>`


        }, 5);

    })

    document.getElementById("icu").addEventListener("click", () => {

        setTimeout(function(){

            indicadorOUT(100);
            indicadorOUT(101); 
            indicadorOUT(102); 
            indicadorOUT(103); 
            indicadorOUT(104); 
            indicadorOUT(105); 
            indicadorOUT(106); 
            indicadorOUT(107); 
            indicadorOUT(108); 
            indicadorOUT(109); 
            indicadorOUT(110); 
            indicadorOUT(111); 
            indicadorOUT(112); 
            indicadorOUT(113); 
            indicadorOUT(114); 
            indicadorOUT(115); 
            indicadorOUT(116); 
            indicadorOUT(117); 
            indicadorOUT(118); 
            indicadorOUT(119); 
            indicadorOUT(120); 
            indicadorOUT(121); 
            indicadorOUT(122); 
            indicadorOUT(123); 
            indicadorOUT(124); 
            indicadorOUT(125); 
            indicadorOUT(126); 
            indicadorOUT(127); 
            indicadorOUT(128); 
            indicadorOUT(129); 
            indicadorOUT(130); 
            indicadorOUT(131);
            indicadorOUT(132);

            indicador(0);
            indicador(1);
            indicador(2);
            indicador(3);
            indicador(4);
            indicador(5);
            indicador(6);
            indicador(7);
            indicador(8);
            indicador(9);
            indicador(10);
            indicador(11);
            indicador(12);
            indicador(13);
            indicador(14);
            indicador(15);
            indicador(16);
            indicador(17);
            indicador(18);
            indicador(19);
            indicador(20);
            indicador(21);
            indicador(22);
            indicador(23);
            indicador(24);
            indicador(25);
            indicador(26);
            indicador(27);
            indicador(28);
            indicador(29);
            indicador(30);
            indicador(31);
            indicador(32);
        }, 5);


        
        informeFTPunificado = multiuso7.join("")
        mod.innerHTML = `

    <div class="divformulario" id="formulario">

        <div class="informeimpreso" id="informe"> 
            <div class="informepropiamentedicho">
            
            <div id="informeabajo" class="informeabajo2">
                <div class="sasasaCRUG">

                    <paragraph type="text" class="cajainfromeFTP" id="copiando">${gendb1unif()}</paragraph>
                </div>
            </div>
        </div>
        </div>
        </div>`
    
    })

    //copiarinforme()

    document.getElementById("boton0").addEventListener("click", () => {
        extraer(0)
    })
    document.getElementById("boton1").addEventListener("click", () => {
        extraer(1)
    })
    document.getElementById("boton2").addEventListener("click", () => {
        extraer(2)
    })
    document.getElementById("boton3").addEventListener("click", () => {
        extraer(3)
    })
    document.getElementById("boton4").addEventListener("click", () => {
        extraer(4)
    })
    document.getElementById("boton5").addEventListener("click", () => {
        extraer(5)
    })
    document.getElementById("boton6").addEventListener("click", () => {
        extraer(6)
    })
    document.getElementById("boton7").addEventListener("click", () => {
        extraer(7)
    })
    document.getElementById("boton8").addEventListener("click", () => {
        extraer(8)
    })
    document.getElementById("boton9").addEventListener("click", () => {
        extraer(9)
    })
    document.getElementById("boton10").addEventListener("click", () => {
        extraer(10)
    })
    document.getElementById("boton11").addEventListener("click", () => {
        extraer(11)
    })
    document.getElementById("boton12").addEventListener("click", () => {
        extraer(12)
    })
    document.getElementById("boton13").addEventListener("click", () => {
        extraer(13)
    })
    document.getElementById("boton14").addEventListener("click", () => {
        extraer(14)
    })
    document.getElementById("boton15").addEventListener("click", () => {
        extraer(15)
    })
    document.getElementById("boton16").addEventListener("click", () => {
        extraer(16)
    })
    document.getElementById("boton17").addEventListener("click", () => {
        extraer(17)
    })
    document.getElementById("boton18").addEventListener("click", () => {
        extraer(18)
    })
    document.getElementById("boton19").addEventListener("click", () => {
        extraer(19)
    })
    document.getElementById("boton20").addEventListener("click", () => {
        extraer(20)
    })
    document.getElementById("boton21").addEventListener("click", () => {
        extraer(21)
    })
    document.getElementById("boton22").addEventListener("click", () => {
        extraer(22)
    })
    document.getElementById("boton23").addEventListener("click", () => {
        extraer(23)
    })
    document.getElementById("boton24").addEventListener("click", () => {
        extraer(24)
    })
    document.getElementById("boton25").addEventListener("click", () => {
        extraer(25)
    })
    document.getElementById("boton26").addEventListener("click", () => {
        extraer(26)
    })
    document.getElementById("boton27").addEventListener("click", () => {
        extraer(27)
    })
    document.getElementById("boton28").addEventListener("click", () => {
        extraer(28)
    })
    document.getElementById("boton29").addEventListener("click", () => {
        extraer(29)
    })
    document.getElementById("boton30").addEventListener("click", () => {
        extraer(30)
    })
    document.getElementById("boton31").addEventListener("click", () => {
        extraer(31)
    })
    document.getElementById("boton32").addEventListener("click", () => {
        extraer(32)
    })
    document.getElementById("boton33").addEventListener("click", () => {
        extraer(33)
    })
    document.getElementById("boton100").addEventListener("click", () => {
        extraer(100)
    })
    document.getElementById("boton101").addEventListener("click", () => {
        extraer(101)
    })
    document.getElementById("boton102").addEventListener("click", () => {
        extraer(102)
    })
    document.getElementById("boton103").addEventListener("click", () => {
        extraer(103)
    })
    document.getElementById("boton104").addEventListener("click", () => {
        extraer(104)
    })
    document.getElementById("boton105").addEventListener("click", () => {
        extraer(105)
    })
    document.getElementById("boton106").addEventListener("click", () => {
        extraer(106)
    })
    document.getElementById("boton107").addEventListener("click", () => {
        extraer(107)
    })
    document.getElementById("boton108").addEventListener("click", () => {
        extraer(108)
    })
    document.getElementById("boton109").addEventListener("click", () => {
        extraer(109)
    })
    document.getElementById("boton110").addEventListener("click", () => {
        extraer(110)
    })
    document.getElementById("boton111").addEventListener("click", () => {
        extraer(111)
    })
    document.getElementById("boton112").addEventListener("click", () => {
        extraer(112)
    })
    document.getElementById("boton113").addEventListener("click", () => {
        extraer(113)
    })
    document.getElementById("boton114").addEventListener("click", () => {
        extraer(114)
    })
    document.getElementById("boton115").addEventListener("click", () => {
        extraer(115)
    })
    document.getElementById("boton116").addEventListener("click", () => {
        extraer(116)
    })
    document.getElementById("boton117").addEventListener("click", () => {
        extraer(117)
    })
    document.getElementById("boton118").addEventListener("click", () => {
        extraer(118)
    })
    document.getElementById("boton119").addEventListener("click", () => {
        extraer(119)
    })
    document.getElementById("boton120").addEventListener("click", () => {
        extraer(120)
    })
    document.getElementById("boton121").addEventListener("click", () => {
        extraer(121)
    })
    document.getElementById("boton122").addEventListener("click", () => {
        extraer(122)
    })
    document.getElementById("boton123").addEventListener("click", () => {
        extraer(123)
    })
    document.getElementById("boton124").addEventListener("click", () => {
        extraer(124)
    })
    document.getElementById("boton125").addEventListener("click", () => {
        extraer(125)
    })
    document.getElementById("boton126").addEventListener("click", () => {
        extraer(126)
    })
    document.getElementById("boton127").addEventListener("click", () => {
        extraer(127)
    })
    document.getElementById("boton128").addEventListener("click", () => {
        extraer(128)
    })
    document.getElementById("boton129").addEventListener("click", () => {
        extraer(129)
    })
    document.getElementById("boton130").addEventListener("click", () => {
        extraer(130)
    })
    document.getElementById("boton131").addEventListener("click", () => {
        extraer(131)
    })
    document.getElementById("boton132").addEventListener("click", () => {
        extraer(132)
    })
    document.getElementById("boton133").addEventListener("click", () => {
        extraer(133)
    })
}

function extraer(a){
    elementodeanalisis.splice(0,elementodeanalisis.length)
    for(let items of master){
        if(items.id == a){
            elementodeanalisis.push(items.identificador)
            elementodeanalisis.push(items.id)
            analisis(elementodeanalisis)
        }
    }
}

function analisis(a){
    if(parseInt(a[1]) < 100){
        borrarform()
        formularioCRU(a)
    }

    if(parseInt(a[1]) > 99){
        borrarform()
        formularioFTP(a)
    }
}

function borrarform(){
    const global = document.getElementById("acotaciones")

    acotaciones.innerHTML = `<div id="mod" class="contenedorformulario"></div>`

    document.getElementById("mod");

    mod.innerHTML = `

    <div class="divformulario" id="formulario">
    </div>`

    print()
}

function indicador(a){

    if(a == 0){
        var boton0 = document.getElementById("boton0");
        boton0.classList.add("activeCRU")
    }
    if(a == 1){
        var boton1 = document.getElementById("boton1");
        boton1.classList.add("activeCRU")
    }
    if(a == 2){
        var boton2 = document.getElementById("boton2");
        boton2.classList.add("activeCRU")
    }
    if(a == 3){
        var boton3 = document.getElementById("boton3");
        boton3.classList.add("activeCRU")
    }
    if(a == 4){
        var boton4 = document.getElementById("boton4");
        boton4.classList.add("activeCRU")
    }
    if(a == 5){
        var boton5 = document.getElementById("boton5");
        boton5.classList.add("activeCRU")
    }
    if(a == 6){
        var boton6 = document.getElementById("boton6");
        boton6.classList.add("activeCRU")
    }
    if(a == 7){
        var boton7 = document.getElementById("boton7");
        boton7.classList.add("activeCRU")
    }
    if(a == 8){
        var boton8 = document.getElementById("boton8");
        boton8.classList.add("activeCRU")
    }
    if(a == 9){
        var boton9 = document.getElementById("boton9");
        boton9.classList.add("activeCRU")
    }
    if(a == 10){
        var boton10 = document.getElementById("boton10");
        boton10.classList.add("activeCRU")
    }
    if(a == 11){
        var boton11 = document.getElementById("boton11");
        boton11.classList.add("activeCRU")
    }
    if(a == 12){
        var boton12 = document.getElementById("boton12");
        boton12.classList.add("activeCRU")
    }
    if(a == 13){
        var boton13 = document.getElementById("boton13");
        boton13.classList.add("activeCRU")
    }
    if(a == 14){
        var boton14 = document.getElementById("boton14");
        boton14.classList.add("activeCRU")
    }
    if(a == 15){
        var boton15 = document.getElementById("boton15");
        boton15.classList.add("activeCRU")
    }
    if(a == 16){
        var boton16 = document.getElementById("boton16");
        boton16.classList.add("activeCRU")
    }
    if(a == 17){
        var boton17 = document.getElementById("boton17");
        boton17.classList.add("activeCRU")
    }
    if(a == 18){
        var boton18 = document.getElementById("boton18");
        boton18.classList.add("activeCRU")
    }
    if(a == 19){
        var boton19 = document.getElementById("boton19");
        boton19.classList.add("activeCRU")
    }
    if(a == 20){
        var boton20 = document.getElementById("boton20");
        boton20.classList.add("activeCRU")
    }
    if(a == 21){
        var boton21 = document.getElementById("boton21");
        boton21.classList.add("activeCRU")
    }
    if(a == 22){
        var boton22 = document.getElementById("boton22");
        boton22.classList.add("activeCRU")
    }
    if(a == 23){
        var boton23 = document.getElementById("boton23");
        boton23.classList.add("activeCRU")
    }
    if(a == 24){
        var boton24 = document.getElementById("boton24");
        boton24.classList.add("activeCRU")
    }
    if(a == 25){
        var boton25 = document.getElementById("boton25");
        boton25.classList.add("activeCRU")
    }
    if(a == 26){
        var boton26 = document.getElementById("boton26");
        boton26.classList.add("activeCRU")
    }
    if(a == 27){
        var boton27 = document.getElementById("boton27");
        boton27.classList.add("activeCRU")
    }
    if(a == 28){
        var boton28 = document.getElementById("boton28");
        boton28.classList.add("activeCRU")
    }
    if(a == 29){
        var boton29 = document.getElementById("boton29");
        boton29.classList.add("activeCRU")
    }
    if(a == 30){
        var boton30 = document.getElementById("boton30");
        boton30.classList.add("activeCRU")
    }
    if(a == 31){
        var boton31 = document.getElementById("boton31");
        boton31.classList.add("activeCRU")
    }
    if(a == 32){
        var boton32 = document.getElementById("boton32");
        boton32.classList.add("activeCRU")
    }

    if(a == 100){
        var boton100 = document.getElementById("boton100");
        boton100.classList.add("activeFTP")
    }
    if(a == 101){
        var boton101 = document.getElementById("boton101");
        boton101.classList.add("activeFTP")
    }
    if(a == 102){
        var boton102 = document.getElementById("boton102");
        boton102.classList.add("activeFTP")
    }
    if(a == 103){
        var boton103 = document.getElementById("boton103");
        boton103.classList.add("activeFTP")
    }
    if(a == 104){
        var boton104 = document.getElementById("boton104");
        boton104.classList.add("activeFTP")
    }
    if(a == 105){
        var boton105 = document.getElementById("boton105");
        boton105.classList.add("activeFTP")
    }
    if(a == 106){
        var boton106 = document.getElementById("boton106");
        boton106.classList.add("activeFTP")
    }
    if(a == 107){
        var boton107 = document.getElementById("boton107");
        boton107.classList.add("activeFTP")
    }
    if(a == 108){
        var boton108 = document.getElementById("boton108");
        boton108.classList.add("activeFTP")
    }
    if(a == 109){
        var boton109 = document.getElementById("boton109");
        boton109.classList.add("activeFTP")
    }
    if(a == 110){
        var boton110 = document.getElementById("boton110");
        boton110.classList.add("activeFTP")
    }
    if(a == 111){
        var boton111 = document.getElementById("boton111");
        boton111.classList.add("activeFTP")
    }
    if(a == 112){
        var boton112 = document.getElementById("boton112");
        boton112.classList.add("activeFTP")
    }
    if(a == 113){
        var boton113 = document.getElementById("boton113");
        boton113.classList.add("activeFTP")
    }
    if(a == 114){
        var boton114 = document.getElementById("boton114");
        boton114.classList.add("activeFTP")
    }
    if(a == 115){
        var boton115 = document.getElementById("boton115");
        boton115.classList.add("activeFTP")
    }
    if(a == 116){
        var boton116 = document.getElementById("boton116");
        boton116.classList.add("activeFTP")
    }
    if(a == 117){
        var boton117 = document.getElementById("boton117");
        boton117.classList.add("activeFTP")
    }
    if(a == 118){
        var boton118 = document.getElementById("boton118");
        boton118.classList.add("activeFTP")
    }
    if(a == 119){
        var boton119 = document.getElementById("boton119");
        boton119.classList.add("activeFTP")
    }
    if(a == 120){
        var boton120 = document.getElementById("boton120");
        boton120.classList.add("activeFTP")
    }
    if(a == 121){
        var boton121 = document.getElementById("boton121");
        boton121.classList.add("activeFTP")
    }
    if(a == 122){
        var boton122 = document.getElementById("boton122");
        boton122.classList.add("activeFTP")
    }
    if(a == 123){
        var boton123 = document.getElementById("boton123");
        boton123.classList.add("activeFTP")
    }
    if(a == 124){
        var boton124 = document.getElementById("boton124");
        boton124.classList.add("activeFTP")
    }
    if(a == 125){
        var boton125 = document.getElementById("boton125");
        boton125.classList.add("activeFTP")
    }
    if(a == 126){
        var boton126 = document.getElementById("boton126");
        boton126.classList.add("activeFTP")
    }
    if(a == 127){
        var boton127 = document.getElementById("boton127");
        boton127.classList.add("activeFTP")
    }
    if(a == 128){
        var boton128 = document.getElementById("boton128");
        boton128.classList.add("activeFTP")
    }
    if(a == 129){
        var boton129 = document.getElementById("boton129");
        boton129.classList.add("activeFTP")
    }
    if(a == 130){
        var boton130 = document.getElementById("boton130");
        boton130.classList.add("activeFTP")
    }
    if(a == 131){
        var boton131 = document.getElementById("boton131");
        boton131.classList.add("activeFTP")
    }
    if(a == 132){
        var boton132 = document.getElementById("boton132");
        boton132.classList.add("activeFTP")
    }

}

function indicadorOUT(a){

    if(a == 0){
        var boton0 = document.getElementById("boton0");
        boton0.classList.remove("activeCRU")
    }
    if(a == 1){
        var boton1 = document.getElementById("boton1");
        boton1.classList.remove("activeCRU")
    }
    if(a == 2){
        var boton2 = document.getElementById("boton2");
        boton2.classList.remove("activeCRU")
    }
    if(a == 3){
        var boton3 = document.getElementById("boton3");
        boton3.classList.remove("activeCRU")
    }
    if(a == 4){
        var boton4 = document.getElementById("boton4");
        boton4.classList.remove("activeCRU")
    }
    if(a == 5){
        var boton5 = document.getElementById("boton5");
        boton5.classList.remove("activeCRU")
    }
    if(a == 6){
        var boton6 = document.getElementById("boton6");
        boton6.classList.remove("activeCRU")
    }
    if(a == 7){
        var boton7 = document.getElementById("boton7");
        boton7.classList.remove("activeCRU")
    }
    if(a == 8){
        var boton8 = document.getElementById("boton8");
        boton8.classList.remove("activeCRU")
    }
    if(a == 9){
        var boton9 = document.getElementById("boton9");
        boton9.classList.remove("activeCRU")
    }
    if(a == 10){
        var boton10 = document.getElementById("boton10");
        boton10.classList.remove("activeCRU")
    }
    if(a == 11){
        var boton11 = document.getElementById("boton11");
        boton11.classList.remove("activeCRU")
    }
    if(a == 12){
        var boton12 = document.getElementById("boton12");
        boton12.classList.remove("activeCRU")
    }
    if(a == 13){
        var boton13 = document.getElementById("boton13");
        boton13.classList.remove("activeCRU")
    }
    if(a == 14){
        var boton14 = document.getElementById("boton14");
        boton14.classList.remove("activeCRU")
    }
    if(a == 15){
        var boton15 = document.getElementById("boton15");
        boton15.classList.remove("activeCRU")
    }
    if(a == 16){
        var boton16 = document.getElementById("boton16");
        boton16.classList.remove("activeCRU")
    }
    if(a == 17){
        var boton17 = document.getElementById("boton17");
        boton17.classList.remove("activeCRU")
    }
    if(a == 18){
        var boton18 = document.getElementById("boton18");
        boton18.classList.remove("activeCRU")
    }
    if(a == 19){
        var boton19 = document.getElementById("boton19");
        boton19.classList.remove("activeCRU")
    }
    if(a == 20){
        var boton20 = document.getElementById("boton20");
        boton20.classList.remove("activeCRU")
    }
    if(a == 21){
        var boton21 = document.getElementById("boton21");
        boton21.classList.remove("activeCRU")
    }
    if(a == 22){
        var boton22 = document.getElementById("boton22");
        boton22.classList.remove("activeCRU")
    }
    if(a == 23){
        var boton23 = document.getElementById("boton23");
        boton23.classList.remove("activeCRU")
    }
    if(a == 24){
        var boton24 = document.getElementById("boton24");
        boton24.classList.remove("activeCRU")
    }
    if(a == 25){
        var boton25 = document.getElementById("boton25");
        boton25.classList.remove("activeCRU")
    }
    if(a == 26){
        var boton26 = document.getElementById("boton26");
        boton26.classList.remove("activeCRU")
    }
    if(a == 27){
        var boton27 = document.getElementById("boton27");
        boton27.classList.remove("activeCRU")
    }
    if(a == 28){
        var boton28 = document.getElementById("boton28");
        boton28.classList.remove("activeCRU")
    }
    if(a == 29){
        var boton29 = document.getElementById("boton29");
        boton29.classList.remove("activeCRU")
    }
    if(a == 30){
        var boton30 = document.getElementById("boton30");
        boton30.classList.remove("activeCRU")
    }
    if(a == 31){
        var boton31 = document.getElementById("boton31");
        boton31.classList.remove("activeCRU")
    }
    if(a == 32){
        var boton32 = document.getElementById("boton32");
        boton32.classList.remove("activeCRU")
    }

    if(a == 100){
        var boton100 = document.getElementById("boton100");
        boton100.classList.remove("activeFTP")
    }
    if(a == 101){
        var boton101 = document.getElementById("boton101");
        boton101.classList.remove("activeFTP")
    }
    if(a == 102){
        var boton102 = document.getElementById("boton102");
        boton102.classList.remove("activeFTP")
    }
    if(a == 103){
        var boton103 = document.getElementById("boton103");
        boton103.classList.remove("activeFTP")
    }
    if(a == 104){
        var boton104 = document.getElementById("boton104");
        boton104.classList.remove("activeFTP")
    }
    if(a == 105){
        var boton105 = document.getElementById("boton105");
        boton105.classList.remove("activeFTP")
    }
    if(a == 106){
        var boton106 = document.getElementById("boton106");
        boton106.classList.remove("activeFTP")
    }
    if(a == 107){
        var boton107 = document.getElementById("boton107");
        boton107.classList.remove("activeFTP")
    }
    if(a == 108){
        var boton108 = document.getElementById("boton108");
        boton108.classList.remove("activeFTP")
    }
    if(a == 109){
        var boton109 = document.getElementById("boton109");
        boton109.classList.remove("activeFTP")
    }
    if(a == 110){
        var boton110 = document.getElementById("boton110");
        boton110.classList.remove("activeFTP")
    }
    if(a == 111){
        var boton111 = document.getElementById("boton111");
        boton111.classList.remove("activeFTP")
    }
    if(a == 112){
        var boton112 = document.getElementById("boton112");
        boton112.classList.remove("activeFTP")
    }
    if(a == 113){
        var boton113 = document.getElementById("boton113");
        boton113.classList.remove("activeFTP")
    }
    if(a == 114){
        var boton114 = document.getElementById("boton114");
        boton114.classList.remove("activeFTP")
    }
    if(a == 115){
        var boton115 = document.getElementById("boton115");
        boton115.classList.remove("activeFTP")
    }
    if(a == 116){
        var boton116 = document.getElementById("boton116");
        boton116.classList.remove("activeFTP")
    }
    if(a == 117){
        var boton117 = document.getElementById("boton117");
        boton117.classList.remove("activeFTP")
    }
    if(a == 118){
        var boton118 = document.getElementById("boton118");
        boton118.classList.remove("activeFTP")
    }
    if(a == 119){
        var boton119 = document.getElementById("boton119");
        boton119.classList.remove("activeFTP")
    }
    if(a == 120){
        var boton120 = document.getElementById("boton120");
        boton120.classList.remove("activeFTP")
    }
    if(a == 121){
        var boton121 = document.getElementById("boton121");
        boton121.classList.remove("activeFTP")
    }
    if(a == 122){
        var boton122 = document.getElementById("boton122");
        boton122.classList.remove("activeFTP")
    }
    if(a == 123){
        var boton123 = document.getElementById("boton123");
        boton123.classList.remove("activeFTP")
    }
    if(a == 124){
        var boton124 = document.getElementById("boton124");
        boton124.classList.remove("activeFTP")
    }
    if(a == 125){
        var boton125 = document.getElementById("boton125");
        boton125.classList.remove("activeFTP")
    }
    if(a == 126){
        var boton126 = document.getElementById("boton126");
        boton126.classList.remove("activeFTP")
    }
    if(a == 127){
        var boton127 = document.getElementById("boton127");
        boton127.classList.remove("activeFTP")
    }
    if(a == 128){
        var boton128 = document.getElementById("boton128");
        boton128.classList.remove("activeFTP")
    }
    if(a == 129){
        var boton129 = document.getElementById("boton129");
        boton129.classList.remove("activeFTP")
    }
    if(a == 130){
        var boton130 = document.getElementById("boton130");
        boton130.classList.remove("activeFTP")
    }
    if(a == 131){
        var boton131 = document.getElementById("boton131");
        boton131.classList.remove("activeFTP")
    }
    if(a == 132){
        var boton132 = document.getElementById("boton132");
        boton132.classList.remove("activeFTP")
    }

}

function formularioFTP(a){

    setTimeout(function(){indicador(a[1]); }, 5);
    

    for(let items of master){
        if(items.identificador == a[0]){
            desgloseformuFTP = items
        }
    }

    desgloseformuFTP.contenido = procContenidoFTP(desgloseformuFTP.contenidoB)
    
    if(desgloseformuFTP.status == "virgo"){
        const directFiles = []
        const contFTP = [""]
        desgloseformuFTP.contenido = contFTP
        desgloseformuFTP.contenidoB = ""
        desgloseformuFTP.status = "editado"
        desgloseformuFTP.infoInputFiles = directFiles
        desgloseformuFTP.duracionesItems = ""
        desgloseformuFTP.duracionesItemsAlma = ""
        desgloseformuFTP.infoInputFilesAlmaN = ""
        desgloseformuFTP.infoInputFilesAlmaD = ""
        desgloseformuFTP.cantidadIIF = 0
        
    }
    
    if(desgloseformuFTP.infoInputFilesAlmaN != ""){
        desgloseformuFTP.infoInputFiles = desempaquetarIIF()

    }

    var cantidadcaja = desgloseformuFTP.contenido.length
    if(cantidadcaja == 1 && desgloseformuFTP.contenidoB == ""){
        cantidadcaja = 0
    }
    
    var cantidadFTP = desgloseformuFTP.cantidadIIF
    var cantidaddeitems = cantidadcaja + cantidadFTP
    
    if(cantidaddeitems > 1){
        desgloseformuFTP.match = `${cantidaddeitems} ITEMS`
    }
    
    if(cantidadcaja == 1){
        nombreparamostrar = desgloseformuFTP.contenido[0]
    }
    
    if(cantidadFTP == 1){
        nombreparamostrar = desgloseformuFTP.infoInputFiles[0].nombre
    }
    
    if(cantidaddeitems == 1){
        desgloseformuFTP.match = `${nombreparamostrar}`
    }
    
    if(cantidaddeitems == 0){
        desgloseformuFTP.match = ""
    }
    
    if(desgloseformuFTP.match == ""){
        desgloseformuFTP.match = "ARCHIVOS A DEFINIR"
    }
    
    if(desgloseformuFTP.origen.length < 1){
        desgloseformuFTP.origen = ""
    }
    
    if(desgloseformuFTP.prioridad.length < 1){
        desgloseformuFTP.prioridad = 9999999
    }
    
    if(desgloseformuFTP.unidad.length < 1){
        desgloseformuFTP.unidad = ""
    }
    

    borrarform()
    print()



    const global = document.getElementById("acotaciones")

        acotaciones.innerHTML = `<div id="mod" class="contenedorformulario"></div>`

        document.getElementById("mod");

        
        mod.innerHTML = `

    <div class="divformulario" id="formulario">

        <div class="informeimpreso" id="informe"> 
            <div class="informepropiamentedicho">
            
            <div class="contdetarc" id="detallesarchivos">

            
            </div>


        
        
            <div id="informeabajo" class="informeabajo">
                <div class="sasasaftp">
                    <paragraph type="text" class="cajainfromeFTP" id="copiando">${infoprintFTP(desgloseformuFTP)}</paragraph>
                </div>
            </div>
        



        </div>
        </div>
        </div>


        <div class="form1">
            <div class="botones12form">
                <input id="aceptar1" class="aceptarf1" type="button" value="Aplicar"></input>
                <input id="cancelar1" class="cancelarf1" type="button" value="Salir"></input>
            </div>

    
            
            <text type="text" class="consigna">Origen</text>
            <input id="entrada1" class="cedeve" type="text" value="${desgloseformuFTP.origen}" autofocus></input><br>
            <text type="text" class="consigna">Prioridad</text>
            <input id="entrada2" class="cedn" type="text" value="${desgloseformuFTP.prioridad}" placeholder="Holis"></input><br>
            <text type="text" class="consigna">Unidad</text>
            <input id="entrada3" class="cedL" type="text" value="${desgloseformuFTP.unidad}"></input><br>
            <text type="text" class="consigna">Contenido</text>
            <textarea type="box" id="entrada4" class="cajatextoftp">${desgloseformuFTP.contenidoB}</textarea>

            <input id="limpiar1" class="limpiarf1" type="button" value="Limpiar"></input>
            <input id="limpiardir" class="limpiardir" type="button" value="Limpiar Archivos"></input>
            <div class="drop-area">
                <input id="cargar1" class="cargarf1" type="file" name="fileUpload" value="CARGAR ARCHIVOS" multiple>
            </div>

        </div>
    </div>
</div>
    </div>

    `;

    //copiarinforme()

    if(desgloseformuFTP.contenido[0].length > 0 || desgloseformuFTP.cantidadIIF > 0){

        formNombresArchivos()
        }else{
    }

    document.getElementById("limpiardir").addEventListener("click", () => {

        desgloseformuFTP.infoInputFilesAlmaD = ""
        desgloseformuFTP.infoInputFilesAlmaN = ""
        desgloseformuFTP.cantidadIIF = 0

        transferdataFTP()
        print()
        extraer(desgloseformuFTP.id)

    })

    document.getElementById("limpiar1").addEventListener("click", () => {
        var entrada4 = document.getElementById("entrada4")
        entrada4.value = ""
    })

    document.getElementById("cancelar1").addEventListener("click", () => {

        print()

        mod.innerHTML = `

    <div class="divformulario" id="formulario">`

    
    })

    document.getElementById("aceptar1").addEventListener("click", () => {
        var entrada1 = document.getElementById("entrada1").value;
        var entrada2 = document.getElementById("entrada2").value;
        var entrada3 = document.getElementById("entrada3").value;
        var entrada4 = document.getElementById("entrada4").value;
        var durFile1 = document.getElementById("dur0").value;
        var durFile2 = document.getElementById("dur1").value;
        var durFile3 = document.getElementById("dur2").value;
        var durFile4 = document.getElementById("dur3").value;
        var durFile5 = document.getElementById("dur4").value;
        var durFile6 = document.getElementById("dur5").value;
        var durFile7 = document.getElementById("dur6").value;
        var durFile8 = document.getElementById("dur7").value;
        var durFile9 = document.getElementById("dur8").value;
        var durFile10 = document.getElementById("dur9").value;
        var durFile11 = document.getElementById("dur10").value;
        var durFile12 = document.getElementById("dur11").value;
        var durFile13 = document.getElementById("dur12").value;
        var durFile14 = document.getElementById("dur13").value;
        var durFile15 = document.getElementById("dur14").value;
        var durFile16 = document.getElementById("dur15").value;
        var durFile17 = document.getElementById("dur16").value;
        var durFile18 = document.getElementById("dur17").value;
        var durFile19 = document.getElementById("dur18").value;
        var durFile20 = document.getElementById("dur19").value;
        var durFile21 = document.getElementById("dur20").value;
        var durFile22 = document.getElementById("dur21").value;
        var durFile23 = document.getElementById("dur22").value;
        var durFile24 = document.getElementById("dur23").value;
        var durFile25 = document.getElementById("dur24").value;
        var durFile26 = document.getElementById("dur25").value;
        var durFile27 = document.getElementById("dur26").value;
        var durFile28 = document.getElementById("dur27").value;
        var durFile29 = document.getElementById("dur28").value;
        var durFile30 = document.getElementById("dur29").value;
        var durFile31 = document.getElementById("dur30").value;
        var durFile32 = document.getElementById("dur31").value;
        var durFile33 = document.getElementById("dur32").value;
        var durFile34 = document.getElementById("dur33").value;
        var durFile35 = document.getElementById("dur34").value;
        var durFile36 = document.getElementById("dur35").value;
        var durFile37 = document.getElementById("dur36").value;
        var durFile38 = document.getElementById("dur37").value;
        var durFile39 = document.getElementById("dur38").value;
        var durFile40 = document.getElementById("dur39").value;
        var durFile41 = document.getElementById("dur40").value;
        var durFile42 = document.getElementById("dur41").value;
        var durFile43 = document.getElementById("dur42").value;
        var durFile44 = document.getElementById("dur43").value;
        var durFile45 = document.getElementById("dur44").value;
        var durFile46 = document.getElementById("dur45").value;
        var durFile47 = document.getElementById("dur46").value;
        var durFile48 = document.getElementById("dur47").value;
        var durFile49 = document.getElementById("dur48").value;
        var durFile50 = document.getElementById("dur49").value;
        var durFile51 = document.getElementById("dur50").value;



        entrada1 = entrada1.toUpperCase();
        entrada2 = parseInt(entrada2);
        entrada3 = entrada3.toUpperCase();
        entrada4 = entrada4.toUpperCase();
        durF.splice(0,durF.length)
        durF.push(validDurOriginal(durFile1), validDurOriginal(durFile2), validDurOriginal(durFile3), validDurOriginal(durFile4), validDurOriginal(durFile5), validDurOriginal(durFile6), validDurOriginal(durFile7), validDurOriginal(durFile8), validDurOriginal(durFile9), validDurOriginal(durFile10), validDurOriginal(durFile11), validDurOriginal(durFile12), validDurOriginal(durFile13), validDurOriginal(durFile14), validDurOriginal(durFile15), validDurOriginal(durFile16), validDurOriginal(durFile17), validDurOriginal(durFile18), validDurOriginal(durFile19), validDurOriginal(durFile20), validDurOriginal(durFile21), validDurOriginal(durFile22), validDurOriginal(durFile23), validDurOriginal(durFile24), validDurOriginal(durFile25), validDurOriginal(durFile26), validDurOriginal(durFile27), validDurOriginal(durFile28), validDurOriginal(durFile29), validDurOriginal(durFile30), validDurOriginal(durFile31), validDurOriginal(durFile32), validDurOriginal(durFile33), validDurOriginal(durFile34), validDurOriginal(durFile35), validDurOriginal(durFile36), validDurOriginal(durFile37), validDurOriginal(durFile38), validDurOriginal(durFile39), validDurOriginal(durFile40), validDurOriginal(durFile41), validDurOriginal(durFile42), validDurOriginal(durFile43), validDurOriginal(durFile44), validDurOriginal(durFile45), validDurOriginal(durFile46), validDurOriginal(durFile47), validDurOriginal(durFile48), validDurOriginal(durFile49), validDurOriginal(durFile50), validDurOriginal(durFile51))

        desgloseformuFTP.duracionesItems = durF
        desgloseformuFTP.duracionesItemsAlma = durF.join("¬¬")
        
        function validDurOriginal(a){
                if(parseInt(a) > 0){
                    return a
                    }else{
                        return "-"
                }
        }

        desgloseformuFTP.origen = (entrada1);
        desgloseformuFTP.prioridad = (entrada2);
        desgloseformuFTP.unidad = (entrada3);
        desgloseformuFTP.contenidoB = (entrada4);
        desgloseformuFTP.status = "editado"
        desgloseformuFTP.contenido = procContenidoFTP(desgloseformuFTP.contenidoB)

        
        for(i = 0; i < master.length; i++){
            if(master[i].identificador == desgloseformuFTP.identificador){
                master[i] = desgloseformuFTP
                break;
            }
        }

        print()
        
        extraer(desgloseformuFTP.id)

        
        
    })

    const dropArea = document.querySelector(".drop-area");
    const button = dropArea.querySelector("button");
    const input = dropArea.querySelector("#cargar1").onchange = comenzarLaPapa;


};

function formularioCRU(a){

    setTimeout(function(){indicador(a[1]); }, 5);

    for(let items of master){
        if(items.identificador == a[0]){
            desgloseformulario = items
        }
    }



    if(desgloseformulario.status == "virgo"){
        desgloseformulario.color = ""
        desgloseformulario.previa = ""
        desgloseformulario.primerT = ""
        desgloseformulario.entreT = ""
        desgloseformulario.segundoT = ""
        desgloseformulario.alargue = ""
        desgloseformulario.penales = ""
        desgloseformulario.camara = ""
        desgloseformulario.notas = ""
        desgloseformulario.post = ""
        desgloseformulario.unidad = ""
        const nombresNotas0 = [""]
        desgloseformulario.nombresNotas = nombresNotas0
        desgloseformulario.reduccion = "0"
        desgloseformulario.mododetallado1 = "0"
        desgloseformulario.mododetallado2 = "0"
        desgloseformulario.mododetallado3 = "0"
        desgloseformulario.mododetallado4 = "0"
        desgloseformulario.detPreviaAlma = "¬¬"
        desgloseformulario.detDurPreviaAlma = "¬¬"
        desgloseformulario.detDurPTAlma = "¬¬"
        desgloseformulario.detDurPostAlma = "¬¬"
        desgloseformulario.detDurSTAlma = "¬¬"
        desgloseformulario.detPostAlma = "¬¬"
        desgloseformulario.durNotasAlma = "¬¬"
    }

    if(desgloseformulario.categoria.length < 1){
        desgloseformulario.categoria = ""
    }

    if(desgloseformulario.camara.length < 1){
        desgloseformulario.camara = ""
    }

    if(desgloseformulario.prioridad.length < 1){
        desgloseformulario.prioridad = 9999999
    }

    if(desgloseformulario.color.length < 1){
        desgloseformulario.color = ""
    }

    if(desgloseformulario.previa.length < 1){
        desgloseformulario.previa = ""
    }

    if(desgloseformulario.primerT.length < 1){
        desgloseformulario.primerT = ""
    }

    if(desgloseformulario.entreT.length < 1){
        desgloseformulario.entreT = ""
    }

    if(desgloseformulario.segundoT.length < 1){
        desgloseformulario.segundoT = ""
    }

    if(desgloseformulario.alargue.length < 1){
        desgloseformulario.alargue = ""
    }

    if(desgloseformulario.penales.length < 1){
        desgloseformulario.penales = ""
    }

    if(desgloseformulario.notas.length < 1){
        desgloseformulario.notas = ""
    }

    if(desgloseformulario.post.length < 1){
        desgloseformulario.post = ""
    }

    if(desgloseformulario.unidad.length < 1){
        desgloseformulario.unidad = ""
    }

    if(desgloseformulario.nombresNotas.length < 1){
        const vacio = []
        desgloseformulario.nombresNotas = vacio
    }

    if(desgloseformulario.primerT.includes("X")){}
        else{
            desgloseformulario.mododetallado1 = "0"
    }

    if(desgloseformulario.segundoT.includes("X")){}
        else{
            desgloseformulario.mododetallado2 = "0"
    }

    if(desgloseformulario.previa.includes("X")){}
        else{
            desgloseformulario.mododetallado4 = "0"
    }

    if(desgloseformulario.post.includes("X")){}
        else{
            desgloseformulario.mododetallado3 = "0"
    }

    if(desgloseformulario.notas == ""){
        desgloseformulario.reduccion = "0"
    }

    print()

    desgloseformulario.detDurPT = desgloseformulario.detDurPTAlma.split("¬¬")
    desgloseformulario.detDurPrevia = desgloseformulario.detDurPreviaAlma.split("¬¬")
    desgloseformulario.detDurPrevia = desgloseformulario.detDurPreviaAlma.split("¬¬")
    desgloseformulario.detDurPost = desgloseformulario.detDurPostAlma.split("¬¬")
    desgloseformulario.detDurST = desgloseformulario.detDurSTAlma.split("¬¬")
    desgloseformulario.detPost = desgloseformulario.detPostAlma.split("¬¬")
    desgloseformulario.duracionesNotas = desgloseformulario.durNotasAlma.split("¬¬")

    const global = document.getElementById("acotaciones")

    acotaciones.innerHTML = `<div id="mod" class="contenedorformulario"></div>`

    document.getElementById("mod");

    mod.innerHTML = `

        <div class="divformulario" id="formulario">

            <div class="informeimpreso" id="informe"> 
                <div class="area-opciones">
                <input type="button" id="opc6" class="opc1" value="Detallar Previa"><br>
                <input type="button" id="opc2" class="opc1" value="Detallar Primer Tiempo"><br>
                <input type="button" id="opc3" class="opc1" value="Detallar Segundo Tiempo"><br>
                <input type="button" id="opc1" class="opc1" value="Reducir cantidad de caracteres"><br>
                <input type="button" id="opc5" class="opc1" value="Detallar Post"><br>
                <input type="button" id="opc4" class="opc1inactivo" value="."><br>
                <input type="button" id="opc7" class="opc1inactivo" value="."><br>
                </div>


                <div class="informepropiamentedicho">
                    <p class="titulonombresnotas"></p>
                <div class="contdetnot" id="detallesnotas">
            </div>

            <div id="informeabajo" class="informeabajo">
                <div class="sasasa">
                    <paragraph type="text" class="cajainfromeCRUDOS" id="copiando">${infoprintCrudos(desgloseformulario)}</paragraph>
                </div>
            </div>





                    
        </div>
        </div>
        </div>

        
        <div class="form1">
            <div class="botones12form">
                <input id="aceptar0" class="aceptarf1" type="button" value="Aplicar"></input>
                <input id="cancelar0" class="cancelarf1" type="button" value="Salir"></input>
            </div>

            
            
            <text type="text" class="consigna">Evento</text>
            <input id="entrada1" class="cedeve" type="text" value="${desgloseformulario.match}" autofocus></input><br>
            <text type="text" class="consigna">Categoria</text>
            <input id="entrada2" class="cedL" type="text" value="${desgloseformulario.categoria}"></input><br>
            <text type="text" class="consigna">Prioridad</text>
            <input id="entrada3" class="cedn" type="text" value="${desgloseformulario.prioridad}"></input><br>
            <text type="text" class="consigna">Color</text>
            <input id="entrada4" class="ced" type="text" value="${desgloseformulario.color}"></input><br>
            <text type="text" class="consigna">Previa</text>
            <input id="entrada5" class="ced" type="text" value="${desgloseformulario.previa}"></input><br>
            <text type="text" class="consigna">Cámara</text>
            <input id="entrada6" class="cedL" type="text" value="${desgloseformulario.camara}"></input><br>
            <text type="text" class="consigna">1er tiempo</text>
            <input id="entrada7" class="ced" type="text" value="${desgloseformulario.primerT}"></input><br>
            <text type="text" class="consigna">Entre tiempo</text>
            <input id="entrada8" class="ced" type="text" value="${desgloseformulario.entreT}"></input><br>
            <text type="text" class="consigna">2° tiempo</text>
            <input id="entrada9" class="ced" type="text" value="${desgloseformulario.segundoT}"></input><br>
            <text type="text" class="consigna">Alargue</text>
            <input id="entrada10" class="ced" type="text" value="${desgloseformulario.alargue}"></input><br>
            <text type="text" class="consigna">Penales</text>
            <input id="entrada11" class="ced" type="text" value="${desgloseformulario.penales}"></input><br>
            <text type="text" class="consigna">Post</text>
            <input id="entrada13" class="ced" type="text" value="${desgloseformulario.post}"></input><br>
            <text type="text" class="consigna">Unidad</text>
            <input id="entrada14" class="cedL" type="text" value="${desgloseformulario.unidad}"></input><br>
            <text type="text" class="consigna">Notas</text>
            <textarea type="text" id="entrada12" class="cajatexto">${desgloseformulario.notas}</textarea><br>
            <input id="limpiar0" class="limpiarf0" type="button" value="Limpiar"></input>
            
        </div>

    

    `;

    //copiarinforme()

    if(desgloseformulario.notas == ""){
        document.getElementById("opc1")
        setTimeout(function(){
            opc1.classList.remove("opc1")
            opc1.classList.add("opc1inactivo")
        }, 5);
    }

    if(desgloseformulario.reduccion == "1"){
        document.getElementById("opc1")
        setTimeout(function(){
            opc1.classList.remove("opc1")
            opc1.classList.add("opc1activo")
        }, 5);
    }

    if(desgloseformulario.mododetallado4 == "1"){
        formDetallarPrevia()
        document.getElementById("opc6")
        setTimeout(function(){
            opc6.classList.remove("opc1")
            opc6.classList.add("opc1activo")
        }, 5);
        }else{
    }

    if(desgloseformulario.previa.includes("X")){
        }else{
        document.getElementById("opc6")
        setTimeout(function(){
            opc6.classList.remove("opc1")
            opc6.classList.add("opc1inactivo")
        }, 5);
    }
    
    if(desgloseformulario.mododetallado1 == "1"){
        formDetallarPimerT(desgloseformulario)
        document.getElementById("opc2")
        setTimeout(function(){
            opc2.classList.remove("opc1")
            opc2.classList.add("opc1activo")
        }, 5);
        }else{
    }

    if(desgloseformulario.primerT.includes("X")){}
        else{
            document.getElementById("opc2")
            setTimeout(function(){
                opc2.classList.remove("opc1")
                opc2.classList.add("opc1inactivo")
            }, 5);
    }

    if(desgloseformulario.mododetallado2 == "1"){
        formDetallarSegundoT(desgloseformulario)
        document.getElementById("opc3")
        setTimeout(function(){
            opc3.classList.remove("opc1")
            opc3.classList.add("opc1activo")
        }, 5);
        }else{
    }

    if(desgloseformulario.segundoT.includes("X")){}
        else{
            document.getElementById("opc3")
            setTimeout(function(){
                opc3.classList.remove("opc1")
                opc3.classList.add("opc1inactivo")
            }, 5);
    }
    
    
    if(desgloseformulario.nombresNotas.length > 0){
        formNombresNotas()
        }else{
    }

    if(desgloseformulario.mododetallado3 == "1"){
        formDetallarPost()
        document.getElementById("opc5")
        setTimeout(function(){
            opc5.classList.remove("opc1")
            opc5.classList.add("opc1activo")
        }, 5);
        }else{
    }

    if(desgloseformulario.post.includes("X")){}
        else{
            document.getElementById("opc5")
            setTimeout(function(){
                opc5.classList.remove("opc1")
                opc5.classList.add("opc1inactivo")
            }, 5);
    }

    
    document.getElementById("limpiar0").addEventListener("click", () => {

        var entrada12 = document.getElementById("entrada12")

        entrada12.value = ""

    })

    document.getElementById("opc1").addEventListener("click", () => {
        if(desgloseformulario.reduccion == "0"){
            desgloseformulario.reduccion = "1"
        }else{desgloseformulario.reduccion = "0"}
        for(i = 0; i < master.length; i++){
            if(master[i].identificador == desgloseformulario.identificador){
                master[i].reduccion = desgloseformulario.reduccion
            }
        }

        extraer(desgloseformulario.id)
    })

    document.getElementById("opc2").addEventListener("click", () => {

        if(desgloseformulario.mododetallado1 == "0"){
            desgloseformulario.mododetallado1 = "1"
            desgloseformulario.detPT = items10
            desgloseformulario.detDurPT = items10
        }else{desgloseformulario.mododetallado1 = "0"}
        for(i = 0; i < master.length; i++){
            if(master[i].identificador == desgloseformulario.identificador){
                master[i].mododetallado1 = desgloseformulario.mododetallado1
                master[i].detPT = desgloseformulario.detPT
                master[i].detDurPT = desgloseformulario.detDurPT
            }
        }

        if(desgloseformulario.primerT.includes("X")){}else{
            desgloseformulario.mododetallado1 = "0"
        }

        extraer(desgloseformulario.id)
    })

    document.getElementById("opc3").addEventListener("click", () => {
        if(desgloseformulario.mododetallado2 == "0"){
            desgloseformulario.mododetallado2 = "1"
            desgloseformulario.detST = items10
            desgloseformulario.detDurST = items10
        }else{desgloseformulario.mododetallado2 = "0"}
        for(i = 0; i < master.length; i++){
            if(master[i].identificador == desgloseformulario.identificador){
                master[i].mododetallado2 = desgloseformulario.mododetallado2
                master[i].detST = desgloseformulario.detST
                master[i].detDurST = desgloseformulario.detDurST
            }
        }

        extraer(desgloseformulario.id)
    })

    document.getElementById("opc5").addEventListener("click", () => {

        if(desgloseformulario.mododetallado3 == "0"){
            desgloseformulario.mododetallado3 = "1"
            desgloseformulario.detPost = items10
            desgloseformulario.detDurPost = items10
        }else{desgloseformulario.mododetallado3 = "0"}
        for(i = 0; i < master.length; i++){
            if(master[i].identificador == desgloseformulario.identificador){
                master[i].mododetallado3 = desgloseformulario.mododetallado3
                master[i].detPost = desgloseformulario.detPost
                master[i].detDurPost = desgloseformulario.detDurPost
            }
        }

        if(desgloseformulario.post.includes("X")){}else{
            desgloseformulario.mododetallado3 = "0"
        }

        extraer(desgloseformulario.id)
    })

    document.getElementById("opc6").addEventListener("click", () => {

        if(desgloseformulario.mododetallado4 == "0"){
            desgloseformulario.mododetallado4 = "1"
            desgloseformulario.detPrevia = items10
            desgloseformulario.detDurPrevia = items10
        }else{desgloseformulario.mododetallado4 = "0"}
        for(i = 0; i < master.length; i++){
            if(master[i].identificador == desgloseformulario.identificador){
                master[i].mododetallado4 = desgloseformulario.mododetallado4
                master[i].detPrevia = desgloseformulario.detPrevia
                master[i].detDurPrevia = desgloseformulario.detDurPrevia
            }
        }

        if(desgloseformulario.previa.includes("X")){}else{
            desgloseformulario.mododetallado4 = "0"
        }

        extraer(desgloseformulario.id)
    })

    

    document.getElementById("cancelar0").addEventListener("click", () => {

        print()

        mod.innerHTML = `

    <div class="divformulario" id="formulario">`
    })

    document.getElementById("aceptar0").addEventListener("click", () => {
        var entrada1 = document.getElementById("entrada1").value;
        var entrada2 = document.getElementById("entrada2").value;
        var entrada3 = document.getElementById("entrada3").value;
        var entrada4 = document.getElementById("entrada4").value;
        var entrada5 = document.getElementById("entrada5").value;
        var entrada6 = document.getElementById("entrada6").value;
        var entrada7 = document.getElementById("entrada7").value;
        var entrada8 = document.getElementById("entrada8").value;
        var entrada9 = document.getElementById("entrada9").value;
        var entrada10 = document.getElementById("entrada10").value;
        var entrada11 = document.getElementById("entrada11").value;
        var entrada12 = document.getElementById("entrada12").value;
        var entrada13 = document.getElementById("entrada13").value;
        var entrada14 = document.getElementById("entrada14").value;
        var nombrePOST1 = document.getElementById("detp0").value;
        var nombrePOST2 = document.getElementById("detp1").value;
        var nombrePOST3 = document.getElementById("detp2").value;
        var nombrePOST4 = document.getElementById("detp3").value;
        var nombrePOST5 = document.getElementById("detp4").value;
        var nombrePOST6 = document.getElementById("detp5").value;
        var nombrePOST7 = document.getElementById("detp6").value;
        var nombrePOST8 = document.getElementById("detp7").value;
        var nombrePOST9 = document.getElementById("detp8").value;
        var nombrePOST10 = document.getElementById("detp9").value;
        var duracionnota1 = document.getElementById("dur0").value;
        var duracionnota2 = document.getElementById("dur1").value;
        var duracionnota3 = document.getElementById("dur2").value;
        var duracionnota4 = document.getElementById("dur3").value;
        var duracionnota5 = document.getElementById("dur4").value;
        var duracionnota6 = document.getElementById("dur5").value;
        var duracionnota7 = document.getElementById("dur6").value;
        var duracionnota8 = document.getElementById("dur7").value;
        var duracionnota9 = document.getElementById("dur8").value;
        var duracionnota10 = document.getElementById("dur9").value;
        var duracionnota11 = document.getElementById("dur10").value;
        var duracionnota12 = document.getElementById("dur11").value;
        var duracionnota13 = document.getElementById("dur12").value;
        var duracionnota14 = document.getElementById("dur13").value;
        var duracionnota15 = document.getElementById("dur14").value;
        var duracionnota16 = document.getElementById("dur15").value;
        var duracionnota17 = document.getElementById("dur16").value;
        var duracionnota18 = document.getElementById("dur17").value;
        var duracionnota19 = document.getElementById("dur18").value;
        var duracionnota20 = document.getElementById("dur19").value;
        var duracionPT11 = document.getElementById("dur100").value;
        var duracionPT12 = document.getElementById("dur101").value;
        var duracionPT13 = document.getElementById("dur102").value;
        var duracionPT14 = document.getElementById("dur103").value;
        var duracionPT15 = document.getElementById("dur104").value;
        var duracionPT16 = document.getElementById("dur105").value;
        var duracionPT17 = document.getElementById("dur106").value;
        var duracionPT18 = document.getElementById("dur107").value;
        var duracionPT19 = document.getElementById("dur108").value;
        var duracionPT110 = document.getElementById("dur109").value;
        var duracionST11 = document.getElementById("dur200").value;
        var duracionST12 = document.getElementById("dur201").value;
        var duracionST13 = document.getElementById("dur202").value;
        var duracionST14 = document.getElementById("dur203").value;
        var duracionST15 = document.getElementById("dur204").value;
        var duracionST16 = document.getElementById("dur205").value;
        var duracionST17 = document.getElementById("dur206").value;
        var duracionST18 = document.getElementById("dur207").value;
        var duracionST19 = document.getElementById("dur208").value;
        var duracionST110 = document.getElementById("dur209").value;
        var duracionPOST1 = document.getElementById("dur300").value;
        var duracionPOST2 = document.getElementById("dur301").value;
        var duracionPOST3 = document.getElementById("dur302").value;
        var duracionPOST4 = document.getElementById("dur303").value;
        var duracionPOST5 = document.getElementById("dur304").value;
        var duracionPOST6 = document.getElementById("dur305").value;
        var duracionPOST7 = document.getElementById("dur306").value;
        var duracionPOST8 = document.getElementById("dur307").value;
        var duracionPOST9 = document.getElementById("dur308").value;
        var duracionPOST10 = document.getElementById("dur309").value;
        var duracionPREVIA1 = document.getElementById("dur400").value;
        var duracionPREVIA2 = document.getElementById("dur401").value;
        var duracionPREVIA3 = document.getElementById("dur402").value;
        var duracionPREVIA4 = document.getElementById("dur403").value;
        var duracionPREVIA5 = document.getElementById("dur404").value;
        var duracionPREVIA6 = document.getElementById("dur405").value;
        var duracionPREVIA7 = document.getElementById("dur406").value;
        var duracionPREVIA8 = document.getElementById("dur407").value;
        var duracionPREVIA9 = document.getElementById("dur408").value;
        var duracionPREVIA10 = document.getElementById("dur409").value;
        var nombrePrevia1 = document.getElementById("detpre0").value;
        var nombrePrevia2 = document.getElementById("detpre1").value;
        var nombrePrevia3 = document.getElementById("detpre2").value;
        var nombrePrevia4 = document.getElementById("detpre3").value;
        var nombrePrevia5 = document.getElementById("detpre4").value;
        var nombrePrevia6 = document.getElementById("detpre5").value;
        var nombrePrevia7 = document.getElementById("detpre6").value;
        var nombrePrevia8 = document.getElementById("detpre7").value;
        var nombrePrevia9 = document.getElementById("detpre8").value;
        var nombrePrevia10 = document.getElementById("detpre9").value;

        

        
        entrada1 = entrada1.toUpperCase();
        entrada2 = entrada2.toUpperCase();
        entrada3 = parseInt(entrada3);
        entrada4 = entrada4.toUpperCase();
        entrada5 = entrada5.toUpperCase();
        entrada6 = entrada6.toUpperCase();
        entrada7 = entrada7.toUpperCase();
        entrada8 = entrada8.toUpperCase();
        entrada9 = entrada9.toUpperCase();
        entrada10 = entrada10.toUpperCase();
        entrada11 = entrada11.toUpperCase();
        entrada12 = entrada12.toUpperCase();
        entrada13 = entrada13.toUpperCase();
        entrada14 = entrada14.toUpperCase();

        
        
        desgloseformulario.match = (entrada1);
        desgloseformulario.categoria = (entrada2);
        desgloseformulario.prioridad = (entrada3)
        desgloseformulario.color = (entrada4);
        desgloseformulario.previa = (entrada5);
        desgloseformulario.camara = (entrada6);
        desgloseformulario.primerT = (entrada7);
        desgloseformulario.entreT = (entrada8);
        desgloseformulario.segundoT = (entrada9);
        desgloseformulario.alargue = (entrada10);
        desgloseformulario.penales = (entrada11);
        desgloseformulario.notas = (entrada12);
        desgloseformulario.post = (entrada13);
        desgloseformulario.unidad = (entrada14);
        desgloseformulario.status = "editado"
        desgloseformulario.nombresNotas = procesadorNotas(desgloseformulario.notas);
        
        
        dur.splice(0,dur.length)
        dur2.splice(0,dur2.length)

        dur.push(duracionnota1, duracionnota2, duracionnota3, duracionnota4, duracionnota5, duracionnota6, duracionnota7, duracionnota8, duracionnota9, duracionnota10, duracionnota11, duracionnota12, duracionnota13, duracionnota14, duracionnota15, duracionnota16, duracionnota17, duracionnota18, duracionnota19, duracionnota20)
        
        validDur1(dur);
        
        function validDur1(a){
            for(let items of a){
                if(parseInt(items) > 0){
                    dur2.push(items)
                }else{
                    dur2.push("-")
                }
            }
        }

        desgloseformulario.durNotasAlma = dur2.join("¬¬")


        durPTtemp.splice(0,durPTtemp.length)
        dur2PTtemp.splice(0,dur2PTtemp.length)
        durPTtemp.push(duracionPT11, duracionPT12, duracionPT13, duracionPT14, duracionPT15, duracionPT16, duracionPT17, duracionPT18, duracionPT19, duracionPT110)
        
        
        validDur3(durPTtemp);
        desgloseformulario.detDurPT = dur2PTtemp
        desgloseformulario.detDurPTAlma = dur2PTtemp.join("¬¬")

        
        function validDur3(a){
            for(let items of a){
                if(parseInt(items) > 0){
                    dur2PTtemp.push(items)
                }else{
                    dur2PTtemp.push("-")
                }
            }
        }

        /////
        durSTtemp.splice(0,durSTtemp.length)
        dur2STtemp.splice(0,dur2STtemp.length)
        durSTtemp.push(duracionST11, duracionST12, duracionST13, duracionST14, duracionST15, duracionST16, duracionST17, duracionST18, duracionST19, duracionST110)
        
        
        validDur4(durSTtemp);
        desgloseformulario.detDurST = dur2STtemp
        desgloseformulario.detDurSTAlma = dur2STtemp.join("¬¬")
        
        function validDur4(a){
            for(let items of a){
                if(parseInt(items) > 0){
                    dur2STtemp.push(items)
                }else{
                    dur2STtemp.push("-")
                }
            }
        }

        /////

        
        durPostTemp.splice(0,durPostTemp.length)
        dur2PostTemp.splice(0,dur2PostTemp.length)
        durPostTemp.push(duracionPOST1, duracionPOST2, duracionPOST3, duracionPOST4, duracionPOST5, duracionPOST6, duracionPOST7, duracionPOST8, duracionPOST9, duracionPOST10)
        

        
        validDur2(durPostTemp);
        desgloseformulario.detDurPost = dur2PostTemp
        desgloseformulario.detDurPostAlma = dur2PostTemp.join("¬¬")
        
        function validDur2(a){
            for(let items of a){
                if(parseInt(items) > 0){
                    dur2PostTemp.push(items)
                }else{
                    dur2PostTemp.push("-")
                }
            }
        }
        
        
        

        
        arrayPost.splice(0, arrayPost.length)
        arrayPost.push(nombrePOST1, nombrePOST2, nombrePOST3, nombrePOST4, nombrePOST5, nombrePOST6, nombrePOST7, nombrePOST8, nombrePOST9, nombrePOST10)

        desgloseformulario.detPost = arrayPost
        desgloseformulario.detPostAlma = arrayPost.join("¬¬")

        

        ///// capturar previa

        durPreviaTemp.splice(0,durPreviaTemp.length)
        dur2PreviaTemp.splice(0,dur2PreviaTemp.length)
        durPreviaTemp.push(duracionPREVIA1, duracionPREVIA2, duracionPREVIA3, duracionPREVIA4, duracionPREVIA5, duracionPREVIA6, duracionPREVIA7, duracionPREVIA8, duracionPREVIA9, duracionPREVIA10)
        
        validDur5(durPreviaTemp);
        desgloseformulario.detDurPrevia = dur2PreviaTemp
        desgloseformulario.detDurPreviaAlma = dur2PreviaTemp.join("¬¬")
        
        function validDur5(a){
            for(let items of a){
                if(parseInt(items) > 0){
                    dur2PreviaTemp.push(items)
                }else{
                    dur2PreviaTemp.push("-")
                }
            }
        }
        
        arrayPrevia.splice(0, arrayPrevia.length)
        arrayPrevia.push(nombrePrevia1, nombrePrevia2, nombrePrevia3, nombrePrevia4, nombrePrevia5, nombrePrevia6, nombrePrevia7, nombrePrevia8, nombrePrevia9, nombrePrevia10)

        desgloseformulario.detPrevia = arrayPrevia
        desgloseformulario.detPreviaAlma = arrayPrevia.join("¬¬")

        ///// fin captura previa
        
        

        for(i = 0; i < master.length; i++){
            if(master[i].identificador == desgloseformulario.identificador){
                master[i].match = desgloseformulario.match
                master[i].categoria = desgloseformulario.categoria
                master[i].color = desgloseformulario.color
                master[i].previa = desgloseformulario.previa
                master[i].camara = desgloseformulario.camara
                master[i].primerT = desgloseformulario.primerT
                master[i].entreT = desgloseformulario.entreT
                master[i].segundoT = desgloseformulario.segundoT
                master[i].alargue = desgloseformulario.alargue
                master[i].penales = desgloseformulario.penales
                master[i].notas = desgloseformulario.notas
                master[i].post = desgloseformulario.post
                master[i].status = desgloseformulario.status
                master[i].nombresNotas = desgloseformulario.nombresNotas
                master[i].unidad = desgloseformulario.unidad
                master[i].prioridad = desgloseformulario.prioridad
                master[i].duracionesNotas = dur2
                master[i].detDurPost = desgloseformulario.detDurPost
                master[i].detPost = desgloseformulario.detPost
                master[i].detDurPostAlma = desgloseformulario.detDurPostAlma
                master[i].detDurSTAlma = desgloseformulario.detDurSTAlma
                master[i].detPostAlma = desgloseformulario.detPostAlma
                master[i].detDurPTAlma = desgloseformulario.detDurPTAlma

                master[i].detPreviaAlma = desgloseformulario.detPreviaAlma
                master[i].detDurPreviaAlma = desgloseformulario.detDurPreviaAlma




            }
        }

        print()
        
        extraer(desgloseformulario.id)

    })
};

function procDurReloj(a){
    if(parseInt(a)>0){}else{
        return '  :  :  '
    }
    if(a == "-"){
        return '  :  :  '
    }
    if(parseInt(a) > 0){
        if(a.length == 1){
            return `00:0${a}"`
        }
        if(a.length == 2){
            b = a.split("")
            return `00:${b[0]}${b[1]}`
        }
        if(a.length == 3){
            b = a.split("")
            return `0${b[0]}:${b[1]}${b[2]}`
        }
        if(a.length == 4){
            b = a.split("")
            return `${b[0]}${b[1]}:${b[2]}${b[3]}`
        }
        if(a.length == 5){
            b = a.split("")
            return `${b[0]}:${b[1]}${b[2]}:${b[3]}${b[4]}`
        }
    }







}

function procDur(a){
    if(parseInt(a)>0){}else{
        return '(duracion a confirmar)'
    }
    if(a == "-"){
        return '(duracion a confirmar)'
    }
    if(parseInt(a) > 0){
        if(a.length == 1){
            return `(00' 0${a}")`
        }
        if(a.length == 2){
            b = a.split("")
            return `(00' ${b[0]}${b[1]}")`
        }
        if(a.length == 3){
            b = a.split("")
            return `(0${b[0]}' ${b[1]}${b[2]}")`
        }
        if(a.length == 4){
            b = a.split("")
            return `(${b[0]}${b[1]}' ${b[2]}${b[3]}")`
        }
        if(a.length == 5){
            b = a.split("")
            return `(${b[0]}h ${b[1]}${b[2]}' ${b[3]}${b[4]}")`
        }
    }
}

function procContenidoFTP(a){

    contenidoFTP.splice(0,contenidoFTP.length)

    var lineaXlinea = a.split("\n")

    for(let renglon of lineaXlinea){

        if(renglon.includes("\\")){
            busComNom = renglon.lastIndexOf("\\")
            busFinNom = renglon.lastIndexOf(".")
            nombreLimpio = renglon.substring(busComNom+1,busFinNom)
            contenidoFTP.push(nombreLimpio)
        }else{
            contenidoFTP.push(renglon)
        }
    }

    return contenidoFTP

}

function ContenidoFTPunificado(a){

    multiuso3.splice(0,multiuso3.length)

    var lineaXlinea = a.split("\n")

    for(let renglon of lineaXlinea){

        if(renglon.includes("\\")){
            busComNom = renglon.lastIndexOf("\\")
            busFinNom = renglon.lastIndexOf(".")
            nombreLimpio = renglon.substring(busComNom+1,busFinNom)
            multiuso3.push(nombreLimpio)
        }else{
            multiuso3.push(renglon)
        }
    }

    return multiuso3

}

function formDetallarPrevia(){

    var cantidaddePrevia
    var numXPrevia = desgloseformulario.previa.substring(1);
    cantidaddePrevia = parseInt(numXPrevia)
    desgloseformulario.cantidaddePrevia = cantidaddePrevia


    document.getElementById("detallesnotas");
    if(desgloseformulario.detPrevia.length > 0){
        for(i = 0 ; i < desgloseformulario.cantidaddePrevia ; i++){

            if(desgloseformulario.detPrevia[i] == ""){

                var laqueva = ""
            }else{
                var laqueva = desgloseformulario.detPrevia[i].toUpperCase();
            }
        detallesnotas.innerHTML += `
        <div id="contenidoNombresNotas" class="contNN">
        <text type="text">PREVIA</text><input class="detPre" type="text" id="detpre${i}" value="${laqueva}">
            <input class="mmss" type="text" id="dur40${i}" value="${noindef(desgloseformulario.detDurPrevia[i])}">
           
        </div>       
    `
    }
    }
}

function formDetallarPimerT(a){

    var cantidaddePT
    var numXPT = a.primerT.substring(1);
    cantidaddePT = parseInt(numXPT)
    a.cantidaddePT = cantidaddePT


    document.getElementById("detallesnotas");
    if(a.detPT.length > 0){
        for(i = 0 ; i < a.cantidaddePT ; i++){

            var laqueva = ` PT ${(i + 1)}`
        detallesnotas.innerHTML += `
        <div id="contenidoNombresNotas" class="contNN">
        <text class="detPT" type="text" id="detpt${i}">${laqueva}</text>
            <input class="mmss" type="text" id="dur10${i}" value="${noindef(a.detDurPT[i])}">
            
        </div>       
    `
    }
    }
}

function formDetallarSegundoT(a){

    var cantidaddeST
    var numXST = a.segundoT.substring(1);
    cantidaddeST = parseInt(numXST)
    a.cantidaddeST = cantidaddeST


    document.getElementById("detallesnotas");
    if(a.detST.length > 0){
        for(i = 0 ; i < a.cantidaddeST ; i++){

            var laqueva = ` ST ${(i + 1)}`
        detallesnotas.innerHTML += `
        <div id="contenidoNombresNotas" class="contNN">
        <text class="detST" type="text" id="detpt${i}">${laqueva}</text>
            <input class="mmss" type="text" id="dur20${i}" value="${noindef(a.detDurST[i])}">
            
        </div>       
    `
    }
    }
}

function formNombresNotas(){
    if(desgloseformulario.nombresNotas[0].length > 0){
        document.getElementById("detallesnotas");
        for(let index in desgloseformulario.nombresNotas){
        detallesnotas.innerHTML += `
        <div id="contenidoNombresNotas" class="contNN">
        <text type="text">${desgloseformulario.nombresNotas[index]}</text>
            <input class="mmss" type="text" id="dur${index}" value="${noindef(desgloseformulario.duracionesNotas[index])}">
            
        </div>       
    `
    }
    }
}

function formDetallarPost(){

    var cantidaddePost
    var numXPost = desgloseformulario.post.substring(1);
    cantidaddePost = parseInt(numXPost)
    desgloseformulario.cantidaddePost = cantidaddePost


    document.getElementById("detallesnotas");
    if(desgloseformulario.detPost.length > 0){
        for(i = 0 ; i < desgloseformulario.cantidaddePost ; i++){

            if(desgloseformulario.detPost[i] == ""){

                var laqueva = ""
            }else{
                var laqueva = desgloseformulario.detPost[i].toUpperCase();
            }
        detallesnotas.innerHTML += `
        <div id="contenidoNombresNotas" class="contNN">
        <text type="text">POST</text><input class="detPost" type="text" id="detp${i}" value="${laqueva}">
            <input class="mmss" type="text" id="dur30${i}" value="${noindef(desgloseformulario.detDurPost[i])}">
           
        </div>       
    `
    }
    }
}

function formNombresArchivos(){

    document.getElementById("detallesnotas");

    var duraciones
    duraciones = desgloseformuFTP.duracionesItemsAlma.split("¬¬")

    if(desgloseformuFTP.contenido[0].length > 0){
        for(let index in desgloseformuFTP.contenido){
            detallesarchivos.innerHTML += `
        <div id="contenidoNombresArchivos" class="contAL">
        <text type="text">${desgloseformuFTP.contenido[index]}</text>
            <input class="mmssFTP" type="text" id="dur${index}" value="${noindef(duraciones[index])}">
            
        </div>       
    `
        }
    }


    if(desgloseformuFTP.cantidadIIF > 0){
        for(let index in desgloseformuFTP.infoInputFiles){
            detallesarchivos.innerHTML += `
        <div id="contenidoNombresArchivos" class="contAL">
        <text type="text">${desgloseformuFTP.infoInputFiles[index].nombre}</text>
            <input class="mmssFTP2" type="text" id="durAR${index}" value="${procDurReloj(procDurFTP(desgloseformuFTP.infoInputFiles[index].duracion))}">
            
        </div>       
    `
        }
    }
}

function genPT(a){
    arrayPT.splice(0, arrayPT.length)
    if(a.primerT != "" && a.primerT.includes("X")){
        var cantClips1 = parseInt(a.primerT.substring(1, a.primerT.length))
        for(i = 0; i < cantClips1; i++){
            arrayPT.push(a.camara + " PT " + (i+1) + " ")
            durPT.push("-")
        }
    }
    a.detPT = arrayPT
    a.detDurPT = durPT

    for(i = 0; i < master.length; i++){
        if(master[i].identificador == a.identificador){
            master[i].detPT = a.detPT
            master[i].detDurPT = a.detDurPT
        }
    }

}

function genST(a){
    arrayST.splice(0, arrayST.length)
    if(a.segundoT != "" && a.segundoT.includes("X")){
        var cantClips2 = parseInt(a.segundoT.substring(1, a.segundoT.length))
        for(i = 0; i < cantClips2; i++){
            arrayST.push(a.camara + " ST " + (i+1) + " ")
            durST.push("-")
        }
    }
    a.detST = arrayST
    a.detDurST = durST

    for(i = 0; i < master.length; i++){
        if(master[i].identificador == a.identificador){
            master[i].detST = a.detST
            master[i].detDurST = a.detDurST
        }
    }
}

function noindef(a){
    if(parseInt(a)>0){
        return a
        }else{
            return ""
    }
}

function infoprintCrudos(a){
    var resultadoinforme
    var ahora = new Date()
    var horas = ahora.getHours()
    if(horas < 10){
        horas = "0" + horas
    }
    var minutos = ahora.getMinutes()
    if(minutos < 10){
        minutos = "0" + minutos
    }

    var horamostrar = `<b><text class="lineainforme-1">${horas}:${minutos}</text></b><br>`;
    var infoencabezado = `<b><text class="lineainforme-1">Se ingestó:</text></b><br>`;

    var colorSpl = a.color.split("");
    var previaSpl = a.previa.split("");
    var primerTSpl = a.primerT.split("");
    var entreTSpl = a.entreT.split("");
    var segundoTSpl = a.segundoT.split("");
    var alargueSpl = a.alargue.split("");
    var penalesSpl = a.penales.split("");
    var postSpl = a.post.split("");


    if(colorSpl.length == 4){
        cm = (colorSpl[0]+colorSpl[1])
        cs = (colorSpl[2]+colorSpl[3])
        var colorX = `(${cm}' ${cs}")`;
            }else{
            var colorX = ""
    }

    if(colorSpl.length==3){
        cm = (colorSpl[0])
        cs = (colorSpl[1]+colorSpl[2])
        var colorX = `(0${cm}' ${cs}")`;
    }

    if(a.color.length==2){
        var colorX = `(00' ${a.color}")`;
    }

    if(a.color.length==1){
        var colorX = `(00' 0${a.color}")`;
    }

    if(a.color.includes("X")){
        var colorX = `(${a.color})`;
    }

    if(a.camara == ""){
        var infocolor = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - COLOR ${colorX}</text><br>`;
        }else{
            var infocolor = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - COLOR ${colorX}</text><br>`;
    }
    if(a.color == ""){
        infocolor = ""
    }

    ///// previa 
    if(previaSpl.length == 4){
        prem = (previaSpl[0]+previaSpl[1])
        pres = (previaSpl[2]+previaSpl[3])
        var previaX = `(${prem}' ${pres}")`;
            }else{
            var previaX = ""
    }

    if(previaSpl.length==3){
        prem = (previaSpl[0])
        pres = (previaSpl[1]+previaSpl[2])
        var previaX = `(0${prem}' ${pres}")`;
    }

    if(a.previa.length==2){
        var previaX = `(00' ${a.previa}")`;
    }

    if(a.previa.length==1){
        var previaX = `(00' 0${a.previa}")`;
    }

    if(a.previa.includes("X")){
        var previaX = `(${a.previa})`;
    }
    /// fin previa

    if(a.mododetallado4 == "0"){

        if(a.camara == ""){
            var infoprevia = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PREVIA ${previaX}</text><br>`;
            }else{
            var infoprevia = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PREVIA ${previaX}</text><br>`;
        }
    
        if(a.previa == ""){
            infoprevia = ""
        }

    }
    
    if(a.mododetallado4 == "1"){
        lineasInformePrevia.splice(0, lineasInformePrevia.length)
        if(a.camara == ""){
            for(i = 0 ; i < a.cantidaddePrevia; i++){
                lineasInformePrevia.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PREVIA ${a.detPrevia[i]} ${procDur(a.detDurPrevia[i])}</text><br>`)
            }
            infoprevia = lineasInformePrevia.join("")
        }else{
            for(i = 0 ; i < a.cantidaddePrevia; i++){
                lineasInformePrevia.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PREVIA ${a.detPrevia[i]} ${procDur(a.detDurPrevia[i])}</text><br>`)
            }
            infoprevia = lineasInformePrevia.join("")
        }
    }

    if(primerTSpl.length == 4){
        ptm = (primerTSpl[0]+primerTSpl[1])
        pts = (primerTSpl[2]+primerTSpl[3])
        var tiempoXpt = `(${ptm}' ${pts}")`;
            }else{
                var tiempoXpt = ""
    }

    if(primerTSpl.length==5){
        pth = primerTSpl[0]
        ptm = (primerTSpl[1]+primerTSpl[2])
        pts = (primerTSpl[3]+primerTSpl[4])
        var tiempoXpt = `(${pth}h ${ptm}' ${pts}")`;
        }

    if(a.primerT.includes("X")){
        var tiempoXpt = `(${a.primerT})`;
    }

    if(a.mododetallado1 == "1"){
        temporalborrar.splice(0,temporalborrar.length)
        if(a.camara == ""){
            for(i = 0; i < a.cantidaddePT; i++){
                var lineasInfPT
                lineasInfPT = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PT ${i + 1} ${procDur(a.detDurPT[i])}</text><br>`
    
                temporalborrar.push(lineasInfPT)
            }
    
            infopt = temporalborrar.join("");
        }else{
            for(i = 0; i < a.cantidaddePT; i++){
                var lineasInfPT
                lineasInfPT = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PT ${i + 1} ${procDur(a.detDurPT[i])}</text><br>`
    
                temporalborrar.push(lineasInfPT)
            }
            
            infopt = temporalborrar.join("");
        }

    }else{
        if(a.camara == ""){
            var infopt = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PT ${tiempoXpt}</text><br>`;
            }else{
                var infopt = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PT ${tiempoXpt}</text><br>`;
        }

        if(a.primerT == ""){
            infopt = ""
        }
    }

    if(entreTSpl.length == 4){
        etm = (entreTSpl[0]+entreTSpl[1])
        ets = (entreTSpl[2]+entreTSpl[3])
        var etiempoX = `(${etm}' ${ets}")`;
            }else{
            var etiempoX = ""
    }

    if(entreTSpl.length==3){
        etm = (entreTSpl[0])
        ets = (entreTSpl[1]+entreTSpl[2])
        var etiempoX = `(0${etm}' ${ets}")`;
    }

    if(a.entreT.includes("X")){
        var etiempoX = `(${a.entreT})`;
    }

    if(a.camara == ""){
        var infoet = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ET ${etiempoX}</text><br>`;
        }else{
            var infoet = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ET ${etiempoX}</text><br>`;
    }

    if(a.entreT == ""){
        infoet = ""
    }

    if(segundoTSpl.length == 4){
        stm = (segundoTSpl[0]+segundoTSpl[1])
        sts = (segundoTSpl[2]+segundoTSpl[3])
        var tiempo2Xpt = `(${stm}' ${sts}")`;
            }else{
                var tiempo2Xpt = ""
    }

    if(segundoTSpl.length==5){
        sth = segundoTSpl[0]
        stm = (segundoTSpl[1]+segundoTSpl[2])
        sts = (segundoTSpl[3]+segundoTSpl[4])
        var tiempo2Xpt = `(${sth}h ${stm}' ${sts}")`;
    }

    if(a.segundoT.includes("X")){
        var tiempo2Xpt = `(${a.segundoT})`;
    }

    if(a.mododetallado2 == "1"){
        temporalborrar.splice(0,temporalborrar.length)
        if(a.camara == ""){
            for(i = 0; i < a.cantidaddeST; i++){
                var lineasInfST
                lineasInfST = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ST ${i + 1} ${procDur(a.detDurST[i])}</text><br>`
    
                temporalborrar.push(lineasInfST)
            }
    
            infost = temporalborrar.join("");
            }else{
                for(i = 0; i < a.cantidaddeST; i++){
                    var lineasInfST
                    lineasInfST = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ST ${i + 1} ${procDur(a.detDurST[i])}</text><br>`
        
                    temporalborrar.push(lineasInfST)
                }
        
            infost = temporalborrar.join("");

        }

    }else{
        if(a.camara == ""){
            var infost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ST ${tiempo2Xpt}</text><br>`;
            }else{
                var infost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ST ${tiempo2Xpt}</text><br>`;
        }
    
        if(a.segundoT == ""){
            infost = ""
        }
    }

    if(alargueSpl.length == 4){
        atm = (alargueSpl[0]+alargueSpl[1])
        ats = (alargueSpl[2]+alargueSpl[3])
        var alaXT = `(${atm}' ${ats}")`;
            }else{
                var alaXT = ""
    }

    if(alargueSpl.length==3){
        atm = (alargueSpl[0])
        ats = (alargueSpl[1]+alargueSpl[2])
        var alaXT = `(0${atm}' ${ats}")`;
    }

    if(a.alargue.includes("X")){
        var alaXT = `(${a.alargue})`;
    }

    if(a.camara == ""){
        var infoala = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ALARGUE ${alaXT}</text><br>`;
        }else{
            var infoala = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ALARGUE ${alaXT}</text><br>`;
    }

    if(a.alargue == ""){
        infoala = ""
    }

    if(penalesSpl.length == 4){
        penm = (penalesSpl[0]+penalesSpl[1])
        pens = (penalesSpl[2]+penalesSpl[3])
        var penaXT = `(${penm}' ${pens}")`;
            }else{
                var penaXT = ""
    }

    if(penalesSpl.length==3){
        penm = (penalesSpl[0])
        pens = (penalesSpl[1]+penalesSpl[2])
        var penaXT = `(0${penm}' ${pens}")`;
    }

    if(a.penales.includes("X")){
        var penaXT = `(${a.penales})`;
    }

    if(a.camara == ""){
        var infopenales = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PENALES ${penaXT}</text><br>`;
        }else{
            var infopenales = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PENALES ${penaXT}</text><br>`;
    }

    if(a.penales == ""){
        infopenales = ""
    }   

    /////////////////////
    function informeNotas(){
        textoNotas.splice(0,textoNotas.length)
        if(desgloseformulario.nombresNotas[0].length > 0){
            if(desgloseformulario.camara.length > 0){
                for(let index in desgloseformulario.nombresNotas){
                    if(desgloseformulario.reduccion == "0"){
                    var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${desgloseformulario.categoria} - ${desgloseformulario.match} - ${desgloseformulario.camara} - POST NOTA ${desgloseformulario.nombresNotas[index]} ${procDur(desgloseformulario.duracionesNotas[index])}</text><br>`;
                    textoNotas.push(infonotasTemp)
                    }
                    if(desgloseformulario.reduccion == "1"){
                        var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${desgloseformulario.categoria} - ${desgloseformulario.match} - ${desgloseformulario.camara} - NOTA ${desgloseformulario.nombresNotas[index]} ${procDur(desgloseformulario.duracionesNotas[index])}</text><br>`;
                        textoNotas.push(infonotasTemp)
                    }
                }
            }
            if(desgloseformulario.camara.length == ""){
                for(let index in desgloseformulario.nombresNotas){
                    if(desgloseformulario.reduccion == "0"){
                        var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${desgloseformulario.categoria} - ${desgloseformulario.match} - POST NOTA ${desgloseformulario.nombresNotas[index]} ${procDur(desgloseformulario.duracionesNotas[index])}</text><br>`;
                        textoNotas.push(infonotasTemp)
                    }
                    if(desgloseformulario.reduccion == "1"){
                        var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${desgloseformulario.categoria} - ${desgloseformulario.match} - NOTA ${desgloseformulario.nombresNotas[index]} ${procDur(desgloseformulario.duracionesNotas[index])}</text><br>`;
                        textoNotas.push(infonotasTemp)
                    }
                    
                }
            }
        }
        var notasOK = textoNotas.join("")
        return notasOK
    }

    ////////////////////
    if(postSpl.length == 4){
        postm = (postSpl[0]+postSpl[1])
        posts = (postSpl[2]+postSpl[3])
        var postXT = `(${postm}' ${posts}")`;
            }else{
                var postXT = ""
    }

    if(postSpl.length==3){
        postm = (postSpl[0])
        posts = (postSpl[1]+postSpl[2])
        var postXT = `(0${postm}' ${posts}")`;
    }

    if(postSpl.length==5){
        posth = postSpl[0]
        postm = (postSpl[1]+postSpl[2])
        posts = (postSpl[3]+postSpl[4])
        var postXT = `(${posth}h ${postm}' ${posts}")`;
    }

    if(a.post.includes("X")){
        var postXT = `(${a.post})`;
    }

    if(a.mododetallado3 == "0"){
        if(a.camara == ""){
            var infopost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - POST ${postXT}</text><br>`;
            }else{
                var infopost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - POST ${postXT}</text><br>`;
        }

        if(a.post == ""){
            infopost = ""
        }  
        
    }else{
        lineasInformePost.splice(0, lineasInformePost.length)
        if(a.camara == ""){
            for(i = 0 ; i < a.cantidaddePost; i++){
                lineasInformePost.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - POST ${a.detPost[i].toUpperCase()} ${procDur(a.detDurPost[i])}</text><br>`)
            }
            infopost = lineasInformePost.join("")
        }else{
                for(i = 0 ; i < a.cantidaddePost; i++){
                    lineasInformePost.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - POST ${a.detPost[i].toUpperCase()} ${procDur(a.detDurPost[i])}</text><br>`)
                }
                infopost = lineasInformePost.join("")
        }
    }

    resultadoinforme = `${horamostrar}${infoencabezado}${infocolor}${infoprevia}${infopt}${infoet}${infost}${infoala}${infopenales}${informeNotas()}${infopost}`

    return resultadoinforme

}

function procesadorNotas(a){
    const notas2 = []
    const notas4 = []
    
    var cadenaNotas = a
    cadenaNotas = cadenaNotas.toUpperCase();

    if(cadenaNotas.includes("NOTAS")||cadenaNotas.includes("POST")){
        var busY = cadenaNotas.indexOf(" Y ");
        subsAntesY = cadenaNotas.substring(0, busY);
        subsDespuesY = cadenaNotas.substring(busY + 3,);
        cadenaNotas = subsAntesY + ", " + subsDespuesY;
        
        var notasSpl = cadenaNotas.split("");
        
        for(let words of notasSpl){
            if(words == "\n" || words == "\t"){
            }else{
                notas2.push(words)
            }
        }
        
        var notas25 = notas2.join("");
        
        var notas3 = notas25.split("");
        
        for(let words of notas3){
            if(words == ","){
                notas4.push(" . ")
            }else{
                notas4.push(words)
            }
        }
        
        var notas5 = notas4.join("")
        
        var busNombresN = notas5.indexOf("NOTA")
        
        var subsN = notas5.substring(busNombresN + 4)
        
        var busNombresP = notas5.indexOf("POST")
        
        var subsP = notas5.substring(busNombresP + 4)
        
        if(subsP.length > subsN.length){
            busref = subsN;
        }else{
            busref = subsP
        }
        
        var sepNot1 = busref.split(".")
        

        var result = quitarmono(sepNot1)
        return result
    
        function quitarmono(a){
            const armado3 = []
            for(let obj of a){
                var tempSpl = obj.split(" ")
                const armado2 = []
                for(let pal of tempSpl){
                    const armado1 = []
                    if(pal.length == 1||pal == ""||pal == " "){
                    }else{
                        armado1.push(pal)
                    }
                    armado2.push(armado1)
                }
                var armadotemp = armado2.join(" ")
                
                armado3.push(armadotemp)
                

                
            }

            const armado4 = []
            for(let nombre of armado3){

                if(nombre.length < 1){
                    }else{
                        nombre = nombre.trim()
                        armado4.push(nombre)

                        

                    }
            }
            return armado4
                
                
                 
                
        }
 
    }else{
    armado4 = cadenaNotas.split("\n")
    return armado4
    }
}

function randongen(){
    var nuip = Math.random();
    var nuipst = nuip.toString();
    nuipst = nuipst.substring(2);
    let date = new Date();
    return `${nuipst}${date.toISOString().split()[0]}`
}

function infoprintFTP(a){

    var ahora = new Date()
    var horas = ahora.getHours()
    if(horas < 10){
        horas = "0" + horas
    }
    var minutos = ahora.getMinutes()
    if(minutos < 10){
        minutos = "0" + minutos
    }

    var horamostrar = `<text class="lineainforme-1">${horas}:${minutos}</text><br>`;




    var duraciones
    duraciones = a.duracionesItemsAlma.split("¬¬")
    if(a.contenidoB.length > 1){
        lineasInfArch.splice(0,lineasInfArch.length)
        for(let index in a.contenido){
            lineainforme = `<text class="lineainforme">+ ${a.clase} ${a.origen} - ${a.contenido[index]} ${procDur(duraciones[index])}</text><br>`
            lineasInfArch.push(lineainforme)
        }

        resultadoInformeFTP = `<b>${horamostrar}<text class="lineainforme-1">Se ingestó:</text></b><br>${lineasInfArch.join("")}`
    }else{
        resultadoInformeFTP = `<b>${horamostrar}<text class="lineainforme-1">Se ingestó:</text></b>`
    }

    if(a.cantidadIIF > 0){
        lineasInfArch2.splice(0,lineasInfArch2.length)
        for(let index in a.infoInputFiles){
            linea = a.infoInputFiles[index].nombre
            busUlPun = linea.lastIndexOf(".")
            linea = linea.substring(0,busUlPun)
            if(linea.includes(" - ")){
                busEGME = linea.indexOf(" - ")
                linea = linea.substring(busEGME + 3)
            }
            lineainforme2 = `<br><text class="lineainforme">+ ${a.clase} ${a.origen} - ${linea} ${procDur(procDurFTP(a.infoInputFiles[index].duracion))}</text>`
            lineasInfArch2.push(lineainforme2)
        }

        resultadoArchivos2FTP = lineasInfArch2.join("")

    }else{resultadoArchivos2FTP = ""}

    resultadoInformeFTPUNIFICADO = resultadoInformeFTP + resultadoArchivos2FTP;
    return resultadoInformeFTPUNIFICADO
}

function comenzarLaPapa() {
    multiuso1.splice(0,multiuso1.length)
    multiuso2.splice(0,multiuso2.length)
    if(desgloseformuFTP.cantidadIIF > 0){
        desgloseformuFTP.infoInputFiles.splice(0, desgloseformuFTP.infoInputFiles.length)
    }
    infoInputFiles.splice(0,infoInputFiles.length)
    var files = this.files;
    myVideos.splice(0, myVideos.length)
    for(let file of files){
        myVideos.push(file);
    }

    intervalos()
    function intervalos(){
        var contador = 0;
        var saludo = function(){
            procDuraciones(myVideos[contador])
            contador++;
            if(contador === myVideos.length){
                clearInterval(intervalo)
            }
        }
        var intervalo = setInterval(saludo,1)
    }
}

function procDuraciones(a){
  var video = document.createElement('video');
  video.preload = 'metadata';
  video.src = URL.createObjectURL(a);;
  video.onloadedmetadata = function() {
    var duration
    duration = video.duration;
    updateInfos(a.name, duration);
  }
}

function updateInfos(a,b){
    multiuso1.push(a)
    desgloseformuFTP.infoInputFilesAlmaN = multiuso1.join("-/+/-")
    multiuso2.push(b.toString())
    desgloseformuFTP.infoInputFilesAlmaD = multiuso2.join("-/+/-")
    desgloseformuFTP.cantidadIIF = multiuso1.length
    extraer(desgloseformuFTP.id)
    transferdataFTP()
}

function transferdataFTP(){
    for(i = 0; i < master.length; i++){
        if(master[i].identificador == desgloseformuFTP.identificador){
            master[i] = desgloseformuFTP


        }
    }
}

function procDurFTP(a){
    ho = Math.floor(a/3600)
    if(ho==0){
        h = ""
    }else{
        h = `${ho}h `
    }
    m = Math.floor(a/60) - (60*ho)
    sb = a%60
    s = Math.floor(a%60)
    c = (sb%1)
    if(s<10){
        s = `0${s}`
    }
    f60 = ""
    deco = a - Math.trunc(a)
    dec = (Math.floor(deco*100))
    f60 = (Math.floor(dec * 0.6 ))
    f50 = (Math.floor(dec * 0.5 ))
    if(f60<10){
        f60 = `0${f60}`
    }
    if(f50<10){
        f50 = `0${f50}`
    }
    //return `(${h}${m}' ${s}" ${f60}^)`
    return `${h}${m}${s}`
}

function desempaquetarIIF(){
    infoInputFiles.splice(0,infoInputFiles.length)
    var nombres
    var duraciones
    nombres = desgloseformuFTP.infoInputFilesAlmaN.split("-/+/-")
    duraciones = desgloseformuFTP.infoInputFilesAlmaD.split("-/+/-")
    for(let index in nombres){

        infoInputFiles.push(new Arch(nombres[index], transfNum(duraciones[index])))
        desgloseformuFTP.infoInputFiles = infoInputFiles
    }
    return infoInputFiles
}

function transfNum(a){
    var buspun
    buspun = a.indexOf(".")
    subsdec = a.substring(buspun+1)
    var entero
    entero = parseInt(a)
    var dec
    decL = parseInt(subsdec)
    basecalculo = subsdec.length
    numred = 10 * basecalculo
    var numred
    numred = Math.pow(10, basecalculo);
    decReal = decL / numred
    reconstruccionDur = entero + decReal
    return reconstruccionDur
}

function gendb2unif(){

    multiuso4.splice(0,multiuso4.length)
    multiuso5.splice(0,multiuso5.length)
    multiuso6.splice(0,multiuso6.length)
    multiuso7.splice(0,multiuso7.length)

    for(let index in master){

        if(master[index].clase == "FTP" && master[index].status == "editado"){
            var nombresCaja
            var allN
            var allD

            nombresCaja = ContenidoFTPunificado(master[index].contenidoB)
            duracionesCaja = master[index].duracionesItemsAlma.split("¬¬")
            allN = master[index].infoInputFilesAlmaN.split("-/+/-")
            allD = master[index].infoInputFilesAlmaD.split("-/+/-")

            if(master[index].status == "virgo"){
                repeU = 0
            }else{
                if(master[index].contenidoB == ""){
                    repeO1 = 0
                }else{
                    repeO1 = nombresCaja.length
                }
                if(allN[0].length < 2){
                    repeO2 = 0
                }else{
                    repeO2 = allN.length
                }
                repeU = repeO1 + repeO2
    
            }

            if(repeU > 0){
                for(i = 0 ; i < repeU; i++){
                    multiuso6.push(master[index].origen)
                }

            }

            for(i = 0; i < nombresCaja.length; i++){
                if(nombresCaja[i].length > 0){

                    multiuso4.push(nombresCaja[i])
                    multiuso5.push(duracionesCaja[i])
                }
            }

            for(i = 0; i < allN.length; i++){
                if(allN[i].length > 1){
                    multiuso4.push(limpiarNombreArchivo(allN[i]))
                    multiuso5.push(procDurFTP(allD[i]))
                }
            }
        }   
    }

    for(let index in multiuso4){
        linea = `<text class="lineainforme">+ FTP ${multiuso6[index]} - ${multiuso4[index]} ${procDur(multiuso5[index])}</text><br>`
        multiuso7.push(linea)

    }

}

function limpiarNombreArchivo(a){
    if(a.includes(" - ")){
        busEGME = a.indexOf(" - ")
        a = a.substring(busEGME + 3)
        }else{
        a = a
    }

    if(a.includes(".")){
        busUlPun = a.lastIndexOf(".")
        a = a.substring(0,busUlPun)
    }

    return a
}

function gendb1unif(){
    multiuso10.splice(0, multiuso10.length)
    multiuso11.splice(0, multiuso11.length)
    for(let index in db1){
        matchPos = `${db1[index].match}¬¬${index}`
        multiuso10.push(matchPos)

    }
    var ordenado = multiuso10.sort();

    for(let index in ordenado){
        temp = ordenado[index].split("¬¬")
        bloque = `${infoprintCrudosU(db1[parseInt(temp[1])])}<br>`
        multiuso11.push(bloque)
    }
    

    infoAlfa = multiuso11.join("")
    
    var ahora = new Date()
    var horas = ahora.getHours()
    if(horas < 10){
        horas = "0" + horas
    }
    var minutos = ahora.getMinutes()
    if(minutos < 10){
        minutos = "0" + minutos
    }

    var horamostrar = `<text class="lineainforme-1">${horas}:${minutos}</text><br>`;

    var infoencabezado = `<b>${horamostrar}<text class="lineainforme-1">Se ingestó:</text></b><br>`;
    
    resultadofinal = `${infoencabezado}${infoAlfa}`

    return resultadofinal
}

function infoprintCrudosU(a){

    var resultadoinforme

    var colorSpl = a.color.split("");
    var previaSpl = a.previa.split("");
    var primerTSpl = a.primerT.split("");
    var entreTSpl = a.entreT.split("");
    var segundoTSpl = a.segundoT.split("");
    var alargueSpl = a.alargue.split("");
    var penalesSpl = a.penales.split("");
    var postSpl = a.post.split("");

    if(colorSpl.length == 4){
        cm = (colorSpl[0]+colorSpl[1])
        cs = (colorSpl[2]+colorSpl[3])
        var colorX = `(${cm}' ${cs}")`;
            }else{
            var colorX = ""
    }

    if(colorSpl.length==3){
        cm = (colorSpl[0])
        cs = (colorSpl[1]+colorSpl[2])
        var colorX = `(0${cm}' ${cs}")`;
    }

    if(a.color.length==2){
        var colorX = `(00' ${a.color}")`;
    }

    if(a.color.length==1){
        var colorX = `(00' 0${a.color}")`;
    }

    if(a.color.includes("X")){
        var colorX = `(${a.color})`;
    }

    if(a.camara == ""){
        var infocolor = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - COLOR ${colorX}</text><br>`;
        }else{
            var infocolor = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - COLOR ${colorX}</text><br>`;
    }
    if(a.color == ""){
        infocolor = ""
    }

    if(previaSpl.length == 4){
        prem = (previaSpl[0]+previaSpl[1])
        pres = (previaSpl[2]+previaSpl[3])
        var previaX = `(${prem}' ${pres}")`;
            }else{
            var previaX = ""
    }

    if(previaSpl.length==3){
        prem = (previaSpl[0])
        pres = (previaSpl[1]+previaSpl[2])
        var previaX = `(0${prem}' ${pres}")`;
    }

    if(a.previa.length==2){
        var previaX = `(00' ${a.previa}")`;
    }

    if(a.previa.length==1){
        var previaX = `(00' 0${a.previa}")`;
    }

    if(a.previa.includes("X")){
        var previaX = `(${a.previa})`;
    }
    
    if(a.mododetallado4 == "0"){

        if(a.camara == ""){
            var infoprevia = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PREVIA ${previaX}</text><br>`;
            }else{
            var infoprevia = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PREVIA ${previaX}</text><br>`;
        }
    
        if(a.previa == ""){
            infoprevia = ""
        }

        
    }
    
    if(a.mododetallado4 == "1"){
        lineasInformePrevia.splice(0, lineasInformePrevia.length)
        if(a.camara == ""){
            for(i = 0 ; i < a.cantidaddePrevia; i++){
                lineasInformePrevia.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PREVIA ${a.detPrevia[i]} ${procDur(a.detDurPrevia[i])}</text><br>`)
            }
            infoprevia = lineasInformePrevia.join("")
        }else{
            for(i = 0 ; i < a.cantidaddePrevia; i++){
                lineasInformePrevia.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PREVIA ${a.detPrevia[i]} ${procDur(a.detDurPrevia[i])}</text><br>`)
            }
            infoprevia = lineasInformePrevia.join("")
        }
    }

    if(primerTSpl.length == 4){
        ptm = (primerTSpl[0]+primerTSpl[1])
        pts = (primerTSpl[2]+primerTSpl[3])
        var tiempoXpt = `(${ptm}' ${pts}")`;
            }else{
                var tiempoXpt = ""
    }

    if(primerTSpl.length==5){
        pth = primerTSpl[0]
        ptm = (primerTSpl[1]+primerTSpl[2])
        pts = (primerTSpl[3]+primerTSpl[4])
        var tiempoXpt = `(${pth}h ${ptm}' ${pts}")`;
        }

    if(a.primerT.includes("X")){
        var tiempoXpt = `(${a.primerT})`;
    }

    if(a.mododetallado1 == "1"){
        temporalborrar.splice(0,temporalborrar.length)
        if(a.camara == ""){
            for(i = 0; i < a.cantidaddePT; i++){
                var lineasInfPT
                lineasInfPT = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PT ${i + 1} ${procDur(a.detDurPT[i])}</text><br>`
    
                temporalborrar.push(lineasInfPT)
            }
    
            infopt = temporalborrar.join("");
        }else{
            for(i = 0; i < a.cantidaddePT; i++){
                var lineasInfPT
                lineasInfPT = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PT ${i + 1} ${procDur(a.detDurPT[i])}</text><br>`
    
                temporalborrar.push(lineasInfPT)
            }
            
            infopt = temporalborrar.join("");
        }

    }else{
        if(a.camara == ""){
            var infopt = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PT ${tiempoXpt}</text><br>`;
            }else{
                var infopt = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PT ${tiempoXpt}</text><br>`;
        }

        if(a.primerT == ""){
            infopt = ""
        }
    }








    if(entreTSpl.length == 4){
        etm = (entreTSpl[0]+entreTSpl[1])
        ets = (entreTSpl[2]+entreTSpl[3])
        var etiempoX = `(${etm}' ${ets}")`;
            }else{
                var tiempoXpt = ""
    }

    if(entreTSpl.length==3){
        etm = (entreTSpl[0])
        ets = (entreTSpl[1]+entreTSpl[2])
        var etiempoX = `(0${etm}' ${ets}")`;
    }

    if(a.entreT.includes("X")){
        var etiempoX = `(${a.entreT})`;
    }

    if(a.camara == ""){
        var infoet = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ET ${etiempoX}</text><br>`;
        }else{
            var infoet = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ET ${etiempoX}</text><br>`;
    }

    if(a.entreT == ""){
        infoet = ""
    }

    if(segundoTSpl.length == 4){
        stm = (segundoTSpl[0]+segundoTSpl[1])
        sts = (segundoTSpl[2]+segundoTSpl[3])
        var tiempo2Xpt = `(${stm}' ${sts}")`;
            }else{
                var tiempo2Xpt = ""
    }

    if(segundoTSpl.length==5){
        sth = segundoTSpl[0]
        stm = (segundoTSpl[1]+segundoTSpl[2])
        sts = (segundoTSpl[3]+segundoTSpl[4])
        var tiempo2Xpt = `(${sth}h ${stm}' ${sts}")`;
    }

    if(a.segundoT.includes("X")){
        var tiempo2Xpt = `(${a.segundoT})`;
    }

    if(a.mododetallado2 == "1"){
        temporalborrar.splice(0,temporalborrar.length)
        if(a.camara == ""){
            for(i = 0; i < a.cantidaddeST; i++){
                var lineasInfST
                lineasInfST = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ST ${i + 1} ${procDur(a.detDurST[i])}</text><br>`
    
                temporalborrar.push(lineasInfST)
            }
    
            infost = temporalborrar.join("");

        }else{
            for(i = 0; i < a.cantidaddeST; i++){
                var lineasInfST
                lineasInfST = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ST ${i + 1} ${procDur(a.detDurST[i])}</text><br>`
    
                temporalborrar.push(lineasInfST)
            }
    
            infost = temporalborrar.join("");


        }

    }else{
        if(a.camara == ""){
            var infost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ST ${tiempo2Xpt}</text><br>`;
            }else{
                var infost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ST ${tiempo2Xpt}</text><br>`;
        }
    
        if(a.segundoT == ""){
            infost = ""
        }
    }

    if(alargueSpl.length == 4){
        atm = (alargueSpl[0]+alargueSpl[1])
        ats = (alargueSpl[2]+alargueSpl[3])
        var alaXT = `(${atm}' ${ats}")`;
            }else{
                var alaXT = ""
    }

    if(alargueSpl.length==3){
        atm = (alargueSpl[0])
        ats = (alargueSpl[1]+alargueSpl[2])
        var alaXT = `(0${atm}' ${ats}")`;
    }

    if(a.alargue.includes("X")){
        var alaXT = `(${a.alargue})`;
    }

    if(a.camara == ""){
        var infoala = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ALARGUE ${alaXT}</text><br>`;
        }else{
            var infoala = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - ALARGUE ${alaXT}</text><br>`;
    }

    if(a.alargue == ""){
        infoala = ""
    }

    if(penalesSpl.length == 4){
        penm = (penalesSpl[0]+penalesSpl[1])
        pens = (penalesSpl[2]+penalesSpl[3])
        var penaXT = `(${penm}' ${pens}")`;
            }else{
                var penaXT = ""
    }

    if(penalesSpl.length==3){
        penm = (penalesSpl[0])
        pens = (penalesSpl[1]+penalesSpl[2])
        var penaXT = `(0${penm}' ${pens}")`;
    }

    if(a.penales.includes("X")){
        var penaXT = `(${a.penales})`;
    }

    if(a.camara == ""){
        var infopenales = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - PENALES ${penaXT}</text><br>`;
        }else{
            var infopenales = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - PENALES ${penaXT}</text><br>`;
    }

    if(a.penales == ""){
        infopenales = ""
    }   

    /////////////////////
    function informeNotasU(a){
        multiuso12.splice(0,multiuso12.length)
        if(a.nombresNotas[0].length > 0){
            if(a.camara.length > 0){
                for(let index in a.nombresNotas){
                    if(a.reduccion == "0"){
                    var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - POST NOTA ${a.nombresNotas[index]} ${procDur(a.duracionesNotas[index])}</text><br>`;
                    multiuso12.push(infonotasTemp)
                    }
                    if(a.reduccion == "1"){
                        var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - NOTA ${a.nombresNotas[index]} ${procDur(a.duracionesNotas[index])}</text><br>`;
                        multiuso12.push(infonotasTemp)
                    }
                }
            }
            if(a.camara.length == ""){
                for(let index in a.nombresNotas){
                    if(a.reduccion == "0"){
                        var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - POST NOTA ${a.nombresNotas[index]} ${procDur(a.duracionesNotas[index])}</text><br>`;
                        multiuso12.push(infonotasTemp)
                    }
                    if(a.reduccion == "1"){
                        var infonotasTemp = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - NOTA ${a.nombresNotas[index]} ${procDur(a.duracionesNotas[index])}</text><br>`;
                        multiuso12.push(infonotasTemp)
                    }
                    
                }
            }
        }
        var notasOK = multiuso12.join("")
        return notasOK
    }

    ////////////////////
    if(postSpl.length == 4){
        postm = (postSpl[0]+postSpl[1])
        posts = (postSpl[2]+postSpl[3])
        var postXT = `(${postm}' ${posts}")`;
            }else{
                var postXT = ""
    }

    if(postSpl.length==3){
        postm = (postSpl[0])
        posts = (postSpl[1]+postSpl[2])
        var postXT = `(0${postm}' ${posts}")`;
    }

    if(postSpl.length==5){
        posth = postSpl[0]
        postm = (postSpl[1]+postSpl[2])
        posts = (postSpl[3]+postSpl[4])
        var postXT = `(${posth}h ${postm}' ${posts}")`;
    }

    if(a.post.includes("X")){
        var postXT = `(${a.post})`;
    }

    if(a.mododetallado3 == "0"){
        if(a.camara == ""){
            var infopost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - POST ${postXT}</text><br>`;
            }else{
                var infopost = `<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara} - POST ${postXT}</text><br>`;
        }

        if(a.post == ""){
        infopost = ""
    }  
    }else{
        lineasInformePost.splice(0, lineasInformePost.length)
        if(a.camara == ""){
            for(i = 0 ; i < a.cantidaddePost; i++){
                lineasInformePost.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - POST ${a.detPost[i].toUpperCase()} ${procDur(a.detDurPost[i])}</text><br>`)
            }
            infopost = lineasInformePost.join("")
        }else{
                for(i = 0 ; i < a.cantidaddePost; i++){
                    lineasInformePost.push(`<text class="lineainforme">+ CRUDOS ${a.categoria} - ${a.match} - ${a.camara}  - POST ${a.detPost[i].toUpperCase()} ${procDur(a.detDurPost[i])}</text><br>`)
                }
                infopost = lineasInformePost.join("")
        }
    }

    resultadoinforme = `${infocolor}${infoprevia}${infopt}${infoet}${infost}${infoala}${infopenales}${informeNotasU(a)}${infopost}`

    return resultadoinforme

}

/*
function copiarinforme(){
    document.getElementById("titulopagina").select();
}


*/
