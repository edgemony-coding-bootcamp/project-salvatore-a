import styles from "./NoResultsAlert.module.scss";

export default function NoResultsAlert({filter}){
    return (
        <div className={styles.NoResultsAlert}>
        <p>
          Nessun risultato per la tua ricerca di <i>{filter}</i>.
          <br />
          Suggerimenti:
        </p>
        <ul>
          <li>Prova con parole chiave diverse</li>
          <li>Cerchi un film o una serie TV?</li>
          <li>
            Prova a usare il titolo di un film o programma TV oppure il
            nome di un attore
          </li>
          <li>
            Prova con un genere, per esempio Commedia,Romantici, Sport o
            Dramma
          </li>
        </ul>
      </div>
    )
}