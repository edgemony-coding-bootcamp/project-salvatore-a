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

L'utilizzo degli endpoint con autenticazione è documento nel [relativo repository](https://github.com/edgemony-coding-bootcamp/edgemony-course-backend).

> NB: su richiesta è possibile modificare lo schema per aggiungere nuovi dati.

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

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
