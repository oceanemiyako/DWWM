<?php

$db = new PDO("mysql:host=127.0.0.1;dbname=exercice02", "root", "12345");
echo "connection réussi ";

 function showClients($db): void {
    $request = "SELECT id, last_name, first_name, adress, codePostal, city, numberPhone FROM client ORDER BY last_name, first_name";
    $statement = $db->prepare($request);
    $statement->execute();
    $clients = $statement->fetchAll(PDO::FETCH_ASSOC);

    foreach ($clients as $client) {
        echo exoTwo . phpjson_encode($client) . PHP_EOL;
    }
}

showClients($db);

function createClient(PDO $db): bool {
    $nom = readline("Nom: ");

    if (empty($nom)) {
        echo "Nom incorrect";
        return false;
    }

    $prenom = readline("Prénom: ");

    if (empty($prenom)) {
        echo "Prénom incorrect";
        return false;
    }

    $adresse = readline("Adresse: ");

    if (empty($adresse)) {
        echo "Adresse incorrecte";
        return false;
    }

    $codePostal = readline("Code Postal: ");

    if (empty($codePostal)) {
        echo "Code Postal incorrect";
        return false;
    }

    $ville = readline("Ville: ");

    if (empty($ville)) {
        echo "Ville incorrecte";
        return false;
    }

    $telephone = readline("Téléphone: ");

    if (empty($telephone)) {
        echo "Téléphone incorrect";
        return false;
    }

    $request = "INSERT INTO client (last_name, first_name, adress, codePostal, city, numberPhone) VALUES (?, ?, ?, ?, ?, ?)";
    $statement = $db->prepare($request);
    $statement->execute([$nom, $prenom, $adresse, $codePostal, $ville, $telephone]);

    return $statement->rowCount() === 1;
}

function editClient(PDO $db): void {
    $id = (int)readline("Saisir l'id du client à modifier: ");

    $request = "SELECT * FROM client WHERE id = ?";
    $statement = $db->prepare($request);
    $statement->execute([$id]);
    $client = $statement->fetch(PDO::FETCH_ASSOC);

    if (!$client) {
        echo "Aucun client trouvé avec l'id {$id}" . PHP_EOL;

    }

    $last_name = readline("New Name '{$client['last_name']}'): ");
    $first_name = readline("New FirstName  '{$client['first_name']}'): ");
    $adress = readline("New adress  '{$client['adress']}'): ");
    $codePostal = readline("New Code Postal '{$client['codePostal']}'): ");
    $city = readline(" New City '{$client['city']}'): ");
    $numberPhone = readline("New NumberPhone '{$client['numberPhone']}'): ");

    $last_name = !empty($last_name) ? $last_name : $client['last_name'];
    $first_name = !empty($first_name) ? $first_name : $client['first_name'];
    $adress = !empty($adress) ? $adress : $client['adress'];
    $codePostal = !empty($codePostal) ? $codePostal : $client['codePostal'];
    $city = !empty($city) ? $city : $client['city'];
    $numberPhone = !empty($numberPhone) ? $numberPhone : $client['numberPhone'];

    $request = "UPDATE client SET last_name = ?, first_name = ?, adress = ?, codePostal = ?, city = ?, numberPhone = ? WHERE id = ?";
    $statement = $db->prepare($request);
    $statement->execute([$last_name, $first_name, $adress, $codePostal, $city, $numberPhone, $id]);

    echo "Client édité avec succès." . PHP_EOL;
}

function deleteClient(PDO $db): void {
    $id = (int)readline("Saisir l'id du client à supprimer: ");

    $request = "DELETE FROM client WHERE id = ?";
    $statement = $db->prepare($request);
    $statement->execute([$id]);

    echo "Client supprimé avec succès." . PHP_EOL;
}

function showDetails(PDO $db) : void
{

    $clientId = (int)readline("Saisir l'ID du client pour afficher ces détails : ");

    $request = "SELECT client.*, command.id AS 'Commande ID', command.date AS 'Date Commande', command.total 
            FROM client 
            LEFT JOIN command ON client.id = command.client_id 
            WHERE client.id = ?";
    $statement = $db->prepare($request);
    $statement->execute([$clientId]);
    $details = $statement->fetchAll(PDO::FETCH_ASSOC);

    if (empty($details)) {
        echo "Aucun client trouvé avec l'ID {$clientId}" . PHP_EOL;
    }

    echo "Détails du client avec l'ID {$clientId} :" . PHP_EOL;
    foreach ($details as $row) {
        echo "Last_name: {$row['last_name']}, Frist_name: {$row['first_name']}, Adress: {$row['adress']}, Code Postal: {$row['codePostal']}, City: {$row['city']}, Number Phone: {$row['numberPhone']}" . PHP_EOL;
        echo "Commande ID: {$row['Commande ID']}, Date Commande: {$row['Date Commande']}, Total: {$row['total']}" . PHP_EOL;
    }

}

showDetails($db);

function createCommandeClient(PDO $db) : void
{
    $clientId = (int)readline("Saisir l'ID du client pour créer une commande: ");

    $request = "SELECT id FROM client WHERE id = ? ";
    $statement = $db->prepare($request);
    $statement->execute([$clientId]);
    $client = $statement->fetch(PDO::FETCH_ASSOC);

    if (!$client) {
        echo "Aucun client trouvé" . PHP_EOL;

    }

    $date = readline("Saisir la date de la commande (format AAAA-MM-JJ) : ");

    if (!preg_match("/^\d{4}-\d{2}-\d{2}$/", $date)) {
        echo "Date incorrecte, veuillez utiliser le format AAAA-MM-JJ." . PHP_EOL;

    }

    $total = readline("Saisir le total de la commande: ");
    $total = floatval($total);

    $request = "INSERT INTO command (client_id, date, total) VALUES (?, ?, ?)";
    $statement = $db->prepare($request);
    $statement->execute([$clientId, $date, $total]);

    echo "Commande ajoutée avec succès pour le client ID {$clientId}" . PHP_EOL;
}

function editCommand(PDO $db) :void
{
    $id = (int)readline("Saisir l'id de la commande à modifier: ");

    $request = "SELECT * FROM command WHERE id = ?";
    $statement = $db -> prepare($request);
    $statement -> execute([$id]);
    $commande = $statement -> fetch(PDO::FETCH_ASSOC);

    if (!$commande) {
        echo "Aucune commande trouvée avec l'id {$id}" . PHP_EOL;
    }

    $date = readline("New date ('{$commande['date']}'): ");
    $total = readline("New total ('{$commande['total']}'): ");

    $date = !empty($date) ? $date : $commande['date'];
    $total = !empty($total) ? $total : $commande['total'];

    $request = "UPDATE command SET date = ?, total = ? WHERE id = ?";
    $statement = $db->prepare($request);
    $statement->execute([$date, $total, $id]);

    echo "La commande a bien été modifié." . PHP_EOL;}


function deleteCommand(PDO $db) : void
{
    $id = (int)readline("Saisir l'id de la commande à supprimer: ");

    $request = "DELETE FROM command WHERE id = ?";
    $statement = $db->prepare($request);
    $statement->execute([$id]);

    echo "La commande a été supprimé avec succès." . PHP_EOL;
}

function start(PDO $db): void
{
    while (true) {
        menu();
        $input = readline("Saisir une option: ");
        match ($input) {
            "1" => showClients($db),
            "2" => createClient($db),
            "3" => editClient($db),
            "4" => deleteClient($db),
            "5" => showDetails($db),
            "6" => createCommandeClient($db),
            "7" => editCommand($db),
            "8" => deleteCommand($db),
            "0" => exit(),
            default => print("Saisie invalide"),
        };
        echo PHP_EOL;
    }
}

start($db);

function menu(): void {
    echo "   ____                                          _           
  / ___|___  _ __ ___  _ __ ___   __ _ _ __   __| | ___  ___ 
 | |   / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` |/ _ \/ __|
 | |__| (_) | | | | | | | | | | | (_| | | | | (_| |  __/\__ 
  \____\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_|\___||___/" . PHP_EOL;

    echo "1. Afficher les clients" . PHP_EOL;
    echo "2. Créer un client" . PHP_EOL;
    echo "3. Modifier un client" . PHP_EOL;
    echo "4. Supprimer un client" . PHP_EOL;
    echo "5. Afficher les détails d'un client" . PHP_EOL;
    echo "6. Ajouter une commande" . PHP_EOL;
    echo "7. Modifier une commande" . PHP_EOL;
    echo "8. Supprimer une commande" . PHP_EOL;
    echo "0. Quitter" . PHP_EOL;
}