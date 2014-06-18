<?php session_name('ddvc'); session_start(); include_once($_SESSION['header_path']);?>
<?php
$vista = 'test.html';
$tabla = '<table border="1">
			<thead>
				<th>A</th>
				<th>B</th>
				<th>C</th>
			</thead>
			<tbody>
				<tr>
					<td>Primero</td>
					<td>Segundo</td>
					<td>Tercero</td>
				</tr>
			</tbody>
		</table>
		<hr/>
		<a href="'.$Path[src].'php/vnm.php?a=salir">Salir</a>
		<a href="'.$Path[src].'php/vnm.php">[Error]</a>';
$tpl_data = array( 
			 VARIABLE1 => 'Uno'
			,VARIABLE2 => 'Dos'
			,VARIABLE3 => $tabla
		);
print(contenidoHtml($vista, $tpl_data));
?>
