// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccinationData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="container3">
      <h1 className="heading3">Vaccination Coverage</h1>
      <BarChart data={last7DaysVaccinationData} width={1000} height={300}>
        <XAxis
          dataKey="Vaccination Coverage"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose_1" name="dose 1" fill="#1f77b4" barSize="20%" />
        <Bar dataKey="dose_2" name="dose 2" fill=" #f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
