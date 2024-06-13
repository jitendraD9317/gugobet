import React from 'react'
import Home from '../page/Home'
import Promotion from '../page/Promotion'
import { Route, Routes } from 'react-router-dom'
import Bonus from '../page/Bonus'
import Profile from '../page/Profile'
import Changepassword from '../page/Changepassword'
import BonusRecord from '../page/BonusRecord'
import Deposit from '../page/Deposit'
import Imps from '../component/deposit-components/Imps'
import Tether from '../component/deposit-components/Tether'
import BankInfo from '../page/Bankinfo'
import Transection from '../page/Transection'
import Withdraw from '../page/Withdraw'
import BankAdd from '../page/BankAdd'
import MobileFooter from '../component/MobileFooter'
import Cricket from '../page/Cricket'

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/promotion"  element={<Promotion/>}/>
      <Route path="/bonus"  element={<Bonus/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/changepassword"  element={<Changepassword/>}/>
      <Route path="/bonus-record"  element={<BonusRecord/>}/>
      <Route path="/deposit"  element={<Deposit/>}/>
      <Route path="/imps"  element={<Imps/>}/>
      <Route path="/usdt"  element={<Tether/>}/>
      <Route path="/withdraw"  element={<Withdraw/>}/>
      <Route path="/add-bank"  element={<BankAdd/>}/>
      <Route path="/bank-info"  element={<BankInfo/>}/>
      <Route path="/transaction-details"  element={<Transection/>}/>
      <Route path="/mobileFooter"  element={<MobileFooter/>}/>
      <Route path="/cricket"  element={<Cricket/>}/>
    </Routes>
  )
}

export default AllRoute