import Header from "../../../../../components/header/header";
import { arrayMenu } from "../menu/components/array-menu";
import Menu from "../menu/menu";

const HomeHeader = () => {
    return (
        <div className="homeheader">
            <Header title={"Jaegar Resto"} forms={true} />
            <Menu textreplace="/home/" arrayMenu={arrayMenu} />
        </div>
    );
};

export default HomeHeader;