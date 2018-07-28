var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");



var backgroundLayer = document.querySelector('.bg_layer');
var inputStatusBar = document.querySelector('.status-bar-input');
var body = document.querySelector('body');

for (i = 0; i < x.length; i++) {

  selElmnt = x[i].getElementsByTagName("select")[0];

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");

  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
 
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];

        h = this.parentNode.previousSibling;

        for (i = 1; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML)
           {
            s.selectedIndex = i;

            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");

            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.nextSibling.classList.toggle("select-items_border-none");
      this.previousSibling.previousSibling.classList.toggle("selectСustom__select-border_action");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {

  var x, y, i, arrNo = [], selectBorder;
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  selectBorder = document.querySelectorAll(".selectСustom__select-border");

  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)

    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
     x[i].classList.add("select-hide");
     y[i].classList.remove("select-arrow-active");
     selectBorder[i].classList.remove("selectСustom__select-border_action");
    }
  }
}

document.addEventListener("click", closeAllSelect); 

function hiddenBody() {
  if(inputStatusBar.checked) {
      body.classList.add('bodyHidden');
      //htmml.classList.add('bodyHidden');
  }
}

function hiddenFormFilters () {
  inputStatusBar.checked = false;
  body.classList.remove('bodyHidden');
  htmml.classList.remove('bodyHidden');
}


inputStatusBar.addEventListener('click',hiddenBody);
backgroundLayer.addEventListener('click',hiddenFormFilters);

                          //input search form//

var buttonSearch = document.querySelector('.form-search__button-visible');

var logo = document.querySelector('.logo');

var buttonSubmit = document.querySelector(".form-search__submit");

var inputSearch = document.querySelector(".form-search__input");

buttonSearch.addEventListener("click", function() {

  this.classList.add("form-search__button-visible_hidden");
  logo.classList.add("logo_hidden");
  buttonSubmit.classList.add('form-search__submit_visible');
  inputSearch.classList.add("form-search__input_visible");
})