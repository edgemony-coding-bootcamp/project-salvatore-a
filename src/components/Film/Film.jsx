export const Film = (props) => {
    const name = props.name || "Film name";
    const description = props.description || "lorem ipsum";
    const image = props.image || "";

    return (
        <article>
            <img src={image} alt={name} />
            <p>Descrizione: {description}</p>
            <h4>{name}</h4>
        </article>
    );
};