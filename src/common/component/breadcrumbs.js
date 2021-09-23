import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setBreadcrumbs } from '../library/system/action';
class Breadcrumbs extends Component {

  componentDidMount() {
    this.props.setBreadcrumbs(this.props.breadcrumbs); 

  }
  renderBreadcrumb(breadcrumbs){
    return breadcrumbs.map((breadcrumb) => {
      return(
        <li key={"breadcrumb."+breadcrumb.value}>
          <Link to={breadcrumb.value}>{breadcrumb.text}</Link>
        </li>
      );
    });
  }

  render() {
    const { set_breadcrumbs } = this.props;
    if(!set_breadcrumbs){
      return <div className="loading">Loading</div>
    }
    return (
      <ul className="breadcrumb">
        <li><Link  class="font-weight-bold" to={"/"}><i className="fa fa-home  ecr-link-primary"></i></Link></li>
        {this.renderBreadcrumb(set_breadcrumbs)}
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return {
    set_breadcrumbs : state.library.set_brid_link,
  }
}
export default connect(mapStateToProps, {setBreadcrumbs })(Breadcrumbs);