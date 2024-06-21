



import './App.css';
import LoginForm from './LoginForm';
import Nav from './Nav';
import WelcomeSection from './WelcomeSection';


//This is the API url for created on a local json server
const url = 'https://6659cc10de346625136df8bb.mockapi.io/cars/car'

//Main jquery .get call to get the cars that exist in the car shop.

function App() {



  //this is a fetch call to delete the selected can

  function deleteCar(id) {

    fetch(`${url}/${id}`, {
      method: "DELETE",
    })

  }

  //POST ajax call to add new cars. Checks if there is content in the id field.


  function addCar() {

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: $('#idUpdate').val(),
        make: $('#makeUpdate').val(),
        model: $('#modelUpdate').val(),
        mileage: $('#mileageUpdate').val(),
        year: $('#yearUpdate').val(),
        price: $('#priceUpdate').val()
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    });
  }


  //PUT ajax call to add update existing cars. Checks if there is content in the id field.

  function updateCar() {

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: $('#idUpdate').val(),
        make: $('#makeUpdate').val(),
        model: $('#modelUpdate').val(),
        mileage: $('#mileageUpdate').val(),
        year: $('#yearUpdate').val(),
        price: $('#priceUpdate').val()
      })
    };

    //alert(requestOptions.body);

    fetch(url + '/' + $('#idUpdate').val(), requestOptions)
      .then(response => response.json());
    JSON.stringify({
      "firstname": fname,
      "lastname": lname,
      "grade": grade
    })

  }
  return (
    <div classNameName="App">

      return (

      <>
        <body className="justify-content-center">
          <h4 className="pt-4">The Car Shop</h4>
          <form>
            <div id="car_list" className="container row d-flex justify-content-center">

            </div>

            <div className="submitForm">
              <h4 className="pt-5 ">Add/Update Car</h4>
              <div>
                <label for="idUpdate" className="form-label">Id</label>
                <input type="text" className="form-control w-50" id="idUpdate" />
              </div>
              <div>
                <label for="makeUpdate">Make</label>
                <input type="text" className="form-control w-50" id="makeUpdate" />
              </div>
              <div>
                <label for="modelUpdate">Model</label>
                <input type="text" className="form-control w-50" id="modelUpdate" />
              </div>
              <div>
                <label for="mileageUpdate">Miles</label>
                <input type="text" className="form-control w-50" id="mileageUpdate" />
              </div>
              <div>
                <label for="priceUpdate">Price</label>
                <input type="text" className="form-control w-50" id="priceUpdate" />
              </div>
              <div>
                <label for="yearUpdate">Year</label>
                <input type="text" className="form-control w-50" id="yearUpdate" />
                <br></br><button >Get</button> <button onclick="updateCar()">Update</button> <button id="btn" onclick="addCar()">Add Car</button>
                <br></br><br></br><br></br>
              </div>
            </div>
          </form>
        </body>

      </>


      )

    </div>
  );

}

export default App;
