import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Header.css';

class Header extends React.Component {

  showItemsInCart = () => {
    const list = [];
    for(let item of this.props.items) {
      list.push(<li>{item.name} {item.price}</li>);
    }
    return list;
  }

  render() {
    return (
      <div>
        {
          // Main Header code
        }
        <div className="Header-container">
          <div className="Header-left">
            <span className="Header-title">E-scooter Emporium</span>
            <img src="/assets/logo.png" className="Header-logo" alt="logo" />
          </div>

          <div className="Header-right">
            <button class="modal-button" data-toggle="modal"
              data-target="#exampleModal"
              >
              <span className="Header-cartItemCounter">{this.props.items.length}
              </span>
              <i className="material-icons">shopping_cart</i>
            </button>
          </div>
        </div>

        {
          // Modal code
        }
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
          aria-labelledby="exampleModalLabel" aria-hidden="true"
          >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Items in shopping cart
                </h5>
                <button type="button" class="close" data-dismiss="modal"
                  aria-label="Close"
                  >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul type="none" class="modal-list">
                  {this.showItemsInCart()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
