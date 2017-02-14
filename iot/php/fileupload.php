<?php

/*print_r($_FILES);*/
/*print_r($_POST);*/
if(isset($_FILES['test'])){
	if(move_uploaded_file($_FILES['test']['tmp_name'],iconv("UTF-8", "gb2312", "../upload/".$_FILES['test']['name']))){
	 //   print_r(/*$_FILES['test']['name']*/ $_POST['name']);
	}	
}


if($_POST["action"] == "test"){
	echo 1;
}
    
    








