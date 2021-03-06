import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log("menu component constructor");
  }

  render() {
    if (this.props.dishes.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Loading />
            </div>
          </div>
        </div>
      );
    } else if (this.props.dishes.errorMessage != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>{this.props.dishes.errorMessage}</h4>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("menu component render");
      const menu = this.getMenu();
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
            </div>
          </div>
          <div className="row">{menu}</div>
        </div>
      );
    }
  }

  componentDidMount() {
    console.log("menu component componentDidMount");
  }

  getMenu() {
    const menu = this.props.dishes.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 mt-5">
          <Card>
            <Link to={`menu/${dish.id}`}>
              <CardImg top width="100%" src={baseUrl + dish.image}></CardImg>
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Link>
          </Card>
        </div>
      );
    });

    return menu;
  }

  // getMenu() {
  //   const menu = this.props.dishes.map((dish) => (
  //     <div className="row" key={dish.id}>
  //       <div className="col-md-12 mt-5">
  //         <Media>
  //           <Link to={`menu/${dish.id}`}>
  //             <Media left>
  //               <Media object src={dish.image} className="mr-3"></Media>
  //             </Media>
  //             <Media body>
  //               <Media heading>{dish.name}</Media>
  //               <p>{dish.description}</p>
  //             </Media>
  //           </Link>
  //         </Media>
  //       </div>
  //     </div>
  //   ));

  //   return menu;
  // }
}

export default Menu;
