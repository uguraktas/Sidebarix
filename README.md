# Sidebarix Jquery Plugin


## Kullanım

Olmazsa Olmaz

 - [jQuery](https://jquery.com/)

```html
...
<!-- Include jQuery -->
<script src="js/query.min.js"></script>
<!-- Include Sidebar -->
<script src="js/sidebar.js"></script>

...
	<!--Mobile SideBox Start-->
	<div class="sidebar-mobile-box">
		<ul>
			<li><i class="fa fa-address-card-o" aria-hidden="true"></i></li>
			<li><i class="fa fa-bath" aria-hidden="true"></i></li>
			<li><i class="fa fa-handshake-o" aria-hidden="true"></i></li>
			<li><i class="fa fa-microchip" aria-hidden="true"></i></li>
			<li><i class="fa fa-telegram" aria-hidden="true"></i></li>
			<li><i class="fa fa-user-o" aria-hidden="true"></i></li>
			<li><i class="fa fa-wpexplorer" aria-hidden="true"></i></li>
			<li><i class="fa fa-window-restore" aria-hidden="true"></i></li>
			<li><i class="fa fa-bandcamp" aria-hidden="true"></i></li>
		</ul>
	</div>
	<!--Mobile SideBox Finish-->
...
<script type="text/javascript">
		$('body').sidebarMenu({
			responsive: '992', //Eğer NULL ise mobile-desktop fark etmez göster
			widthSize: '55', //Side menünün genişliği
			selectorClass: '.sidebar-mobile-box', // Side Menü olarak göstermek istediğin class,id,tag
			top: '0', //Yukarıdan verilecek boşluk
			side: 'left', //Menünün tarafı
		});
	</script>
...
```


## Dökümantasyon

### `sidebarMenu(options)`

Kullanabileceğiniz bazı parametreler mevcuttur.

```js
$(".sidebar-mobile-box").sidebarMenu({...});
```


#### Parametreler
- **Object** `options`: An object that will be merged with the default options.
 - `responsive` (Numerik): Sidebar menüyü sadece mobilde gösterir ve hangi genişliğe indiğinde görünmesini isterseniz buraya o genişiği yazabilirsiniz (default: Boş Brakıldığında Tüm Platformlarda Gösterir.)
 - `side` (String): left|right / Menüyü Nerede Göstermek İstiyorsunuz ? (default: `"left"`)
 - `widthSize` (Numerik): Menü Genişliği
 - `selectorClass` (String): Sidebarix'de göstermek istediğiniz Ana Class
 - `top` (Numerik): Yukarıdan verilecek Boşluk

## Changelog
V1.0
