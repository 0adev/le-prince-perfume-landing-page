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
      <SectionHeader title={"لماذا أخترتنا؟"} subTitle={"ميزاتنا الأساسية"} />
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
          title={"مكونات عالية الجودة"}
          paragraph={
            "نحرص في تصنيع عطورنا على استخدام مكونات طبيعية مختارة بعناية، تمتاز بجودتها العالية ونقائها، ما يجعلها لطيفة على البشرة وآمنة للاستخدام اليومي. تم تطوير كل تركيبة بعناية فائقة لتمنحك تجربة عطرية فاخرة تنسجم بتناغم مع شخصيتك وتعبّر عن ذوقك الرفيع."
          }
        />
        <Feature
          image={FeatureImgThree}
          icon={PerfumeSvg}
          title={"تشكيلة متنوعة من الروائح"}
          paragraph={
            "نقدم مجموعة متكاملة ومتنوعة من العطور المصممة بعناية لتلائم مختلف الأذواق والأنماط الشخصية، حيث تضم تشكيلتنا روائح زهرية ناعمة تنبض بالأنوثة والرقة، وصولاً إلى العطور الشرقية الفاخرة التي تمتاز بعمقها ودفئها وجاذبيتها الآسرة."
          }
        />
        {/* second column */}
        {/* third column */}
      </div>
    </div>
  );
};

export default Features;
