import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";

const ShowTime = (props) => {
    const date = props.date || new Date();
    return (
        <p>

            <small>
                {formatDistance(new Date(date), new Date(),
                    {
                        addSuffix: true,
                        locale: it,
                    }
                )}
            </small>
        </p>
    )
}

export default ShowTime;