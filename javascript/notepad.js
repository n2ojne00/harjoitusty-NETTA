
document.getElementById("notepad").addEventListener("click", addNote);
let body = document.getElementById("noted");
let tarkea = document.getElementById("tarkia");

function addNote() {
        let p = document.createElement("p");
        let name = document.getElementById("worker").value;
        let date = new Date();
        let formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
      
        if (document.getElementById("important").checked) {
          p.classList.add("important");
          p.innerHTML = `<span>${name} - ${formattedDate}.</span><br>${document.getElementById("viesti").value}`;
          tarkea.insertBefore(p, tarkea.firstChild);
          if (tarkea.firstChild.nodeName === "HR") {
            tarkea.removeChild(tarkea.firstChild);
          }
          tarkea.insertBefore(document.createElement("hr"), tarkea.firstChild);
        } else {
          p.innerHTML = `<span>${name} - ${formattedDate}.</span><br>${document.getElementById("viesti").value}`;
          body.insertBefore(p, body.firstChild);
          if (body.firstChild.nodeName === "HR") {
            body.removeChild(body.firstChild);
          }
          body.insertBefore(document.createElement("hr"), body.firstChild);
        }
      }


function yhteystiedotHKI() {
    var x = document.getElementById('hkicontact');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function yhteystiedotKUP() {
    var x = document.getElementById('kupcontact');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function yhteystiedotLAP() {
    var x = document.getElementById('lapcontact');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function yhteystiedotOULU() {
    var x = document.getElementById('oulucontact');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}



