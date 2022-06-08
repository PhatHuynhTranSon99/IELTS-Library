import Markdown from "../../../Auxiliary/Markdown";

const Row = ({ items }) => (
    <tr>
    {
        items.map(
            item => (
                <td key={item}
                    className="border border-slate-300 p-3">
                    <Markdown content={item}/>
                </td>
            )
        )
    }
    </tr>
);

export default Row;