//document.getElementById('btn_years').addEventListener('click', calculated_years);

function calculated_years() {
    let value = 0
    let humain_years = ""
 
    const form = document.querySelector('form');        // la constante const permet de récuperé le form dans le html
    form.addEventListener('submit', (e) => {    // addEventListener permet d'écouté le formumlaire est déclance une fonction (e) quand il y a un submit
        e.preventDefault()
        // les values du formulaires
        value_years = e.target.input_years.value           
        bool_years = e.target.input_select_years.value
        console.log(value_years)
    
    // pour plus de facilité les années seront convertie en mois , ce que nous vérifions dans cette condition
    if (bool_years == 'years') { value = convert_years_on_month(value_years)}
    else { value = value_years }

    //les condtions qui permet la convertions 
    if (value == 1) {
        humain_years = "6 mois"
        
    }
    else if (value >= 2 && value <= 3 ) {
        humain_years = "entre 2 et 5 ans"
    } 
    else if (value >= 4 && value <= 5) {
        humain_years = "entre 6 et 8 ans"
    } 
    else if (value == 6) {
        humain_years = "10 ans"
    } 
    else if (value == 7) {
        humain_years = "12 ans"
    } 
    else if (value > 7 && value < 12 ) {
        humain_years = "entre 13 et 14 ans"
    } 
    else if (value == 12) {
        humain_years = "entre 15 et 16 ans"
    } 
    else if (value >= 13 && value <= 17 ) {
        humain_years = "entre 17 et 19 ans"
    } 
    else if (value >= 18 && value <= 23 ) {
        humain_years = "entre 20 et 21 ans"
    } 
    else if (value >= 24 && value <= 35 ) {
        humain_years = "entre 22 et 23 ans"
    } 
    else if (value >= 36 && value <= 47 ) {
        humain_years = "24 ans"
    } 
    else if (value >= 48 && value <= 59 ) {
        humain_years = "28 ans"
    } 
    else if (value >= 60 && value <= 71 ) {
        humain_years = "32 ans"
    } 
    else if (value >= 72 && value <= 83 ) {
        humain_years = "36 ans"
    } 
    else if (value >= 84 && value <= 95 ) {
        humain_years = "40 ans"
    } 
    else if (value >= 96 && value <= 107 ) {
        humain_years = "44 ans"
    } 
    else if (value >= 108 && value <= 119 ) {
        humain_years = "48 ans"
    } 
    else if (value >= 120 && value <= 131 ) {
        humain_years = "52 ans"
    } 
    else if (value >= 132 && value <= 143) {
        humain_years = "56 ans"
    }
    else if (value >= 144 && value <= 155 ) {
        humain_years = "61 ans"
    }
    else if (value >= 156 && value <= 167 ) {
        humain_years = "64 ans"
    }
    else if (value >= 168 && value <= 179 ) {
        humain_years = "68 ans"
    }
    else if (value >= 180 && value <= 191 ) {
        humain_years = "72 ans"
    }
    else if (value >= 192 && value <= 203 ) {
        humain_years = "76 ans"
    }
    else if (value >= 204 && value <= 215 ) {
        humain_years = "80 ans"
    }
    else if (value >= 216 && value <= 227 ) {
        humain_years = "84 ans"
    }
    else if (value >= 228 && value <= 239 ) {
        humain_years = "88 ans"
    }
    else if (value >= 240 && value <= 251 ) {
        humain_years = "92 ans"
    }
    else if (value >= 252 && value <= 263 ) {
        humain_years = "96 ans"
    }


   document.getElementById('result_years').innerHTML = humain_years;
})
}

function convert_years_on_month(years) {
    return 12*years
}