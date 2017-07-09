<?php
$data = $_POST['data'];
//set mode of file to writable.
chmod("games-contents.json",0777);
$f = fopen("games-contents.json", "w+") or die("fopen failed");
fwrite($f, $data);
fclose($f);
?>
