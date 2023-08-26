import "./Trip.css";
import All_Trips from "./All_Trips";
import Masjid3 from "../assets/Masjid3.jpg";
import City3 from "../assets/City3.jpg";
import Sahara3 from "../assets/Sahara3.jpg";

function Trip() {
  return (
    <div className="Trip">
      <h1>رحلات</h1>
      <p>Trip</p>
      <div className="Trip_Cards">
        <All_Trips
          Trip_Img={Masjid3}
          Title="المساجد"
          Text="تحتوي الجزائر على العديد من المساجد والجوامع الإسلامية التي تتميز بالزخارف وفن العمارة المميزة ومن أهمها ما يلي:
        جامع كتشاوة: مسجد تاريخي موجود في عاصمة الجزائر، بُني المسجد في فترة الحكم العثماني في 1612 ميلادي وتمت توسعته لاحقاً على يد الباي حسن في العام 1792 ميلادي، أثناء الحكم الفرنسي للجزائر تحوّل هذا المسجد إلى كاتدرائية القديس فيليب، التي ظلت كذلك حتى عام 1962 ميلادي، وعندها تمت إعادة المسجد إلى وضعه الأصلي، وعلى الرغم من هذه التحولات فقد احتفظ المسجد بعظمته الأصلية وعراقته التاريخية، كما تم تسجيل المسجد في قائمة اليونسكو للتراث العالمي في عام 1992، كجزء من آثار مدينة الجزائر.
        "
        />
        <All_Trips
          Trip_Img={City3}
          Title="المدن"
          Text="تُعد الجزائر من الدول القليلة التي تمتلك مقومات هائلة في قطاع السياحة تجعلها إحدى الوجهات المفضلة للسياح حول العالم، فهناك العديد من الأماكن والمدن التي يمكن أن تقضي فيها عطلتك السنوية الصيفية في الجزائر، تمزج هذه المدن بين سحر الطبيعة الخلابة ورمال الشواطئ الذهبية وزرقة البحر والمعالم التاريخية الأثرية السياحية، التي تعكس تزاوجاً بين الطبيعة والتاريخ والبر والبحر، "
        />
        <All_Trips
          Trip_Img={Sahara3}
          Title="الصحراء"
          Text="تعد الصحراء الجزائرية ثاني أكبر صحراء في العالم، وذلك لشاسعتها، حيث تقارب مساحتها 2 مليون متر مربع وتحتوي على تراث طبيعي وثقافي وتاريخي غني ومتنوع. تعد السياحة الصحراوية جوهر المنتوج السياحي الجزائري.

تحتوي الصحراء على 05 حظائر ثقافية مصنفة، وهي حظيرة الطاسيلي في ولاية ايليزي، الهقار في ولاية تمنراست، وادي ميزاب في ولاية غرداية والحظيرة الثقافية للأطلس الصحراوي في حظيرة توات، قورارة، تيديكلت."
        />
      </div>
    </div>
  );
}

export default Trip;
