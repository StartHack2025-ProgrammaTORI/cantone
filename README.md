# Registrazione azienda
1) Compilazione `general info`: 
	- sei una B2B o solo una B2C
	- nome
	- descrizione del servizio che offri
	- contatti
	- fatturato
2) Profiling


```json
{
	"Aziende": [
		{
			"genral info": {
				"name": "EcoDrive Garage",
				"descrizione servizi": "Officina meccanica specializzata in riparazione e manutenzione di veicoli elettrici",
				"telfono": "3701315527",
				"email": "ecodrive@hack.com",
				"fatturato": 18183,
			},
			"consulenze": {
				"suggerite": ["Department of Transport Systems"],
				"pending-incoming": ["Sustainability Innovation Lab"],
				"pending-outcoming": ["Department of Computer Science"],
				"disliked-incoming":{
					"area":[],
					"companies":[]
				},
				"disliked-outcoming": ["Aziende con cui non vuole collaborare"]
				"accepted":[
					"Areas in which he already invested"
				]
			},
			"profile": [
				{
					"domanda": "Qual è il principale tipo di servizio che offri?",
					"risposta":"Riparazioni e manutenzione di veicoli"
				},
				{
					"domanda": "Qual è il tipo di clientela che serve principalmente la tua azienda?",
					"risposta":"Proprietari di veicoli privati o aziende con flotte di veicoli"
				},
				{
					"domanda": "Quali dei seguenti strumenti e attrezzature utilizzi di più nella tua attività?",
					"risposta":"Diagnostica elettronica per veicoli e attrezzi di riparazione"
				}
			]
		},
		...
	]
}
```



# Home page

![[UI.png]]

[[Drawing 2025-03-20 13.23.26.excalidraw]]
## Suggested consultancy
- Caso utente **conferma**:
	- `{genral_info, profile}`  vengono passate all'AI per generare un report da inoltrate all'azienda di consulenza
	- **Commento:** in questo modo si facilità la vita al consulente
	-  L'area in cui interviene l'azienda di consulenza viene aggiunta a `consulenze.pending-incoming`
- Caso utente **rifiuta**:
	- Chiede se ha rifiutato perchè non è interessato a collaborare con quel consulente o per l'area d'investimento
		- Caso **Area**: l'area in cui sarebbe intervenuta l'azienda di consulenza (AI generated) viene aggiunta a `consulenze.disliked-incoming.area`
		- Caso **Company:** la l'azienda di consulenza (AI generated) viene aggiunta a `consulenze.disliked-incoming.company`


## Ask for your consultancy
- Notifica la tua decisione all'azienda che ha richiesto la consulenza tramite **WhatsApp** o **email** e la rimuove dalla mia lista
- Si rimuove da `consulenze.pending-outcoming` dell'azienda che ha richiesto la consulenza