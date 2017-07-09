<?php
$data = $_POST['data'];
//set mode of file to writable.
chmod("title-contents.json",0777);
$f = fopen("title-contents.json", "w+") or die("fopen failed");
fwrite($f, $data);
fclose($f);
?>
