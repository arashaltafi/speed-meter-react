import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    DangerPath,
    Indicator,
} from 'react-speedometer';

const SpeedMeter = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center gap-8'>

            <Speedometer
                value={120}
                fontFamily='squada-one'
            >
                <Background />
                <Arc />
                <Needle />
                <Progress />
                <Marks />
                <Indicator />
            </Speedometer>

            <span className='w-[90%] h-px bg-slate-800 dark:bg-slate-200 block my-8'></span>

            <Speedometer
                value={5}
                max={11}
                fontFamily='squada-one'
            >
                <Background />
                <Arc arcWidth={4} />
                <Needle
                    baseOffset={40}
                    circleRadius={30}
                />
                <DangerPath />
                <Progress arcWidth={10} />
                <Marks step={1} />
            </Speedometer>

            <span className='w-[90%] h-px bg-slate-800 dark:bg-slate-200 block my-8'></span>

            <Speedometer
                value={54}
                max={80}
                angle={160}
                fontFamily='squada-one'
            >
                <Background angle={180} />
                <Arc />
                <Needle />
                <Progress />
                <Marks />
                <Indicator />
            </Speedometer>


        </div>
    )
}

export default SpeedMeter