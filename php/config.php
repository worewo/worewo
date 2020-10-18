<?php
    extract($_REQUEST);
    $file=fopen("form-save.txt","a");
    fwrite($file,"---------------------------------------------------- \n");
    fwrite($file,"name :");
    fwrite($file, $username ."\n");
    fwrite($file,"Email :");
    fwrite($file, $email ."\n");
    fwrite($file,"---------------------------------------------------- \n");
    fclose($file);
    header("location: ../thankyouonsubmission/index.html");
 ?>
