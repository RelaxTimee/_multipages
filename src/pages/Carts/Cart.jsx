/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cart.css";

function Cart({ carts, setCarts }) {
  return (
    <div className="carts-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  Remove From Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Items : <span className="btn btn-danger">{carts.length} item</span> -
        Total Price{" "}
        <span className="btn btn-success">
          $
          {carts
            .reduce((prev, cart) => {
              return prev + cart.price;
            }, 0)
            .toFixed(2)}
        </span>
      </h4>
      <button className="btn btn-warning bi bi-credit-card ">&nbsp;Checkout </button>
    </div>
  );
}

export default Cart;
