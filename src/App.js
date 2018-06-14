import React from 'react'

class App extends React.Component {

    state = {
        userData: []
      }   

        
      updateQuery = (query) => {
        if(query == '')
        this.state.userData = []
        else {
          fetch('https://api.github.com/search/users?q='+query)
          .then(Data => Data.json())
          .then((Data) => {
          this.setState({
            userData : Data.items
          })          
        })
      }}

//       this.setState((userData) => ({
//         userData : Data.items
//       })
// )          


    render() {    
        return (
          <div>
            <div className="list-contacts">
            <div className="list-contacts-top">
            <input className="search-contacts" type="text" placeholder="Search by title or author" 
             onChange = {(e) => this.updateQuery(e.target.value)} ></input>

          </div>
          </div>
          <ul className="list-group">
            {this.state.userData !== '' && (
            this.state.userData.map((d) => (
              <li>{d.login}</li>
            ))          
            )}
            </ul>
            </div>
        
        )
    }
    }


    export default App