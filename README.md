# EDGEMONY FINAL PROJECT - TEAM A

## Organizzazione

- daily standup **lun-ven 9-9.30**
- durante il daily si segnalano problemi, si discutono implementazioni
- si lavora in maniera autonoma
- i task possono essere assegnati sia dal team leader che dal team stesso

## Strumenti

- Github
  - repo
  - issues
  - board
- Slack
- Google Meet & Calendar
- hosting: **scelta libera**
- framework: **scelta tra CRA, Vite, Next**
- librerie: **scelta libera**

## Backend

L'endpoint di backend è:

[https://edgemony-backend.herokuapp.com/series/](https://edgemony-backend.herokuapp.com/series/)

i dati esposti seguono questo schema:

```json
{
  "id": number,
  "title": string,
  "seasons": number,
  "poster": string,
  "year": number,
  "description": string,
  "genres": string[],
  "new": boolean,
  "favorite": boolean,
  "rating": number,
  "users": number[],
  "cast": string[]
}
```

su richiesta è possibile modificare lo schema per aggiungere nuovi dati.

## Repository

- il branch `main` è protetto
- ogni task viene sviluppato in una branch con nomenclatura `feature/[task]` o `fix/[task]` in base alla tipologia
- per mergiare il codice da una branch verso `main` si crea una PR assegnando tutti i membri del team come reviewer
- le PR possono essere mergiate solo aver ricevuto **almeno 1 approvazione**
- siete liberi di fare fork ma solo questo repo sarà quello preso in considerazione

## Obiettivo

- **NETFLIX CLONE! (EDGEFLIX)**
  - usate l'attuale UI di Netflix come punto di partenza ma siete liberi di applicare eventuali personalizzazioni
- **obiettivi minimi:**
  - visualizzare lista (in griglia) serie disponibili
    - filtri per genere
  - cliccando su una locandina vedo i dettagli di una singola serie
  - nel dettaglio di una serie posso:
    - marcare una serie come preferita
    - esprimere un giudizio, voto da 1 a 5
    - cancellare/nascondere la serie
  - layout responsive
- **obiettivi extra:**
  - flusso di login (signin) e mostrare solo i dati legati all'utente loggato
  - flusso creazione nuove utente (signup)
  - ricerca testuale (titolo)
  - video in autoplay in home
