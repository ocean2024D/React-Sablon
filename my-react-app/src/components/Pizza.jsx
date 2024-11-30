export default function Pizza(props) {
console.log(props);

    return (
      <div className="col">
        <div className="card">
          <img
            src={"/img/" + props.image}
            alt="Pizza"
            className="card-img-top"
          />
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text"> {props.description}
            <span className="badge text-bg-primary">{props.price} TL</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  