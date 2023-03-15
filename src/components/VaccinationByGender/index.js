// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderDetails} = props

  return (
    <div className="gender-container">
      <h1 className="gender-heading">Vaccination by gender</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={genderDetails}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Female" fill="#fecba6" />
          <Cell name="Male" fill="#b3d23f" />
          <Cell name="Other" fill="#a44c9e" />
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
export default VaccinationByGender
