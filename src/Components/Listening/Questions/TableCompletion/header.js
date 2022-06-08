import Markdown from "../../../Auxiliary/Markdown";

const Header = ({ items }) => (
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

export default Header;