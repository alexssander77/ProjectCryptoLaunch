import ApexCharts from 'react-apexcharts';

export default function Chart(props){

    const options = {
        xaxis: {
            type: 'datetime',
            labels: {
              datetimeUTC: false, 
              format: 'dd/MM HH:mm',
              formatter: function (value, timestamp) {
                return new Date(timestamp).toLocaleString('pt-BR', {
                  timeZone: 'America/Sao_Paulo',
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: '2-digit',
                });
              },
            },
          },
        yaxis:{
            tooltip: {
                enable: true
            }
        }
    }

    const series =[{
        data: props.data
      }]

    return(
        <ApexCharts options={options}
                    series={series}
                    type="candlestick"
                    width={800}
                    height={600}/>
    )
}