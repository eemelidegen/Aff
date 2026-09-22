# Anu Edman -teema WordPressiin

Tämä kansio (`anu-edman/`) on valmis WordPress-teema, joka sisältää saman sivuston kuin `index.html` repon juuressa.

## Asennus

1. Pakkaa `anu-edman`-kansio zip-tiedostoksi (jos et jo saanut valmista `anu-edman-wordpress-teema.zip`-tiedostoa).
2. Kirjaudu WordPress-ylläpitoon.
3. Mene **Ulkoasu → Teemat → Lisää uusi → Lataa teema**.
4. Valitse zip-tiedosto ja paina **Asenna nyt**.
5. Kun asennus on valmis, paina **Aktivoi**.

Siinä kaikki &ndash; sivu on heti käytössä etusivuna, koska teemassa on vain yksi sivupohja (`index.php`).

## Muokattavaa jatkossa

- Facebook-linkki on jo kunnossa, mutta Instagram-linkki (`#`) pitää vaihtaa oikeaan osoitteeseen tiedostossa `index.php` (hae `Instagram`).
- Tekstejä ja hintoja voi muokata suoraan `index.php`-tiedostosta &ndash; ne ovat tavallista HTML:ää PHP:n sisällä.
- Jos haluat vaihtaa värit, muokkaa tiedoston `style.css` alussa olevia `:root`-muuttujia.
