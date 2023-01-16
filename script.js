let Button                = document.querySelector('.Button-Gloria');
let TabelOut               = document.querySelector('.TabelOutGloria');

function DataMahasiswa (){

    var Nim                     = (document.FormGloria.NimInput.value);
    var Nama                    = (document.FormGloria.NamaInput.value);
    var Jemiskelamin            = (document.FormGloria.JemiskelaminInput.value);
    var Agama                   = (document.FormGloria.AgamaInput.value);
    var Jurusan                 = (document.FormGloria.JurusanInput.value);
    var Komentar                = (document.FormGloria.KomentarInput.value);
    var Kawin         = "";
    var BelumKawin    = "";
    
    if (document.FormGloria.StatusInput.checked == true){Kawin = "Kawin";}
    else {BelumKawin = " Belum Kawin";}


    const tr = document.createElement ('tr');
    TabelOut.appendChild(tr)

    const td1 = document.createElement ('td');
    td1.textContent = Nim;
    tr.appendChild(td1)

    const td2 = document.createElement ('td');
    td2.textContent = Nama;
    tr.appendChild(td2)

    const td3 = document.createElement ('td');
    td3.textContent = Jemiskelamin;
    tr.appendChild(td3)

    const td4 = document.createElement ('td');
    td4.textContent = Agama;
    tr.appendChild(td4)

    const td5 = document.createElement ('td');
    td5.textContent =  Kawin+ ' '+BelumKawin ;
    tr.appendChild(td5)

    const td6 = document.createElement ('td');
    td6.textContent = Jurusan;
    tr.appendChild(td6)

    const td7 = document.createElement ('td');
    td7.textContent = Komentar;
    tr.appendChild(td7)
}

Button.addEventListener('click',DataMahasiswa)