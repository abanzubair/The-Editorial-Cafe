import React, { Component } from 'react';
import './seasonal-curation.css'

class Seasonal_curation extends Component {

  constructor(props) {
    super(props);
    // tracks which drink the user clicked
    this.state = { selectedDrink: null };
  }

  // Lifecycle - fires right after the component appears on screen
  componentDidMount() {
    console.log('Seasonal section mounted');
  }

  componentWillUnmount() {
    console.log('Seasonal section unmounting');
  }

  // Component API - setState updates the selectedDrink value
  selectDrink = (name) => {
    this.setState({ selectedDrink: name });
  };

  render() {
    return (
      <section className="seasonal">

        <div className="heading">
          <h1>Seasonal Curations</h1>
          <p>Autumn / Winter Edition</p>
        </div>

        {/* show which drink the user selected */}
        {this.state.selectedDrink && (
          <p className="selected">Selected: {this.state.selectedDrink}</p>
        )}

        <div className="catalogue">

          <div className="card big" onClick={() => this.selectDrink(this.props.title_main)}>
            <div className="overlay">
              <p className="tag">NEW ARRIVAL</p>
              <h2>{this.props.title_main}</h2>
              <p className="desc">
                {this.props.desc_main}
              </p>
              <span className="price">Rs.249</span>
            </div>
          </div>

          <div className="right">

            <div className="card small scone" onClick={() => this.selectDrink('Maple Sage Scone')}>
              <div className="overlay">
                <h3>Maple Sage Scone</h3>
                <span>Rs.99</span>
              </div>
            </div>

            <div className="card small brew" onClick={() => this.selectDrink('Amber Cold Brew')}>
              <div className="overlay">
                <h3>Amber Cold Brew</h3>
                <span>Rs.159</span>
              </div>
            </div>

          </div>

        </div>

      </section>
    )
  }
}

export default Seasonal_curation;