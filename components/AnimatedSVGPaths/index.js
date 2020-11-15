import React, { Component } from "react";
import PropTypes from "prop-types";
import Svg, {G} from "react-native-svg";
import { Dimensions } from "react-native";

import Path from "../AnimatedPath";

const { height, width } = Dimensions.get("window");
class AnimatedSVGPaths extends Component {
  static propTypes = {
    ds: PropTypes.arrayOf(PropTypes.string).isRequired,
    dl: PropTypes.arrayOf(PropTypes.number).isRequired,
    dr: PropTypes.arrayOf(PropTypes.number).isRequired,
    l: PropTypes.number,
    mode: PropTypes.string,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    duration: PropTypes.number,
    height: PropTypes.number,
    delay: PropTypes.number,
    width: PropTypes.number,
    scale: PropTypes.number,
    fill: PropTypes.string,
    loop: PropTypes.bool,
    rewind: PropTypes.bool,
  };

  static defaultProps = {
    strokeColor: "black",
    strokeWidth: 1,
    duration: 1000,
    delay: 1000,
    fill: "none",
    scale: 1,
    height,
    width,
    rewind: false,
  };

  constructor(props) {
    super(props);
  }
  render() {
    const {
      ds,
      dl,
      dr,
      l,
      mode,
      type,
      fill,
      scale,
      width,
      height,
      strokeColor,
      strokeWidth,
      duration,
      delay,
      loop,
      rewind,
    } = this.props;
    // const svgPaths = ds.map((d, index) => {
    //   return (
    //     <Path
    //       strokeWidth={strokeWidth}
    //       strokeColor={strokeColor}
    //       duration={duration}
    //       delay={delay}
    //       scale={scale}
    //       fill={fill}
    //       key={index}
    //       loop={loop}
    //       rewind={rewind}
    //       d={d}
    //     />
    //   );
    // });
    let allPaths = [];
    // console.log('mode test', mode);
    ds.map((d, index) => {
      if(mode == 'normal') {
        if(index < l){
          allPaths.push((
            <Path
              strokeWidth={strokeWidth}
              strokeColor={strokeColor}
              duration={dr[index]}
              delay={dl[index]}
              scale={scale}
              fill={fill}
              key={(new Date).getTime()+index}
              loop={loop}
              rewind={rewind}
              d={d}
            />
          )) ;
        }
      } else {
        allPaths.push((
          <Path
            strokeWidth={strokeWidth}
            strokeColor={strokeColor}
            duration={dr[index]}
            delay={dl[index]}
            scale={scale}
            fill={fill}
            key={(new Date).getTime()+index}
            loop={loop}
            rewind={rewind}
            d={d}
          />
        )) ;
      }
    });
    let wd = width*scale;
    // console.log(wd, wd/3, wd/(wd/3));
    return (
      <Svg style={{alignself:'center'}} height={height} width={wd}>
        <G transform={`translate(${wd/3.5} 50) scale(1,1)`}>
        {/* {svgPaths} */}
        {allPaths.map((e)=> e )}
        {/* {svgPaths1}
        {svgPaths2}
        {svgPaths3} */}
        </G>
      </Svg>
    );
  }
}

/* Export ==================================================================== */

module.exports = AnimatedSVGPaths;
module.exports.details = {
  title: "AnimatedSVGPaths",
};
