import React from 'react';
import ReactDOM from 'react-dom';
import { products, generateVoteCount } from '../seed';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
        <div className='items'>
          <div className='image'>
          </div>
          <div className='content'>
            <div className='header'>
              <a onClick={this.handleUpVote}>
                <img src={this.props.productImageUrl} />
              </a>
              {this.props.votes}
            </div>
            <div className='description'>
              <a href={this.props.url}>
                {this.props.title}
              </a>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      );
  }
}

class ProductList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      products: []
    }

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount() {
    // Ajax, data stuff
    this.setState({ products: products });
  }

  handleProductUpVote(productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        });
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts
    });
  }

  render() {
    const sortedProducts = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = sortedProducts.map((product) => (
        <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote}
        />
    ));
    return (
      <div className='items'>
        <a href="https://www.apple.com/" target="blanck">Can you buy iphone this link</a>
        {productComponents}
      </div>
    );
  }
}

export default ProductList;
