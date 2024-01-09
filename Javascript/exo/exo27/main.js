document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ajoutBtn").addEventListener("click", function() {
        ajouterPrenom();
    });


    
    function ajouterPrenom() {
        var prenomInput = document.getElementById("prenomInput");
        var nom = prenomInput.value;

        if (nom.trim() !== "") {
            var nameList = document.getElementById("nameList");
            var listItem = document.createElement("li");
            listItem.appendChild(document.createTextNode(nom));
            nameList.appendChild(listItem);

            prenomInput.value = "";
        }
    }
});
