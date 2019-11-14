import React from 'react';
import styles from '../../Admin/Admin.module.css'
import Notification from "../../../components/Notification/Notification";
import * as call from '../../../services/callChampionships';
import * as show from '../../../services/callTeams';
import Select from 'react-dropdown-select';
import { NotificationManager } from 'react-notifications';
// import Sidebar from '../Sidebar/Sidebar';
class addTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championships: [],
      success: null,
      error: null,
      newTeam: {
        name: '',
        championship: '',
        flag: ''
      }
    };

    this.handleInputTeam = this.handleInputTeam.bind(this);
    this.handleSubmitTeam = this.handleSubmitTeam.bind(this);
    this.chooseChampionship = this.chooseChampionship.bind(this);
  }

  componentDidMount() {
    call.getChampionships()
      .then(data =>
        this.setState({ championships: data }))
      .catch(err => { console.log(err) })

  }

  //je copie le state (...), je cible l'input([]) et je le remplit avec ce que j'ai écris (event.target.value)



  handleInputTeam(event) {
    this.setState({
      newTeam:
        { ...this.state.newTeam, [event.target.name]: event.target.value }
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


  handleSubmitTeam(event) {
    event.preventDefault();
    //Faire un message d'erreur generique lorsque l'on est pas connecté au serveur
    show.postTeam(this.state.newTeam)
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
      })
  }

  render() {
    return (
      <>
        <Notification />
        {/* <Sidebar /> */}
        <div className={styles.admin}>
          <form onSubmit={this.handleSubmitTeam}>
            <h1>EQUIPE :</h1>

            <label>
              Nom de l'équipe :
            <input
                name="name"
                type="text"
                value={this.state.newTeam.name}
                onChange={this.handleInputTeam}
                placeholder="Entrer une équipe..."
              />
              Championnat :

              <Select
                name="championship"
                options={this.state.championships.map(championship => {
                  return { value: championship._id, label: championship.name }
                })}
                value={this.state.newTeam.championship}
                onChange={(event) => { this.chooseChampionship(event) }}
                placeholder="Choisissez le championnat de votre équipe ..."
              />


              Logo:
              <input
                name="flag"
                type="text"
                value={this.state.newTeam.flag}
                onChange={this.handleInputTeam}
                placeholder="Ajoutez un logo pour votre équipe ..."
              />
            </label>
            <br />
            <input type="submit" value="Crée l'équipe !" />
          </form>
        </div>
      </>

    )
  }
}
export default addTeam;