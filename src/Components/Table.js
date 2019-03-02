import React from "react";
import "./style.css";

export default function Table({ head, val }) {
  var calories = 0;
  var carbs = 0;
  var proteins = 0;
  var fat = 0;

  const setVal = () => {
    val.map(row => {
      row.map((entry, index) => {
        if (index + 1 === 3) {
          carbs += parseInt(entry);
        }
        if (index + 1 === 4) {
          fat += parseInt(entry);
        }
        if (index + 1 === 5) {
          proteins += parseInt(entry);
        }
        if (index + 1 === 6) {
          calories += parseInt(entry);
        }
      });
    });
  };

  // const mainHead = () => {
  //     return(

  //     )
  // }

  const headList = head.map((entry, index) => {
    if (index + 1 === 1) {
      return <th className="darkRed whiteText">{entry}</th>;
    }
    if (index + 1 === 3) {
      return <th className="darkPink whiteText">{entry}</th>;
    }
    if (index + 1 === 4) {
      return <th className="lightRed whiteText">{entry}</th>;
    }
    if (index + 1 === 5) {
      return <th className="darkerPink whiteText">{entry}</th>;
    }
    if (index + 1 === 6) {
      return <th className="darkerRed whiteText">{entry}</th>;
    }
    return <th>{entry}</th>;
  });

  const entries = val.map(row => {
    return (
      <tr>
        {row.map((entry, index) => {
          if (index + 1 === 1) {
            return <td className="darkRed whiteText">{entry}</td>;
          }
          if (index + 1 === 3) {
            return <td className="darkPink whiteText">{entry}</td>;
          }
          if (index + 1 === 4) {
            return <td className="lightRed whiteText">{entry}</td>;
          }
          if (index + 1 === 5) {
            return <td className="darkerPink whiteText">{entry}</td>;
          }
          if (index + 1 === 6) {
            return <td className="darkerRed whiteText">{entry}</td>;
          }
          return <td>{entry}</td>;
        })}
      </tr>
    );
  });

  return (
    <div>
      {setVal()}
      <table className="total-table consumptionBar">
        <tr>
          <td colspan="8" className="heading whiteText">
            TODAY'S CONSUMPTION
          </td>
        </tr>
        <tr>
          <td>CARBS</td>
          <td className="table-main-value whiteText greenRow">{carbs}</td>
          <td>FATS</td>
          <td className="table-main-value whiteText blueRow">{fat}</td>
          <td>PROTEINS</td>
          <td className="table-main-value whiteText redRow">{proteins}</td>
          <td>CALORIES</td>
          <td className="table-main-value white greenRow">{calories}</td>
        </tr>
      </table>
      {/* {} */}
      {/* Shreyansh */}
      <table>
        <tr className="table-head-row">{headList}</tr>
        {entries}
      </table>
    </div>
  );
}

// import React, { Component } from "react";
// import "./style.css";
// import Table from "./components/Table";
// // const tableColor = {backgroundColor:"#FDECEC"}
// // const colColor = {backgroundColor:"#EB5757", color: "white"}

// class App extends Component {
//   state = {
//     head: ["MEAL", "FOOD ITEM", "CARBS", "FAT", "PROTEINS", "CALORIES"],
//     val: [
//       ["BREAKFAST", "MILK (1 MUG)", "5", "1", "3", "42"],
//       ["BRUNCH", "BISCUITS", "45", "16", "6", "353"],
//       ["LUNCH", "DOSA", "17", "3", "2", "120"],
//       ["SNACKS", "5 EGGS", "5", "55", "65", "500"],
//       ["DINNER", "IDLI SAMBAR", "8", "5", "2", "40"]
//     ]
//   };

//   render() {
//     return (
//       <div>
//         <Table head={this.state.head} val={this.state.val} />
//       </div>
//     );
//   }
// }

// export default App;
