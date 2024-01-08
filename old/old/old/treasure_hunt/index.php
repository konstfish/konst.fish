<?php
session_start();
?>
<!DOCTYPE html>

<head>
  <title>Puzzle</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
   <link rel="stylesheet" type="text/css" href="main.css">
</head>

<html>
<body>

<?php
// funktion um entweder True oder False zurückzugeben
function tof()
{
    $rng = rand(1, 2);
    if ($rng == 1) {
        $_SESSION["to_find"] += 1;
        return true;
    } else {
        return false;
    }
}

function schummler()
{
    $_SESSION["field"] = 0;
    echo "<h2> NICH SCHUMMELN >:(</h2>Du wurdest auf das Anfangsfeld zurückgeworfen, behältst aber deine Schätze.";
}

// abfrage der input-felder
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST["reset"])) {
        $_SESSION["field"] = 0;
        unset($_SESSION["map"]);
        unset($_SESSION["steps"]);
        unset($_SESSION["found"]);
        unset($_SESSION["to_find"]);
    } elseif (isset($_POST['up'])) {
        $_SESSION["field"] = $_SESSION["map"][$_SESSION["field"]]["up"];
        $_SESSION["map"][$_SESSION["field"]]["gefunden"] = true;
        $_SESSION["steps"] += 1;
    } elseif (isset($_POST['down'])) {
        $_SESSION["field"] = $_SESSION["map"][$_SESSION["field"]]["down"];
        $_SESSION["map"][$_SESSION["field"]]["gefunden"] = true;
        $_SESSION["steps"] += 1;
    } elseif (isset($_POST['left'])) {
        $_SESSION["field"] = $_SESSION["map"][$_SESSION["field"]]["left"];
        $_SESSION["map"][$_SESSION["field"]]["gefunden"] = true;
        $_SESSION["steps"] += 1;
    } elseif (isset($_POST['right'])) {
        $_SESSION["field"] = $_SESSION["map"][$_SESSION["field"]]["right"];
        $_SESSION["map"][$_SESSION["field"]]["gefunden"] = true;
        $_SESSION["steps"] += 1;
    }
}
// gefundene schätze
if (!isset($_SESSION["found"])) {
    $_SESSION["found"] = 0;
}
// schätze die erst gefunden werden
if (!isset($_SESSION["to_find"])) {
    $_SESSION["to_find"] = 0;
}
// jetziges feld
if (!isset($_SESSION["field"])) {
    $_SESSION["field"] = 0;
}
// schritte
if (!isset($_SESSION["steps"])) {
    $_SESSION["steps"] = 0;
}
// karte
if (!isset($_SESSION["map"])) {
    $_SESSION['map'][0] = array('schatz' => tof(), 'left' => -1, 'up' => -1, 'right' => 1, 'down' => 6, 'gefunden' => true);
    $_SESSION['map'][1] = array('schatz' => tof(), 'left' => 0, 'up' => -1, 'right' => 2, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][2] = array('schatz' => tof(), 'left' => 1, 'up' => -1, 'right' => -1, 'down' => 8, 'gefunden' => false);
    $_SESSION['map'][3] = array('schatz' => tof(), 'left' => -1, 'up' => -1, 'right' => 4, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][4] = array('schatz' => tof(), 'left' => 3, 'up' => -1, 'right' => 5, 'down' => 10, 'gefunden' => false);
    $_SESSION['map'][5] = array('schatz' => tof(), 'left' => 4, 'up' => -1, 'right' => -1, 'down' => 11, 'gefunden' => false);

    $_SESSION['map'][6] = array('schatz' => tof(), 'left' => -1, 'up' => 0, 'right' => 7, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][7] = array('schatz' => tof(), 'left' => 6, 'up' => -1, 'right' => 8, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][8] = array('schatz' => tof(), 'left' => 7, 'up' => 2, 'right' => 9, 'down' => 14, 'gefunden' => false);
    $_SESSION['map'][9] = array('schatz' => tof(), 'left' => 8, 'up' => -1, 'right' => 10, 'down' => 15, 'gefunden' => false);
    $_SESSION['map'][10] = array('schatz' => tof(), 'left' => 9, 'up' => 4, 'right' => -1, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][11] = array('schatz' => tof(), 'left' => -1, 'up' => 5, 'right' => -1, 'down' => -1, 'gefunden' => false);

    $_SESSION['map'][12] = array('schatz' => tof(), 'left' => -1, 'up' => -1, 'right' => 13, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][13] = array('schatz' => tof(), 'left' => 12, 'up' => -1, 'right' => 14, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][14] = array('schatz' => tof(), 'left' => 13, 'up' => 8, 'right' => -1, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][15] = array('schatz' => tof(), 'left' => -1, 'up' => 9, 'right' => 16, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][16] = array('schatz' => tof(), 'left' => 15, 'up' => -1, 'right' => 17, 'down' => -1, 'gefunden' => false);
    $_SESSION['map'][17] = array('schatz' => tof(), 'left' => 16, 'up' => -1, 'right' => -1, 'down' => -1, 'gefunden' => false);
}

// schummel-abfrage
if ($_SESSION["field"] === -1) {
    schummler();
}
?>

<h3>Ostereisuche</h3>

<div id="minimap">
  <table>
    <tr>
    <?php
      $i = 0;
      while ($i <= 17) {
        if($_SESSION["map"][$i]["gefunden"] == true){
          echo"<td id='discovered' style='";
          if($_SESSION["map"][$i]["left"] === -1){
            echo "border-left: 2px solid #454545;";
          }
          if($_SESSION["map"][$i]["right"] === -1){
            echo "border-right: 2px solid #454545;";
          }
          if($_SESSION["map"][$i]["bottom"] === -1){
            echo "border-bottom: 2px solid #454545;";
          }
          if($_SESSION["map"][$i]["up"] === -1){
            echo "border-top: 2px solid #454545;";
          }
          echo "'></td>";
        }else{
          echo"<td></td>";
        }

        if($i === 5 or $i === 11){
          echo "</tr><tr>";
        }elseif($i === 17){
          echo "</tr>";
        }
        $i++;
      }
    ?>
  </table>
</div>

<?php
  if ($_SESSION["map"][$_SESSION["field"]]["schatz"] == true) {
      echo "<h4>Schatz Gefunden!</h4>";
      $_SESSION["map"][$_SESSION["field"]]["schatz"] = false;
      $_SESSION["found"] += 1;
      $_SESSION["to_find"] -= 1;
  }

  echo "Du hast " . $_SESSION["found"] . " Schätze gefunden. Zu finden: " . $_SESSION["to_find"] . ".<br><br>";
  echo "Du bist " . $_SESSION["steps"] . " Schritte gegangen.<br>";
  //echo "DEBUG: Du bist auf feld: " . $_SESSION["field"];
?>

<br>
<form method="post">
  <table border="0">
    <tbody>
      <tr>
        <td></td>
        <td><input type="submit" name="up" value="^" <?php if ($_SESSION["map"][$_SESSION["field"]]["up"] === -1) {
    echo "disabled='disabled' id='disabled'";
} ?>></td>
        <td></td>
      </tr>
      <tr>
        <td><input type="submit" name="left" value="<" <?php if ($_SESSION["map"][$_SESSION["field"]]["left"] === -1) {
    echo "disabled='disabled' id='disabled'";
} ?>></td>
        <td></td>
        <td><input type="submit" name="right" value=">" <?php if ($_SESSION["map"][$_SESSION["field"]]["right"] === -1) {
    echo "disabled='disabled' id='disabled'";
    } ?>><br></td>
      </tr>
      <tr>
      <td></td>
      <td><input type="submit" name="down" value="v" <?php if ($_SESSION["map"][$_SESSION["field"]]["down"] === -1) {
    echo "disabled='disabled' id='disabled'";
} ?>></td>
      <td></td>
    </tr>
    </tbody>
  </table>
  <br>
  <input type="submit" name="reset" value="Reset">
</form>

<?php
  if ($_SESSION["to_find"] == 0 and !isset($_POST["reset"])) {
      echo "<h2>Alle Schätze gefunden! Klicke auf ''Reset'' um ein neues Spiel zu beginnen!</h2>";
  }
?>


<a href="https://konst.fish/">konst.fish</a>
</body>
</html>
