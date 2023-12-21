# CLI Calculator

## Hoe heb ik dit aangepakt?
Eerst bekijken hoe je in Node CLI input krijgt, dus de arguments van je line.
Daarna kijken wat je precies wilt behalen. Ik wou dat sommige characters omgezet werden van het een naar de ander.
Bijvoorbeeld ^^ naar ** en dat unclosing brackets verwijderd werden. Dit kan dmv for loops etc maar ik vond Regex iets mooier.
De regex heb ik (natuurlijk) met behulp van internet in elkaar gezet. (iemand die regex uit zijn hoofd kent is wel heel knap).

Ik kon natuurlijk een package gebruiken zoals Math.JS maar dan ga je ook weer heel wat if-statements krijgen. Kan wel moet niet :-)
Er zitten nog kleine foutjes in, zoals `(1+2)x3))` die heeft namelijk na het verwijderen van 1 bracket nog een bracket maar die niet verwijderd wordt. `((1+2)x3))` werkt dan weer wel

#### Hier word gebruik gemaakt van `eval()` ja, dit is niet de veiligste manier aangezien dit rauwe code kan evalueren. Waarmee je een client niet moet vertrouwen... want wie weet wat die gaan doen...

### Gebruik:

```
node calculator 1+2
node calculator (1+2)x3)
node calculator 10/5x2
node calculator 4x5+1
```
etc...

# PS:
Sommige command lines vinden een ^ een special character, daarom dat je bij (bijvoorbeeld) Command Prompt van windows 2x ^^ moet doen.
Bijvoorbeeld: `2^^10` ipv `2^10`
