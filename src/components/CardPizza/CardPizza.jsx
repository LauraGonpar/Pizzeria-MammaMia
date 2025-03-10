import "./CardPizza.css";
const CardPizza = ({ name, ingredients, price, img }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={img} alt="Pizza Margarita" class="card-image" />
        <h3 className="card-title">{name}</h3>
        <div className="card-content">
          <p className="card-ingredients">
            Ingredientes:
            <br />
            🍕{ingredients}
          </p>
          <p className="card-price">Precio: ${price}</p>
        </div>
        <div className="card-buttons">
          <button className="btn btn-view">Ver Más 👀</button>
          <button className="btn btn-add">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
