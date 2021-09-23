import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';

class Input extends Component {

  render() {
    //console.log("input props found>>>>>>>>>", this.props);
    const { input, icon, label, is_label, isRequired, type, meta, is_input_group ,isdisabled ,is_value } = this.props;


    var reqClassName = '';
    if(isRequired){
      reqClassName = 'required';
    }

    var inputLabel = '';
    if(is_label) {
      inputLabel = <label className={"control-label "+reqClassName}>{label}</label>;
    }
 
    if(type === "checkbox"){
      return (
        <div className="checkbox form-check">
          <label>
            <input {...input} type={type} className="form-check-input" /> {label}
          </label>
          {meta.touched && ((meta.error && <div className="error">{meta.error}</div>) || (meta.warning && <div className="error">{meta.warning}</div>))}
        </div>
      )
    }
    else if(icon && is_input_group === undefined) {
      return (
        <div>
          {inputLabel}
          <div className="input-group">
            <span className="input-group-addon"><i className={icon}></i></span>
            <input {...input} placeholder={label} type={type} className="form-control" />
          </div>
          {meta.touched && ((meta.error && <span className="error">{meta.error}</span>) || (meta.warning && <span className="error">{meta.warning}</span>))}
        </div>
      )
    } else if(icon && is_input_group) {
      return (
        <div>
          {inputLabel}
          <div className="input-group">
            <span className="input-group-addon">{icon}</span>
            <input {...input} placeholder={label} type={type} className="form-control" />
          </div>
          {meta.touched && ((meta.error && <span className="error">{meta.error}</span>) || (meta.warning && <span className="error">{meta.warning}</span>))}
        </div>
      )
    } else if(isdisabled && is_value) {
      return (
        <div>
          {inputLabel}
          <input {...input} placeholder={label} type={type} disabled value={is_value} className="form-control" />
          {meta.touched && ((meta.error && <span className="error">{meta.error}</span>) || (meta.warning && <span className="error">{meta.warning}</span>))}
        </div>
      )
    } else {
      return (
        <div>
          {inputLabel}
          <input {...input} placeholder={label} type={type} value={is_value} className="form-control" />
          {meta.touched && ((meta.error && <span className="error">{meta.error}</span>) || (meta.warning && <span className="error">{meta.warning}</span>))}
        </div>
      )
    }
  }
}

export default Input;
