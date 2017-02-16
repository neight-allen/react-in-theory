const React = require('react')
const axios = require('axios')
const ReactDOM = require('react-dom')
const FoodRow = require('./foodRow')

class MealTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foods: [] }
    this.setStateFromAPI()
  }

  setStateFromAPI() {
    axios.get(`https://quantified-api.herokuapp.com/v1/meals/${this.props.mealId}.json`)
      .then((response) => {
        this.setState({foods: response.data})
      })
  }

  deleteRow(join_id){
    let url = "https://quantified-api.herokuapp.com/v1/meal_foods"
    axios.delete(`${url}/${join_id}.json`)
      .then(() => {
        let newFoods = this.state.foods.filter((food) => {
          return food.join_id !== join_id
        })
        this.setState({foods: newFoods})
      })
  }

  addRandomFood() {
    let url = "https://quantified-api.herokuapp.com/v1/meal_foods.json"
    let food_id = Math.round(Math.random() * 5)
    let joinData = {food_id: food_id, meal_id: this.props.mealId}

    axios.post(url, joinData).then(this.setStateFromAPI.bind(this))
  }

  render(){
    let foodRows = this.state.foods.map((food) => {
      return (<FoodRow key={food.join_id}
        name={food.name}
        calories={food.calories}
        removeSelf={this.deleteRow.bind(this, food.join_id)} />)
    })

    return (
      <div>
        <h2>{this.props.mealName}</h2>
        <table>
          <thead>
            <tr><th>Name</th><th>Calories</th><th></th></tr>
          </thead>
          <tbody>
            {foodRows}
          </tbody>
        </table>
        <button onClick={this.addRandomFood.bind(this)}>Add Random Food</button>
      </div>
    )
  }
}

module.exports = MealTable;
