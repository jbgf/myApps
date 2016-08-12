/* $Id : region.js 4865 2007-01-31 14:04:10Z paulgao $ */

var region = new Object();

region.isAdmin = false;

region.loadRegions = function(parent, type, target)
{
  Ajax.call(region.getFileName(), 'type=' + type + '&target=' + target + "&parent=" + parent , region.response, "GET", "JSON");
}

/* *
 * 杞藉叆鎸囧畾鐨勫浗瀹朵笅鎵€鏈夌殑鐪佷唤
 *
 * @country integer     鍥藉鐨勭紪鍙�
 * @selName string      鍒楄〃妗嗙殑鍚嶇О
 */
region.loadProvinces = function(country, selName)
{
  var objName = (typeof selName == "undefined") ? "selProvinces" : selName;

  region.loadRegions(country, 1, objName);
}

/* *
 * 杞藉叆鎸囧畾鐨勭渷浠戒笅鎵€鏈夌殑鍩庡競
 *
 * @province    integer 鐪佷唤鐨勭紪鍙�
 * @selName     string  鍒楄〃妗嗙殑鍚嶇О
 */
region.loadCities = function(province, selName)
{
  var objName = (typeof selName == "undefined") ? "selCities" : selName;

  region.loadRegions(province, 2, objName);
}

/* *
 * 杞藉叆鎸囧畾鐨勫煄甯備笅鐨勫尯 / 鍘�
 *
 * @city    integer     鍩庡競鐨勭紪鍙�
 * @selName string      鍒楄〃妗嗙殑鍚嶇О
 */
region.loadDistricts = function(city, selName)
{
  var objName = (typeof selName == "undefined") ? "selDistricts" : selName;

  region.loadRegions(city, 3, objName);
}

/* *
 * 澶勭悊涓嬫媺鍒楄〃鏀瑰彉鐨勫嚱鏁�
 *
 * @obj     object  涓嬫媺鍒楄〃
 * @type    integer 绫诲瀷
 * @selName string  鐩爣鍒楄〃妗嗙殑鍚嶇О
 */
region.changed = function(obj, type, selName)
{
  var parent = obj.options[obj.selectedIndex].value;

  region.loadRegions(parent, type, selName);
}

region.response = function(result, text_result)
{
  var sel = document.getElementById(result.target);

  sel.length = 1;
  sel.selectedIndex = 0;
  sel.style.display = (result.regions.length == 0 && ! region.isAdmin && result.type + 0 == 4) ? "none" : '';//morestock_morecity

  if (document.all)
  {
    sel.fireEvent("onchange");
  }
  else
  {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('change', true, true);
    sel.dispatchEvent(evt);
  }

  if (result.regions)
  {
    for (i = 0; i < result.regions.length; i ++ )
    {
      var opt = document.createElement("OPTION");
      opt.value = result.regions[i].region_id;
      opt.text  = result.regions[i].region_name;

      sel.options.add(opt);
    }
  }
}

region.getFileName = function()
{
  if (region.isAdmin)
  {
    return "../region.php";
  }
  else
  {
    return "region.php";
  }
}
