
    // Fonction permettant d'afficher le formulaire relatif aux chats
    function formCat() {
        document.getElementById('cat').style.display = 'none';
        document.getElementById('dog').style.display = 'none';
        document.getElementById('formCat').style.display = 'block';
    }

    // Fonction permettant d'afficher le formulaire relatif aux chiens
    function formDog() {
        document.getElementById('cat').style.display = 'none';
        document.getElementById('dog').style.display = 'none';
        document.getElementById('formDog').style.display = 'block';
    }

    // Fonction permettant d'afficher les résultats du formulaire relatif aux chats
    function resultCat() {
        calculated_years()
        document.getElementById('formCat').style.display = 'none';
        document.getElementById('resultCat').style.display = 'block';
        
    }

    // Fonction permettant d'afficher les résultats du formulaire relatif aux chiens
    function resultDog() {
        document.getElementById('formDog').style.display = 'none';
        document.getElementById('resultDog').style.display = 'block';
    }

    // Fonction permettant le retour à l'affichage de la page d'accueil
    function home() {
        document.getElementById('cat').style.display = 'block';
        document.getElementById('dog').style.display = 'block';
        document.getElementById('formCat').style.display = 'none';
        document.getElementById('formDog').style.display = 'none';
        document.getElementById('resultCat').style.display = 'none';
        document.getElementById('resultDog').style.display = 'none';
    }