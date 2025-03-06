export default function Card({ description, image, name, title }) {
    return (
      <div className="card"> {/* Use className instead of class */}
        <h4>{name}</h4>
        <small>{title}</small>
        <p>{description}</p>
        <img src={image.src} alt={image.alt} />
      </div>
    );
  }