import React from "react";
import { SectionHeader } from "../../components";
import Feature from "../../components/feature/Feature";
import {
  FeatureImgOne,
  TimerSvg,
  FeatureImgTwo,
  QualityMedalSvg,
  FeatureImgThree,
  PerfumeSvg,
} from "./index";

import "./features.css";

const Features = () => {
  return (
    <div className="princedlf__features section__margin">
      <SectionHeader />
      <div className="princedlf__features-container d-grid gap-8">
        {/* first column */}
        <Feature
          image={FeatureImgOne}
          icon={TimerSvg}
          title={"عطر طويل الأمد"}
          paragraph={
            "تتميّز تشكيلتنا المختارة من العطور بجودة استثنائية وثباتية عالية تدوم لساعات طويلة، حيث تم تصميم كل تركيبة بعناية فائقة باستخدام أفضل المكونات العطرية لضمان بقاء الرائحة الفاخرة على البشرة طوال اليوم."
          }
        />
        <Feature
          image={FeatureImgTwo}
          icon={QualityMedalSvg}
          title={"عطر طويل الأمد"}
          paragraph={
            "تتميّز تشكيلتنا المختارة من العطور بجودة استثنائية وثباتية عالية تدوم لساعات طويلة، حيث تم تصميم كل تركيبة بعناية فائقة باستخدام أفضل المكونات العطرية لضمان بقاء الرائحة الفاخرة على البشرة طوال اليوم."
          }
        />
        <Feature
          image={FeatureImgThree}
          icon={PerfumeSvg}
          title={"عطر طويل الأمد"}
          paragraph={
            "تتميّز تشكيلتنا المختارة من العطور بجودة استثنائية وثباتية عالية تدوم لساعات طويلة، حيث تم تصميم كل تركيبة بعناية فائقة باستخدام أفضل المكونات العطرية لضمان بقاء الرائحة الفاخرة على البشرة طوال اليوم."
          }
        />
        {/* second column */}
        {/* third column */}
      </div>
    </div>
  );
};

export default Features;
