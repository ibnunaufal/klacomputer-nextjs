import SectionTitle from "../Common/SectionTitle";
import SingleReason from "./SingleFeature";
import reasonData from "./reasonsData";


const Reason = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Mengapa Memilih KLA Computer?"
            paragraph="Dengan pengalaman bertahun-tahun di industri komputer, kami berkomitmen untuk memberikan solusi terbaik bagi kebutuhan teknologi Anda."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {reasonData.map((reason) => (
              <SingleReason key={reason.id} reason={reason} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reason;
