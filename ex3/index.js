function numeZiSaptamana(numarZi) {
    switch (numarZi) {
        case 1:
            return "Luni"
                break;
        case 2:
            return "Marti"
                break;
        case 3:
            return "Miercuri"
                break;
        case 4:
            return "Joi"
                break;
        case 5:
            return "Vineri"
                break;
        case 6:
            return "Sambata"
                break;
        case 7:
            return "Duminica"
                break;
        default:
            return "Numarul zilei nu este valid";
    }
  }
  
  
  console.log(numeZiSaptamana(1));  
  console.log(numeZiSaptamana(3));  
  console.log(numeZiSaptamana(8));