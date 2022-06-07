import React from "react";
import TitleAndTask from "../../../Auxiliary/Question/TitleAndTask";
import Table from "./table";

const TableCompletion = ({ name, task, heading, rows  }) => (
    <React.Fragment>
        <TitleAndTask name={name} 
            task={task}/>
        <Table rows={rows}/>
    </React.Fragment>
);

export default TableCompletion;