function q1(element, corr) {
  var corrID = corr;

  if (corrID == "corr") {
    element.classList.add('corr1');
    element.classList.add('corr');
  } else {
    element.classList.add('incorr1');
    element.classList.add('incorr');
    document.getElementById('corr-ans1').classList.add('corr1');
    document.getElementById('corr-ans1').classList.add('corr');
  }


  var incorrBtn1 = document.getElementsByClassName('incorr1');
  for (var i = 0; i < incorrBtn1.length; i++) {
    incorrBtn1[i].innerHTML = `<div style="display: flex; align-items: center;"><span class="material-symbols-outlined symbols">cancel</span></div><div style="margin-right:50px">` + incorrBtn1[i].innerHTML + `</div>`;
  }
  var corrBtn1 = document.getElementsByClassName('corr1');
  for (var i = 0; i < corrBtn1.length; i++) {
    corrBtn1[i].innerHTML = `<div style="display: flex; align-items: center;"><span class="material-symbols-outlined symbols">check_circle</span></div><div style="margin-right:50px">` + corrBtn1[i].innerHTML + `</div>`;
  }
  var allButtons1 = document.getElementsByClassName('ans1');
    for (var i = 0; i < allButtons1.length; i++) {
      allButtons1[i].disabled = true;
    }
  var allSymbols = document.getElementsByClassName('symbols');
    for (var i = 0; i < allSymbols.length; i++) {
      allSymbols[i].style.animation = "show 1s ease forwards";
    }
}


function q2(element, corr) {
  var corrID = corr;

  if (corrID == "corr") {
    element.classList.add('corr2');
    element.classList.add('corr');
  } else {
    element.classList.add('incorr2');
    element.classList.add('incorr');
    document.getElementById('corr-ans2').classList.add('corr2');
    document.getElementById('corr-ans2').classList.add('corr');
  }

  var allButtons2 = document.getElementsByClassName('ans2');
    for (var i = 0; i < allButtons2.length; i++) {
      allButtons2[i].disabled = true;
    }

  var incorrBtn2 = document.getElementsByClassName('incorr2');
  for (var i = 0; i < incorrBtn2.length; i++) {
    incorrBtn2[i].innerHTML = `<div style="display: flex; align-items: center;"><span class="material-symbols-outlined symbols">cancel</span></div><div style="margin-right:50px">` + incorrBtn2[i].innerHTML + `</div>`;
  }
  var corrBtn2 = document.getElementsByClassName('corr2');
  for (var i = 0; i < corrBtn2.length; i++) {
    corrBtn2[i].innerHTML = `<div style="display: flex; align-items: center;"><span class="material-symbols-outlined symbols">check_circle</span></div><div style="margin-right:50px">` + corrBtn2[i].innerHTML + `</div>`;
  }
  var allSymbols = document.getElementsByClassName('symbols');
    for (var i = 0; i < allSymbols.length; i++) {
      allSymbols[i].style.animation = "show 1s ease forwards";
    }
}