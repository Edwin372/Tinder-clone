import React from "react";
import ReadingContent from "../components/layout/ReadingContent.jsx";
import babyPhoto from "../images/testImage6.jpg";
import wibuImage from "../images/testImage2.jpg";
import ireneImage from "../images/ireneImage.jpg";
export default {
  title: "Example/Reading Content",
  component: ReadingContent,
};

const Template = (args) => <ReadingContent {...args} />;

export const readingContent = Template.bind({});
readingContent.args = {
  profile: {
    displayName: "chaudeptrai123",
    avatar: babyPhoto,
  },
  post: {
    postDate: "Dec 8th, 2020",
    title: "Irene khoe vũ đạo trên nền nhạc cực bốc",
    subtitle:
      "ababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdbababsadbsdbadsbasdbsadbaadbadbasdbabasdb",
    image: ireneImage,
    contents: [
      {
        title: "ما فائدته ؟",
        content: [
          `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.`,
          { img: wibuImage },
        ],
      },
      {
        title: `أين أجده ؟`,
        content: [
          `هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم ذو شكل منطقي قريب إلى النص الحقيقي. وبالتالي يكون النص الناتح خالي من التكرار، أو أي كلمات أو عبارات غير لائقة أو ما شابه. وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على الإنترنت.`,
        ],
      },
      {
        title: `ما هو "لوريم إيبسوم" ؟`,
        content: [
          `وريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.`,
          { img: babyPhoto },
        ],
      },
      {
        title: `Địt con mẹ mày thằng lồn TRẦN HOÀI CHÂU, là thằng chó ăn cứt`,
        content: [
          `Địt con mẹ mày thằng lồn TRẦN HOÀI CHÂU, là thằng chó ăn cứt`,
          { img: wibuImage },
          ` خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور "ريتشارد ماك لينتوك" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي "consectetur"، وخلال تتبعه لهذه الكلمة في الأدب اللاتيني اكتشف المصدر الغير قابل للشك. فلقد اتضح أن كلمات نص لوريم إيبسوم تأتي من الأقسام 1.10.32 و 1.10.33 من كتاب "حول أقاصي الخير والشر" (de Finibus Bonorum et Malorum) للمفكر شيشيرون (Cicero) والذي كتبه في عام 45 قبل الميلاد. هذا الكتاب هو بمثابة مقالة علمية مطولة في نظرية الأخلاق، وكان له شعبية كبيرة في عصر النهضة. السطر الأول من لوريم إيبسوم "Lorem ipsum dolor sit amet.." يأتي من سطر في القسم 1.20.32 من هذا الكتاب.`,
          `للمهتمين قمنا بوضع نص لوريم إبسوم القياسي والمُستخدم منذ القرن الخامس عشر في الأسفل. وتم أيضاً توفير الأقسام 1.10.32 و 1.10.33 من "حول أقاصي الخير والشر" (de Finibus Bonorum et Malorum) لمؤلفه شيشيرون (Cicero) بصيغها الأصلية، مرفقة بالنسخ الإنكليزية لها والتي قام بترجمتها هـ.راكهام (H. Rackham) في عام 1914.`,
        ],
      },
    ],
  },
};
