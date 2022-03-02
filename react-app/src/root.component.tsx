import React from "react";
import './root.css';

export default function Root(props) {
  return <div className="react"><h1 className="react">Hello there! {props.name} is mounted!</h1></div>;
}
