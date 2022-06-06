import Bold from "../../../Auxiliary/Text/Bold";

const Choice = ({ id, content }) => ( 
    <div className="my-3">
        <p className="inline-block"><Bold>{id}</Bold> { content }</p>
    </div>
);

const Choices = ({ choices }) => (
    <div className="grid grid-cols-4">
    {
        choices.map(
            choice => (
                <Choice key={choice.id} {...choice}/>
            )
        )
    }
    </div>
);

export default Choices;