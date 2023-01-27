import { ProgressBar } from "react-loader-spinner";
import { Load } from "./styled";

const Loading = () => {
    return (
        <Load>
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#FFFFFF'
                barColor='#DA00FE'
            />
        </Load>
    );
}

export default Loading;