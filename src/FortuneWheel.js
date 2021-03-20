import React, { useEffect } from 'react';

const FortuneWheel = () => {
  useEffect(() => {
    const spin = document.getElementById('spin');
    const wheel = document.getElementById('wheel');
    const arrow = document.getElementById('arrow');
    const pointer = document.getElementById('pointer');
    const allPaths = document.querySelectorAll('path[data-name="sliceBkg"]');
    const subjectsList = document.getElementById('subjects');
    let stopPoint = 0;
    const outputBox = document.getElementById('output');

    const subjects = {
      sliceBkg_1: 'Bio',
      sliceBkg_3: 'Work',
      sliceBkg_5: 'Contact',
      sliceBkg_2: 'Bio',
      sliceBkg_4: 'Work',
      sliceBkg_6: 'Contact',
    };

    // SPIN

    spin.addEventListener('click', function () {
      // SELECT SUBJECT

      //  const collection = subjectsList.selectedOptions;
      const output = '';

      // RESET ROTATION

      arrow.style.transform = 'rotate(0deg)';
      arrow.style.transition = 'unset';

      // RESET OPACITY

      for (let i = 0; i < allPaths.length; ++i) {
        allPaths[i].style.fill = '';
      }

      //Passing stopPoint value from select
      // stopPoint = collection[0].label; // temp id

      setTimeout(function () {
        getRotating();
      });
    });

    // TOTAL DISTANCE

    // const totalDistance = (randomDistance, stopPoint) => {
    //   const m = randomDistance % 360;
    //   const n = 360 / 6;
    //   const result = randomDistance - m + stopPoint * n - n / 2;
    //   //  console.log('totalDistance', randomDistance, result, m, n);
    //   return result;
    // };

    const getRotating = () => {
      //  set rotation degree and time
      let transitionTime = Math.floor(Math.random() * (5 - 3 + 1)) + 3;
      //   let rotateDegrees = totalDistance(
      //     Math.floor(Math.random() * (2160 - 720 + 1)) + 720,
      //     stopPoint
      //   );
      let rotateDegrees = Math.floor(Math.random() * (2160 - 720 + 1)) + 720;

      //  set rotation to styles
      arrow.style.transform = 'rotate(' + rotateDegrees + 'deg)';
      arrow.style.transition = transitionTime + 's';
      //  set opacity to slice
      setTimeout(function () {
        const pointerPosition = pointer.getBoundingClientRect();
        const pointerBottomPosition = pointerPosition.bottom;
        const pointerCenter = pointerPosition.right - pointerPosition.width / 2;

        const selectedSlice = document.elementFromPoint(
          pointerCenter,
          pointerBottomPosition + 2
        ).parentElement;

        selectedSlice.firstElementChild.style.fill = '#E31737';
        console.log(`object`, selectedSlice.firstElementChild);
        // returns subjet title
        outputBox.innerHTML = subjects[selectedSlice.firstElementChild.id];
        // outputBox.innerHTML = selectedSlice.firstElementChild.id;
      }, transitionTime * 1000 + 100);
    };
  }, []);

  return (
    <div className="svg-wrapper">
      <svg
        id="fortune"
        xmlns="http://www.w3.org/2000/svg"
        width="380"
        height="380"
        viewBox="0 0 380 380"
      >
        <g id="wheel">
          <g id="slice-1">
            <path
              id="sliceBkg_1"
              data-name="sliceBkg"
              d="M353.7,95.49,190,190V1Z"
              fill="#ddd"
              fillRule="evenodd"
            />
          </g>
          <g id="slice-4">
            <path
              id="sliceBkg_2"
              data-name="sliceBkg"
              d="M190,190l0,189L26.31,284.5Z"
              fill="#ddd"
              fillRule="evenodd"
            />
          </g>
          <g id="slice-5">
            <path
              id="sliceBkg_3"
              data-name="sliceBkg"
              d="M26.3,95.48,190,190,26.3,284.49Z"
              fill="#ccc"
              fillRule="evenodd"
            />
          </g>
          <g id="slice-2">
            <path
              id="sliceBkg_4"
              data-name="sliceBkg"
              d="M190,190,353.7,95.5l0,189Z"
              fill="#ccc"
              fillRule="evenodd"
            />
          </g>
          <g id="slice-3">
            <path
              id="sliceBkg_5"
              data-name="sliceBkg"
              d="M190,379V190l163.67,94.52Z"
              fill="#bbb"
              fillRule="evenodd"
            />
          </g>
          <g id="slice-6">
            <path
              id="sliceBkg_6"
              data-name="sliceBkg"
              d="M190,190,26.31,95.47,190,1Z"
              fill="#bbb"
              fillRule="evenodd"
            />
          </g>
          <text
            transform="translate(320.52 105.96) rotate(-30)"
            fontSize="14"
            fill="#fff"
            fontFamily="Roboto-Black, Roboto"
            fontWeight="800"
          >
            Bio
          </text>
          <text
            transform="translate(317.36 258.99) rotate(30)"
            fontSize="14"
            fill="#fff"
            fontFamily="Roboto-Black, Roboto"
            fontWeight="800"
          >
            <tspan letterSpacing="-0.02em">W</tspan>
            <tspan x="11.96" y="0">
              ork
            </tspan>
          </text>
          <text
            transform="translate(32.13 116.77) rotate(30)"
            fontSize="14"
            fill="#fff"
            fontFamily="Roboto-Black, Roboto"
            fontWeight="800"
          >
            <tspan letterSpacing="-0.02em">W</tspan>
            <tspan x="11.96" y="0">
              ork
            </tspan>
          </text>
          <text
            transform="translate(185.42 62.15) rotate(-90)"
            fontSize="14"
            fill="#fff"
            fontFamily="Roboto-Black, Roboto"
            fontWeight="800"
          >
            Contact
          </text>
          <text
            transform="translate(203.6 366.93) rotate(-90)"
            fontSize="14"
            fill="#fff"
            fontFamily="Roboto-Black, Roboto"
            fontWeight="800"
          >
            Contact
          </text>
          <text
            transform="translate(47.58 290) rotate(-30)"
            fontSize="14"
            fill="#fff"
            fontFamily="Roboto-Black, Roboto"
            fontWeight="800"
          >
            Bio
          </text>
        </g>
        <g id="arrow">
          <polygon
            id="Rectangle"
            points="176.64 97.04 190 78.12 203.36 97.04 203.36 301.88 190 282.96 176.64 301.88 176.64 97.04"
            fillRule="evenodd"
            opacity="0.7"
          />
          <circle
            id="Oval"
            cx="190"
            cy="190"
            r="7.06"
            fill="#d8d8d8"
            stroke="#bdbdbd"
            strokeWidth="2"
          />
          <circle id="pointer" cx="190" cy="73.99" r="1.76" fill="none" />
        </g>
      </svg>
      <div>
        {/* <select id="subjects" name="subjects">
          <option value="">- Select -</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select> */}
        <button id="spin">Spin</button>
        <div id="output"></div>
      </div>
    </div>
  );
};

export default FortuneWheel;
