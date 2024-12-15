import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import Overviews from './components/Overview'
import MdMessage from './components/MdMessage'
import Gallery from './components/Gallery'
import Excelence from './components/Excelence'
import Electrophysiology from './components/Electrophysiology'
import LungTransplant from './components/LungTransplant'
import HeartTransplant from './components/HeartTransplant'
import InternationalCardio from './components/InternationalCardiology'
import Neurology from './components/Neurology'
import InternationalNeurology from './components/InternationalNeurology'
import Gynecology from './components/Gynecology'
import Oncosurgery from './components/Oncosurgery'
import MedicalOncology from './components/MedicalOncology'
import HematoOncology from './components/HematoOncology'
import RadiationOncology from './components/RadiationOncology'
import ThoracicOncology from './components/ThoracicOncology'
import Pulmonology from './components/Pulmonology'
import Nephrology from './components/Nephrology'
import Ent from './components/Ent'
import Oral from './components/Oral'
import Infectious from './components/Infectious'
import FindDoctor from './components/FindDoctor'
import Testimonials from './components/Testimonials'
import InternationalPatients from './components/InternationalPatients'
import Insurance from './components/Insurance'
import Symptom from './components/Symptom'
import Contact from './components/Contact'
import Appointment from './components/Appointment'
import SymptomScreening from './components/SymptomScreening'
import { Toaster } from 'react-hot-toast'
import Neurology2 from './components/Neurology2'
import CardiacScience from './components/CardiacScience'
import Oncology from './components/Oncology'
import Thoracic from './components/Thoracic'  
import Pulmonology2 from './components/Pulmonology2'
import Ent2 from './components/Ent2'
import Infectious2 from './components/Infectious2'
import Nephrology2 from './components/Nephrology2'
import MsgAppointment from './components/MsgAppointment'
import ApekshaPatill from './components/ApekshaPatill'
import ManmathShelke from './components/ManmathShelke'
import TirupattiShelke from './components/TirupattiShelke'
import RajeshSwami from './components/RajeshSwami'
import AnupKulkarni from './components/AnupKulkarni'
import ArjunShelke from './components/ArjunShelke'
import SharadSonawane from './components/SharadSonawane'
import SonalBarole from './components/SonalBarole'
import TusharGangawane from './components/TusharGangawane'
import ApekshaPatilNeurology from './components/ApekshaPatilNeurology'
import ManmathShelkeNeurology from './components/ManmathShelkeNeurology'
import TirupattiShelkeNeurology from './components/TirupattiShelkeNeurology'
import RajeshSwamiNeurology from './components/RajeshSwamiNeurology'
import AnupKulkarniNeurology from './components/AnupKulkarniNeurology'
import ArjunShelkeNeurology from './components/ArjunShelkeNeurology'
import SharadSonawaneNeurology from './components/SharadSonawaneNeurology'
import SonalBaroleNeurology from './components/SonalBaroleNeurology'
import TusharGangawaneNeurology from './components/TusharGangawaneNeurology'
import ApekshaPatilOncology from './components/ApekshaPatilOncology'
import ManmathShelkeOncology from './components/ManmathShelkeOncology'
import TirupattiShelkeOncology from './components/TirupattiShelkeOncology'
import RajeshSwamiOncology from './components/RajeshSwamiOncology'
import AnupKulkarniOncology from './components/AnupKulkarniOncology'
import ArjunShelkeOncology from './components/ArjunShelkeOncology'
import SharadSonawaneOncology from './components/SharadSonawaneOncology'
import SonalBaroleOncology from './components/SonalBaroleOncology'
import TusharGangawaneOncology from './components/TusharGangawaneOncology'
import ApekshaPatilThoracic from './components/ApekshaPatilThoracic'
import ManmathShelkeThoracic from './components/ManmathShelkeThoracic'
import TirupattiShelkeThoracic from './components/TirupattiShelkeThoracic'
import ApekshaPatilPulmonlogy from './components/ApekshaPatilPulmonlogy'
import ManmathShelkePulmonology from './components/ManmathShelkePulmonology'
import TirupattiShelkePulmonology from './components/TirupattiShelkePulmonology'
import RajeshSwamiPulmonology from './components/RajeshSwamiPulmonology'
import AnupKulkarniPulmonology from './components/AnupKulkarniPulmonology'
import ArjunShelkePulmonology from './components/ArjunShelkePulmonology'
import SharadSonawanePulmonology from './components/SharadSonawanePulmonology'
import SonalBarolePulmonology from './components/SonalBarolePulmonology'
import TusharGangawanePulmonology from './components/TusharGangawanePulmonology'
import ApekshaPatilInfectious from './components/ApekshaPatilInfectious'
import ManmathShelkeInfectious from './components/ManmathShelkeInfectious'
import TirupattiShelkeInfectious from './components/TirupattiShelkeInfectious'
import ApekshaPatilENT from './components/ApekshaPatilENT'
import ManmathShelkeENT from './components/ManmathShelkeENT'
import TirupattiShelkeENT from './components/TirupattiShelkeENT'
import RajeshSwamiENT from './components/RajeshSwamiENT'
import AnupKulkarniENT from './components/AnupKulkarniENT'
import ArjunShelkeENT from './components/ArjunShelkeENT'
import SharadSonawaneENT from './components/SharadSonawaneENT'
import SonalBaroleENT from './components/SonalBaroleENT'
import TusharGangawaneENT from './components/TusharGangawaneENT'
import ApekshaPatilNephrology from './components/ApekshaPatilNephrology'
import ManmathShelkeNephrology from './components/ManmathShelkeNephrology'
import TirupattiShelkeNephrology from './components/TirupattiShelkeNephrology'
import RajeshSwamiNephrology from './components/RajeshSwamiNephrology'
import AnupKulkarniNephrology from './components/AnupKulkarniNephrology'
import ArjunShelkeNephrology from './components/ArjunShelkeNephrology'
import SharadSonawaneNephrology from './components/SharadSonawaneNephrology'
import SonalBaroleNephrology from './components/SonalBaroleNephrology'
import TusharGangawaneNephrology from './components/TusharGangawaneNephrology'
import BuyMedicine from './components/BuyMedicine'
import ViewHealhRecord from './components/ViewHealhRecord'
import Ambulence from './components/Ambulence'
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Overviews' element={<Overviews/>}/>
      <Route path='/MdMessage' element={<MdMessage/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Excelence' element={<Excelence/>}/>
      <Route path='/Electrophysiology' element={<Electrophysiology/>}/>
      <Route path='/LungTransplant' element={<LungTransplant/>}/>
      <Route path='/HeartTransplant' element={<HeartTransplant/>}/>
      <Route path='/InternationalCardiology' element={<InternationalCardio/>}/>
      <Route path='/Neurology' element={<Neurology/>}/>
      <Route path='/internationalNeurology' element={<InternationalNeurology/>}/>
      <Route path='/Gynecology' element={<Gynecology/>}/>
      <Route path='/Oncosurgery' element={<Oncosurgery/>}/>
      <Route path='/MedicalOncology' element={<MedicalOncology/>}/>
      <Route path='/HematoOncology' element={<HematoOncology/>}/>
      <Route path='/RadiationOncology' element={<RadiationOncology/>}/>
      <Route path='/ThoracicOncology' element={<ThoracicOncology/>}/>
      <Route path='/pulmonology' element={<Pulmonology/>}/>
      <Route path='/Nephrology' element={<Nephrology/>}/>
      <Route path='/Ent' element={<Ent/>}/>
      <Route path='/Oral' element={<Oral/>}/>
      <Route path='/Infectious' element={<Infectious/>}/>
      <Route path='/FindDoctor' element={<FindDoctor/>}/>
      <Route path='/Testimonials' element={<Testimonials/>}/>
      <Route path='/InternationalPatients' element={<InternationalPatients/>}/>
      <Route path='/Insurance' element={<Insurance/>}/>
      <Route path='/Symptom' element={<Symptom/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Appointment' element={<Appointment/>}/>
      <Route path='/SymptomScreening' element={<SymptomScreening/>}/>
      <Route path='/Neurology2' element={<Neurology2/>}/>
      <Route path='/CardiacScience' element={<CardiacScience/>}/>
      <Route path='/Oncology' element={<Oncology/>}/>
      <Route path='/Thoracic' element={<Thoracic/>}/>
      <Route path='/Pulmonology2' element={<Pulmonology2/>}/>
      <Route path='/Ent2' element={<Ent2/>}/>
      <Route path='/Infectious2' element={<Infectious2/>}/>
      <Route path='/Nephrology2' element={<Nephrology2/>}/>
      <Route path='/MsgAppointment' element={<MsgAppointment/>}/>
      <Route path='/ApekshaPatill' element={<ApekshaPatill/>}/>
      <Route path='/ManmathShelke' element={<ManmathShelke/>}/>
      <Route path='/TirupattiShelke' element={<TirupattiShelke/>}/>
      <Route path='/RajeshSwami' element={<RajeshSwami/>}/>
      <Route path='/AnupKulkarni' element={<AnupKulkarni/>}/>
      <Route path='/ArjunShelke' element={<ArjunShelke/>}/>
      <Route path='/SharadSonawane' element={<SharadSonawane/>}/>
      <Route path='/SonalBarole' element={<SonalBarole/>}/>
      <Route path='/TusharGangawane' element={<TusharGangawane/>}/>
      <Route path='/ApekshaPatilNeurology' element={<ApekshaPatilNeurology/>}/>
      <Route path='/ManmathShelkeNeurology' element={<ManmathShelkeNeurology/>}/>
      <Route path='/TirupattiShelkeNeurology' element={<TirupattiShelkeNeurology/>}/>
      <Route path='/RajeshSwamiNeurology' element={<RajeshSwamiNeurology/>}/>
      <Route path='/AnupKulkarniNeurology' element={<AnupKulkarniNeurology/>}/>
      <Route path='/ArjunShelkeNeurology' element={<ArjunShelkeNeurology/>}/>
      <Route path='/SharadSonawaneNeurology' element={<SharadSonawaneNeurology/>}/>
      <Route path='/SonalBaroleNeurology' element={<SonalBaroleNeurology/>}/>
      <Route path='/TusharGangawaneNeurology' element={<TusharGangawaneNeurology/>}/>
      <Route path='/ApekshaPatilOncology' element={<ApekshaPatilOncology/>}/>
      <Route path='/ManmathShelkeOncology' element={<ManmathShelkeOncology/>}/>
      <Route path='/TirupattiShelkeOncology' element={<TirupattiShelkeOncology/>}/>
      <Route path='/RajeshSwamiOncology' element={<RajeshSwamiOncology/>}/>
      <Route path='/AnupKulkarniOncology' element={<AnupKulkarniOncology/>}/>
      <Route path='/ArjunShelkeOncology' element={<ArjunShelkeOncology/>}/>
      <Route path='/SharadSonawaneOncology' element={<SharadSonawaneOncology/>}/>
      <Route path='/SonalBaroleOncology' element={<SonalBaroleOncology/>}/>
      <Route path='/TusharGangawaneOncology' element={<TusharGangawaneOncology/>}/>
      <Route path='/ApekshaPatilThoracic' element={<ApekshaPatilThoracic/>}/>
      <Route path='/ManmathShelkeThoracic' element={<ManmathShelkeThoracic/>}/>
      <Route path='/TirupattiShelkeThoracic' element={<TirupattiShelkeThoracic/>}/>
      <Route path='/ApekshaPatilPulmonology' element={<ApekshaPatilPulmonlogy/>}/>
      <Route path='/ManmathShelkePulmonology' element={<ManmathShelkePulmonology/>}/>
      <Route path='/TirupattiShelkePulmonology' element={<TirupattiShelkePulmonology/>}/>
      <Route path='/RajeshSwamiPulmonology' element={<RajeshSwamiPulmonology/>}/>
      <Route path='/AnupKulkarniPulmonology' element={<AnupKulkarniPulmonology/>}/>
      <Route path='/ArjunShelkePulmonology' element={<ArjunShelkePulmonology/>}/>
      <Route path='/SharadSonawanePulmonology' element={<SharadSonawanePulmonology/>}/>
      <Route path='/SonalBarolePulmonology' element={<SonalBarolePulmonology/>}/>
      <Route path='/TusharGangawanePulmonology' element={<TusharGangawanePulmonology/>}/>
      <Route path='/ApekshaPatilInfectious' element={<ApekshaPatilInfectious/>}/>
      <Route path='/ManmathShelkeInfectious' element={<ManmathShelkeInfectious/>}/>
      <Route path='/TirupattiShelkeInfectious' element={<TirupattiShelkeInfectious/>}/>
      <Route path='/ApekshaPatilENT' element={<ApekshaPatilENT/>}/>
      <Route path='/ManmathShelkeENT' element={<ManmathShelkeENT/>}/>
      <Route path='/TirupattiShelkeENT' element={<TirupattiShelkeENT/>}/>
      <Route path='/RajeshSwamiENT' element={<RajeshSwamiENT/>}/>
      <Route path='/AnupKulkarniENT' element={<AnupKulkarniENT/>}/>
      <Route path='/ArjunShelkeENT' element={<ArjunShelkeENT/>}/>
      <Route path='/SharadSonawaneENT' element={<SharadSonawaneENT/>}/>
      <Route path='/SonalBaroleENT' element={<SonalBaroleENT/>}/>
      <Route path='/TusharGangawaneENT' element={<TusharGangawaneENT/>}/>
      <Route path='/ApekshaPatilNephrology' element={<ApekshaPatilNephrology/>}/>
      <Route path='/ManmathShelkeNephrology' element={<ManmathShelkeNephrology/>}/>
      <Route path='/TirupattiShelkeNephrology' element={<TirupattiShelkeNephrology/>}/>
      <Route path='/RajeshSwamiNephrology' element={<RajeshSwamiNephrology/>}/>
      <Route path='/AnupKulkarniNephrology' element={<AnupKulkarniNephrology/>}/>
      <Route path='/ArjunShelkeNephrology' element={<ArjunShelkeNephrology/>}/>
      <Route path='/SharadSonawaneNephrology' element={<SharadSonawaneNephrology/>}/>
      <Route path='/SonalBaroleNephrology' element={<SonalBaroleNephrology/>}/>
      <Route path='/TusharGangawaneNephrology' element={<TusharGangawaneNephrology/>}/>
      <Route path='/BuyMedicine' element={<BuyMedicine/>}/>
      <Route path='/ViewHealhRecord' element={<ViewHealhRecord/>}/>
      <Route path='/Ambulence' element={<Ambulence/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App