import ReactSlider, { ReactSliderProps } from "react-slider";
//SOURCE CODE (adapted to work without classnames dependency): https://reacthustle.com/blog/react-multi-range-slider-with-two-handles-using-react-slider-tailwind-css

type SliderProps = {
    x: string;
};

const Slider = <T extends number | readonly number[]>(
    _props: ReactSliderProps<T>
) => {
    return (
        <ReactSlider {..._props}
            renderThumb={(props, state) => (
                <div
                    {...props}
                    className={`aspect-square rounded-full bg-primary text-white text-sm flex items-center justify-center cursor-grab outline-0 ${
                        (_props.orientation === "vertical") ? "w-full" : "h-full"}`}
                >
                    {state.valueNow}
                </div>
            )}
            renderTrack={(props, state) => {
                const points = Array.isArray(state.value) ? state.value.length : null;
                const isMulti = points && points > 0;
                const isLast = isMulti ? state.index === points : state.index === 1;
                const isFirst = state.index === 0;
                return (
                    <div
                        {...props}
                        className={`rounded-full ${
                            (_props.orientation === "vertical") ? "w-1/4 left-1/2 -translate-x-1/2" : "h-1/4 top-1/2 -translate-y-1/2"} ${
                            (isMulti ? isFirst || isLast : isLast) ? "bg-gray-200" : "bg-primary"
                            }`}
                    ></div>
                );
            }}
        />
    );
};

export default Slider;