import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddProducts } from './components/AddProducts';
import { ProductsContextProvider } from './context/ProductsContext';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { auth, db} from './config/Config';
import { CartContextProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import { Cashout } from './components/Cashout';
import { NotFound } from './components/NotFound';

export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }


  render() {

    return (
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home user={this.state.user} />} />
              <Route path="/addproducts" element={<AddProducts/>}/>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path='/cartproducts' element={<Cart user={this.state.user} />}/>
              <Route path='/cashout' element={<Cashout user={this.state.user} />}/>
              <Route path='/cashout/cartproducts' element={<Cashout user={this.state.user} />}/>
              <Route element={NotFound} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    )
  }
}

export default App

