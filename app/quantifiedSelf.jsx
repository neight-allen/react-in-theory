const React = require('react')
const ReactDOM = require('react-dom')
const MealTable = require('./mealTable')

class QuantifiedSelf extends React.Component {
  render() {
    return (
      <div>
        <MealTable mealName="Breakfast" mealId={1} />
        <MealTable mealName="Lunch" mealId={2} />
        <MealTable mealName="Dinner" mealId={3} />
        <MealTable mealName="Snacks" mealId={4} />
      </div>
    )
  }
}

module.exports = QuantifiedSelf
