import Markdown from "../../../Auxiliary/Markdown";

const HeadRow = ({ items }) => (
    <tr>
        {
            items.map(
                item => (
                    <th key={item}
                        className="border border-slate-300 p-3">
                        <Markdown content={item}/>
                    </th>
                )
            )
        }
    </tr>
);

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

const Table = ({ rows }) => (
    <table className="border-collapse w-full">
        <thead>
            <HeadRow {...rows[0]}/>
        </thead>
        <tbody>
        {
            rows.slice(1).map(
                row => (
                    <Row key={row.id} 
                        {...row}/>
                )
            )
        }
        </tbody>
    </table>
);

export default Table;