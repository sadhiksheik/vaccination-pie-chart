// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {ageDetails} = props

  return (
    <div className="age-container">
      <h1 className="age-heading">Vaccination by Age</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={ageDetails}
          startAngle={0}
          endAngle={360}
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="15-18" fill="#fecba6" />
          <Cell name="19-22" fill="#b3d23f" />
          <Cell name="22-40" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
