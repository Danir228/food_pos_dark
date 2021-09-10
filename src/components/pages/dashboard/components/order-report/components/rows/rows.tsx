import RowsItem from "../rows-item/rows-item";
import { RowsItemArray } from "../rows-items/rows-item";

import "./rows.scss";

const Rows = () => {
    return (
        <div className="rows">
            {RowsItemArray.map(item =>
                <RowsItem key={item.id} rows_item={item} />
            )}
        </div>
    );
};

export default Rows;