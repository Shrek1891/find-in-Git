import ReactFC from "react-fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import FusionCharts from "fusioncharts";


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Bar3D = ({data}) => {
    const chartConfigs = {
        type: 'bar3d',
        width: '100%',
        height: 400,
        dataFormat: 'json',
        dataSource: {
            "chart": {
                captions: "Most Forked",
                yAxisName: "Forks",
                xAxisName: "Repos",
                xAxisNameFontSize: '16px',
                yAxisNameFontSize: '16px'

            },
            data
        },
    };
    return <ReactFC {...chartConfigs} />;
    ;
};

export default Bar3D;
