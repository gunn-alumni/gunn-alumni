import { useState } from 'react';
import ReactSlider, { type ReactSliderProps } from 'react-slider';

/* READ:
  Slider component will not work as a multi range slider currently due to type issues
    with controlled components, which might be a ReactSlider limitation.
  The Slider also does not visually represent the true value if the value is in between steps.
    This seems to be a ReactSlider issue.
  Long term, it might be better to use the range-slider from react suite (https://rsuitejs.com/),
    since it should not have the above issues. However, we need to install react suite as a whole
    to use the range-slider so I'm going to refrain from doing that right now.
  -Michael
 */

interface SliderProps {
  colorActive?: string;
  colorInactive?: string;
  isInputVisible?: boolean;
}

const Slider = <T extends number | readonly number[] = number>(
  _props: ReactSliderProps & SliderProps //can't use ReactSlider as a controlled component when ReactSliderProps<T>, temp fix
) => {
  // Can't mutate _props.colorActive or _props.colorInactive directly, so have to create new variable to hold the info
  const colors = {
    colorActive: 'bg-primary',
    colorInactive: 'bg-gray-200'
  };
  if (_props.colorActive != null) {
    colors.colorActive = _props.colorActive;
  }
  if (_props.colorInactive != null) {
    colors.colorInactive = _props.colorInactive;
  }
  let inputVisibility = '';
  if (_props.isInputVisible != true) {
    inputVisibility = 'hidden';
  }
  /* Value Hook: LINKS THUMB VALUE AND INPUT VALUE
    - set initial value to defaultValue unless defaultValue is null,
    - in which case set initial value to min unless min is null,
    - in which case set initial to 0
  */
  const [value, setValue] = useState(
    _props.defaultValue ? _props.defaultValue : _props.min ? _props.min : 0
  );
  return (
    <>
      <ReactSlider
        {..._props}
        renderThumb={(props) => {
          //style the thumb of the slider
          return (
            <div
              {...props}
              className={`aspect-square rounded-full text-white text-sm flex items-center justify-center cursor-grab outline-0 ${
                colors.colorActive
              } ${_props.orientation === 'vertical' ? 'w-full' : 'h-full'}`}
            >
              {value}
            </div>
          );
        }}
        renderTrack={(props, state) => {
          //style the track ("progress bar") of the slider
          //these four lines handle multiple tracks for a multi-range slider
          const points = Array.isArray(state.value) ? state.value.length : null;
          const isMulti = points && points > 0;
          const isLast = isMulti ? state.index === points : state.index === 1;
          const isFirst = state.index === 0;
          return (
            <div
              {...props}
              className={`rounded-full ${
                _props.orientation === 'vertical'
                  ? 'w-1/4 left-1/2 -translate-x-1/2'
                  : 'h-1/4 top-1/2 -translate-y-1/2'
              } ${
                (isMulti ? isFirst || isLast : isLast)
                  ? `${colors.colorInactive}`
                  : `${colors.colorActive}`
              }`}
            ></div>
          );
        }}
        renderMark={(props) => {
          //style the marks on the slider
          return (
            <div
              {...props}
              className={`w-1 h-1 rounded-full ${colors.colorActive}
                ${
                  _props.orientation === 'vertical'
                    ? 'left-1/2 -translate-x-1/2'
                    : 'top-1/2 -translate-y-1/2'
                }`}
            ></div>
          );
        }}
        value={value} //set value of ReactSlider to the hook value
        onChange={(value) => setValue(value)} //when the thumb is moved, update the hook value to the thumb value
      />
      <div className={`flex flex-row gap-2 ${inputVisibility}`}>
        {/* Input box for user to change value by typing */}
        <input
          type="number"
          min={_props.min ? _props.min : 0}
          max={_props.max ? _props.max : 100}
          value={value.toString()}
          onChange={(e) => setValue(Number(e.target.value))}
          className={`border-2 bg-gray-100 w-24 no-spinner rounded-md border-gray-300 peer order-last
           invalid:border-pink-500 invalid:outline-pink-500 invalid:text-pink-600 focus:valid:outline-blue-400
          p-1`}
        ></input>
        <label className="text-2xl text-gray-500 peer-focus:peer-valid:text-blue-400 peer-invalid:text-pink-500 font-semibold">
          $
        </label>
      </div>
    </>
  );
};

export default Slider;
