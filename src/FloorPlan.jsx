import LivingRoom from "./LivingRoom";
import Kitchen from "./Kitchen";
import HalfBath from "./HalfBath";
import Bedroom from "./Bedroom";
import FullBath from "./Fullbath";
const FloorPlan = (props) => {
  return ( 
    <>
    <div><Bedroom bedNum={1}/></div>
    <div><Kitchen/></div>
    <div><Bedroom bedNum={2}/></div>
    <div><FullBath/></div>
    <div><LivingRoom /></div>
    <div><HalfBath/></div>
    <div><Bedroom bedNum={3}/></div>
    </>
    
  );
}

export default FloorPlan;