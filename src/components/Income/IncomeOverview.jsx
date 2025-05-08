import React, { useEffect, useState } from 'react'

function IncomeOverview({transactions, onAddIncome}) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => {

        }
    }, [transactions]);

  return (
    <div>
        
    </div>
  )
}

export default IncomeOverview