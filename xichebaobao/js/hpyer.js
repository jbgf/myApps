
/**
 * 姣忔棩绛惧埌
 */
function hpyer_sign(vc_sn) {
	Ajax.call('../hpyer.php', 'act=sign&vc_sn='+vc_sn, function(data) {
		if (data.error > 0) {
			alert(data.message);
		} else {
			alert(data.message);
			location.href="user.php?act=vc_list";
		}
	}, 'GET', 'JSON');
}
