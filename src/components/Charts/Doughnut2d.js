import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Doughnut2d = ({data}) => {
    const chartConfigs = {
        type: 'doughnut2d',
        width: '100%',
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                captions: "Stars Per Language",
                decimals: 0,
                theme: 'candy',
                doughnutRadius: '45%',
                showPercentValues: 0
            },
            data
        },
    };
    return <ReactFC {...chartConfigs} />;
};

export default Doughnut2d;
