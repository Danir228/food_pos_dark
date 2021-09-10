import "./info-item.scss";

interface InfoItemProps {
    image: string;
    title: string;
    subtitle: string;
}

const InfoItem = ({ image, title, subtitle }: InfoItemProps) => {
    return (
        <div className="info-item">
            <img className="info-item__image" src={image} alt="info_image" />
            <span className="info-item__text">
                <h3 className="info-item__title">{title}</h3>
                <h4 className="info-item__subtitle">{subtitle}</h4>
            </span>
        </div>
    );
};

export default InfoItem;