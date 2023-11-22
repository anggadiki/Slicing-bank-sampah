import Nav from "@/components/molekul/nav";
import MapContent from "@/components/organisme/mapContent";

const DetailMapView = () => {
  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundImage: `url(/Map.png)` }}
    >
      <div className=" flex flex-col">
        <Nav src={"/search-normal.png"}></Nav>
        <div className=" pt-80">
          <MapContent />
        </div>
      </div>
    </div>
  );
};

export default DetailMapView;
