import React from 'react';
import styles from '../../Admin/Admin.module.css';
import Notification from "../../../components/Notification/Notification";
import * as call from '../../../services/callChampionships';
import { NotificationManager } from 'react-notifications';
// import Sidebar from '../Sidebar/Sidebar';
class addChampionship extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championships: [],
      success: null,
      error: null,
      newChampionship: {
        name: '',
        country: ''
      }
    }

    this.handleInputChampionship = this.handleInputChampionship.bind(this);
    this.handleSubmitChampionship = this.handleSubmitChampionship.bind(this);


    this.chooseChampionship = this.chooseChampionship.bind(this);
  }

  componentDidMount() {
    call.getChampionships()
      .then(data =>
        this.setState({ championships: data }))
      .catch(err => { console.log(err) })

  }

  //je copie le state (...), je cible l'input([]) et je le remplit avec ce que j'ai écris (event.target.value)

  handleInputChampionship(event) {
    this.setState({
      newChampionship:
        { ...this.state.newChampionship, [event.target.name]: event.target.value }
    });
  }


  chooseChampionship(championship) {
    console.log(championship);
    if (championship[0]) {
      this.setState({
        newTeam:
          { ...this.state.newTeam, championship: championship[0].value }
      });
    }
  }

  handleSubmitChampionship(event) {
    event.preventDefault();
    call.postChampionship(this.state.newChampionship)
      .then(res => {
        NotificationManager.success(res.message, 'Succès', 2500)
        this.setState({
          success: res
        })
      })
      .catch(err => {
        NotificationManager.error(err, 'Erreur', 2500)
        this.setState({
          error: err
        })
      }
      )
  }



  render() {
    return (
      <>
        <Notification />
        {/* <Sidebar /> */}
        <div className={styles.admin}>
          <form onSubmit={this.handleSubmitChampionship}>
            <h1>CHAMPIONNAT :</h1>
            <label>
              Nom du championnat :
              <input
                name="name"
                type="text"
                value={this.state.newChampionship.name}
                onChange={this.handleInputChampionship}
                placeholder="Entrer un championnat..."

              />

              Pays du championnat :
              <input
                name="country"
                type="text"
                value={this.state.newChampionship.country}
                onChange={this.handleInputChampionship}
                placeholder="Entrer un pays..."
              />
            </label>
            <br />
            <input type="submit" value="Crée le championnat !" />
          </form>
        </div>

        
      </>

    )
  }
}
export default addChampionship;