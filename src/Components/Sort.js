import React, { Component } from "react";

export default function Sort(mas) {
  let test = "";
  mas.forEach(element => {
    test += element;
  });
  console.log("Hi from Sort#1", test);

  
  let oneStr = mas.reduce((oneStr, el) => oneStr + el);
  console.log("Hi from Sort#2", oneStr);
  return oneStr;
}
