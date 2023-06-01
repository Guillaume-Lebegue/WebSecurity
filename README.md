# WebSecurity

Sujet du repo: [Resolutions des defis de securité web créé par BlackFoot](https://secu-web.blackfoot.dev)

## Open Field

### Wordstress


## Graphql

### Confessions

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

### SSTI 1

### SSTI 2

### SSTI 3

### SSTI 4


## SSRF

### SSRF 1


## Obfuscation

### OBF 100

### SCRIPT_KIDDING


## XXE

### XXE 1

### XXE 2


## XSS

### Whatsup

### Whatsup2


## JWT

### Mythique 1

### Mythique 2

### Mythique 3


## SQLI

### Potionseller

### Potionseller 2


## IFI

### noprotection

### filters

### extprotect

### remote


## Auth

### Auth 50

### Auth 100

### Auth 200


## JS

### b64js

### JS200