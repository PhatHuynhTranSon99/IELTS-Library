import Row from "./row";
import Header from "./header";

//Helper function to get first row and remaining rows
const getFirstRow = rows => rows[0];
const getRemainingRows = rows => rows.slice(1);

const Table = ({ rows }) => (
    <table className="border-collapse w-full">
        <thead>
            <Header {...getFirstRow(rows)}/>
        </thead>
        <tbody>
        {
            getRemainingRows(rows).map(
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