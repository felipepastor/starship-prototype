import React, {Component} from 'react';
import './SearchResultsItem.css';

import starWarsImg from '../../assets/images/starwars.jpg'

class SearchResultsItem extends Component {
  render() {
    const {starship} = this.props;
    return (
      <li className="row list-item">
        <div className="col-md-4 img-wrapper">
          <img src={starWarsImg} alt=""/>
        </div>
        <div className="col-md-8 content-wrapper">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p className="resupply">
                <strong>Stops to resupply: {starship.stopsToResupply}</strong>
              </p>
            </div>
            <div className="name col-md-6 col-sm-6">
              <p>Name: {starship.name}</p>
            </div>
            <div className="model col-md-6 col-sm-6">
              <p>Model:{starship.model}</p>
            </div>
            <div className="cost col-md-6 col-sm-6">
              <p>Cost: {starship.cost_in_credits}</p>
            </div>
            <div className="consumable col-md-6 col-sm-6">
              <p>Consumable: {starship.consumables}</p>
            </div>
            <div className="mglt col-md-6 col-sm-6">
              <p>MGLT: {starship.MGLT}</p>
            </div>
            <div className="starship_class col-md-6 col-sm-6">
              <p>Starship Class: {starship.starship_class}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default SearchResultsItem;

// export default (props) => {

// {/*<li className="row list-item">*/}
// {/*<div className="col-md-4 img-wrapper">*/}
// {/*<img src={starWarsImg} alt=""/>*/}
// {/*</div>*/}
// {/*<div className="col-md-8 content-wrapper">*/}
// {/*<div className="row">*/}
// {/*<div className="name col-md-6">*/}
// {/*<p>Name: starship.name</p>*/}
// {/*</div>*/}
// {/*<div className="model col-md-6">*/}
// {/*<p>Model: Model one</p>*/}
// {/*</div>*/}
// {/*<div className="cost col-md-6">*/}
// {/*<p>Cost: 10000000</p>*/}
// {/*</div>*/}
// {/*<div className="consumable col-md-6">*/}
// {/*<p>Consumable: 6 weeks</p>*/}
// {/*</div>*/}
// {/*<div className="mglt col-md-6">*/}
// {/*<p>MGLT: 100</p>*/}
// {/*</div>*/}
// {/*<div className="starship_class col-md-6">*/}
// {/*<p>Starship Class: Class test one</p>*/}
// {/*</div>*/}
// {/*</div>*/}
// {/*</div>*/}
// {/*</li>*/}
//   const {starship} = props;
//
//   return (
//     <li className="row list-item">
//       <div className="col-md-4 img-wrapper">
//         <img src={starWarsImg} alt=""/>
//       </div>
//       <div className="col-md-8 content-wrapper">
//         <div className="row">
//           <div className="name col-md-6">
//             <p>Name: starship.name</p>
//           </div>
//           <div className="model col-md-6">
//             <p>Model: Model one</p>
//           </div>
//           <div className="cost col-md-6">
//             <p>Cost: 10000000</p>
//           </div>
//           <div className="consumable col-md-6">
//             <p>Consumable: 6 weeks</p>
//           </div>
//           <div className="mglt col-md-6">
//             <p>MGLT: 100</p>
//           </div>
//           <div className="starship_class col-md-6">
//             <p>Starship Class: Class test one</p>
//           </div>
//         </div>
//       </div>
//     </li>
//   );
// }