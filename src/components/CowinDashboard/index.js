// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const apiUrlConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}
class CowinDashboard extends Component {
  state = {apiResult: apiUrlConstants.initial, chartList: []}

  componentDidMount() {
    this.getApiResults()
  }

  getApiResults = async () => {
    this.setState({apiResult: apiUrlConstants.loading})

    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      const formattedData = {
        lastSevenDaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        apiResult: apiUrlConstants.success,
        chartList: formattedData,
      })
    } else {
      this.setState({apiResult: apiUrlConstants.failure})
    }
  }

  getLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  getFailureView = () => (
    <div>
      <img
        className="failure-image"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1 className="failure-heading">Something Went Wrong</h1>
    </div>
  )

  getSuccessView = () => {
    const {chartList} = this.state
    const {
      lastSevenDaysVaccination,
      vaccinationByGender,
      vaccinationByAge,
    } = chartList
    return (
      <>
        <VaccinationCoverage coverage={lastSevenDaysVaccination} />
        <VaccinationByGender genderDetails={vaccinationByGender} />
        <VaccinationByAge ageDetails={vaccinationByAge} />
      </>
    )
  }

  getSwitchResults = () => {
    const {apiResult} = this.state
    switch (apiResult) {
      case apiUrlConstants.success:
        return this.getSuccessView()
      case apiUrlConstants.failure:
        return this.getFailureView()
      case apiUrlConstants.loading:
        return this.getLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            className="logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png "
          />
          <p className="logo-name">Co-WIN</p>
        </div>
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        {this.getSwitchResults()}
      </div>
    )
  }
}
export default CowinDashboard
