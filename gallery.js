//js gallery management code
  
// function for open image in full view
    function openFullView(imageUrl, name) {
      document.getElementById("full-view-image").src = imageUrl;
      document.getElementById("full-view-name").textContent = name;
      document.getElementById("download-link").href = imageUrl;
      document.getElementById("download-link").setAttribute("download", name + ".jpg");
      document.getElementById("full-view").style.display = "flex";
    }

// function for close button
    function closeFullView() {
      document.getElementById("full-view").style.display = "none";
    }

// function for download image button
    function downloadImage() {
      var downloadLink = document.getElementById("download-link");
      var imageUrl = downloadLink.href;
      var fileName = downloadLink.getAttribute("download");
      var a = document.createElement("a");
      a.href = imageUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
   }

// function for opening file when click on more info button
  function redirectToMoreInfoPage(name) {
  if (name === "AHSAN ABDULLAH") {
    window.location.href = "ahsan.html";
  } else if (name === "ALI RAZA") {
    window.location.href = "aliraza.html";
  } else if (name === "MUHAMMAD DAIM") {
    window.location.href = "daim.html";
  } else if (name === "FAHAD ILYAS") {
    window.location.href = "fahad.html";
  } else if (name === "Muhammad Rehan Saleem ") {
    window.location.href = "rehan.html";
  } else if (name === "MUHAMMAD HANZALA") {
    window.location.href = "hanzala.html";
  } else if (name === "MUHAMMAD IBRAR ZAFAR") {
    window.location.href = "ibrar.html";
  } else if (name === "SHAHZAD NAWAZ") {
    window.location.href = "Sheezzi.html";
  } else if (name === "VINOD KUMAR ") {
    window.location.href = "Vinod.html";
  } else if (name === "MUHAMMAD NOUMAN SAEED") {
    window.location.href = "nouman.html";
  } else if (name === "MUBEEN ABBAS") {
    window.location.href = "mubeen.html";
  } else if (name === "MUHAMMAD RAHEEL AHMED") {
    window.location.href = "raheel.html";
  } else if (name === "MUHAMMAD SAQIB") {
    window.location.href = "saqib.html";
  } else if (name === "FAKHIR E MUHAMMAD ") {
    window.location.href = "fakhir.html";
  } else if (name === "MUHAMMAD ABID RAZA ") {
    window.location.href = "abid.html";
  } else if (name === "ABDUL REHMAN") {
    window.location.href = "abrehman.html";
  } else if (name === "ARSLAN SARWAR ") {
    window.location.href = "arslan.html";
  } else if (name === "ABDULLAH KHURSHID ") {
    window.location.href = "aryan.html";
  } else if (name === "FAWAD UR REHMAN ") {
    window.location.href = "fawad.html";
  } else if (name === "MUHAMMAD HAFEEZ ") {
    window.location.href = "hafeez.html";
  } else if (name === "MOHSIN ALI ") {
    window.location.href = "mohsin.html";
  } else if (name === "MUHAMMAD NASEER AHMED") {
    window.location.href = "naseer.html";
  } else if (name === "MUZAMAL FAROOQ ") {
    window.location.href = "muzamil.html";
  } else if (name === "SYED UMAR ALI ") {
    window.location.href = "shah.html";
  } else if (name === "MUHAMMAD WALEED ") {
    window.location.href = "waleed.html";
  } else if (name === "MUHAMMAD WAQAS") {
    window.location.href = "waqas.html";
  } else if (name === "MUHAMMAD YASIR ") {
    window.location.href = "yasir.html";
  } else if (name === "ABDUL QAYYUM ") {
    window.location.href = "qayyum.html";
  } else if (name === "JAFAR ALI ") {
    window.location.href = "jafar.html";
  } else if (name === "Muhammad AWAIS ") {
    window.location.href = "awais.html";
  } else if (name === "Muhammad Abdullah ") {
    window.location.href = "abdullah.html";
  } else if (name === "BASHAR AHMED ") {
    window.location.href = "bashar.html";
  } else if (name === "ABDUL REHMAN ") {
    window.location.href = "abrehman2.html";
  } else if (name === "MUHAMMAD HASSAN ") {
    window.location.href = "hassan.html";
  } else if (name === "SAMIULLAH") {
    window.location.href = "samiullah.html";
  } else if (name === "MUHAMMAD FARAZ") {
    window.location.href = "faraz.html";
  } else if (name === "AQEEL UR REHMAN ") {
    window.location.href = "aqeel.html";
  } else if (name === "ABDULLAH MUMTAZ") {
    window.location.href = "abmumtaz.html";
  } else if (name === "Masood Ahmad") {
    window.location.href = "masood.html";
  } else if (name === "MUHAMMAD AHMAD") {
    window.location.href = "ahmad.html";
  } else if (name === "ANAS MUNEER ALVI") {
    window.location.href = "alvi.html";
  }
    else if (name === "MOHAMMAD SALEM") {
    window.location.href = "salim.html";
  }



    // Add more conditions for other names if needed
  }
