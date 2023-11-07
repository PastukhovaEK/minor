const node_for_click = document.getElementById("button")


const rusToLat = function(str) {
    let ru = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
      'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
      'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
      'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
      'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
      'ъ': 'ie', 'ь': '', 'й': 'i'
    };
    let newString = [];
    
    return [...str].map(l => {
      let latL = ru[l.toLocaleLowerCase()];
      
      if (l !== l.toLocaleLowerCase()) {
        latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1);
      } else if (latL === undefined) {
        latL = l;
      }
      
      return latL;
    }).join('');
  }

  function changeContent(){
    const name = document.getElementById("name")    
    const surname = document.getElementById("surname")
    const patr = document.getElementById("patr")
    const year = document.getElementById("birthday")

    console.log(surname.innerText)
    console.log(name.innerText)
    console.log(year.innerText.slice(6, 10));

    surname.innerText = rusToLat(surname.innerText)
    name.innerText = rusToLat(name.innerText)
    patr.innerText = rusToLat(patr.innerText)
    

}
