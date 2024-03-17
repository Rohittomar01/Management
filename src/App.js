import Homepage from "./Component/administrator/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAllSponsor from "./Component/administrator/DisplayAllSponsor";
import Dashboard from "./Component/administrator/DashboardComponent/Dashboard";
import Technoparv from "./TechnoparvComponent/Technoparv";
import WorkshopMainEvent from "./TechnoparvComponent/WorkShopMainEvent";
import Gallery from "./Component/administrator/gallery/Gallery";
import Gallery2018 from "./Component/administrator/gallery/galleryList/Gallery2018";
// import Day from "./TechnoparvComponent/Days";
import WorkShopCard from "./TechnoparvComponent/WorkshopCns";
import SigninPage from "./Component/administrator/AdminSigninPage";
import UpdateSliderImage from "./Component/administrator/UpdateSliderImage";
import RegistrationPage from "./Component/administrator/ResistrationPage";
import StudentSigninPage from "./Component/administrator/StudentSigninPage";
import RazorPay from "./Component/administrator/RazorPay";
import Vilay from "./VilayComponent/VilayComponent/Vilay";
import VilayDanceEvent from "./VilayComponent/VilayComponent/Vilay-Sub-Component/VilayDanceEvent";
import vilayCreativityEvent from "./VilayComponent/VilayComponent/Vilay-Sub-Component/VilayCreativityEvent";
import vilayMusicEvent from "./VilayComponent/VilayComponent/Vilay-Sub-Component/VilayMusicEvent";
import vilayLiteraryEvent from "./VilayComponent/VilayComponent/Vilay-Sub-Component/VilayLiteraryEvent";
import VilayCreativityEvent from "./VilayComponent/VilayComponent/Vilay-Sub-Component/VilayCreativityEvent";
import VilayMusicEvent from "./VilayComponent/VilayComponent/Vilay-Sub-Component/VilayMusicEvent";
import MobileEventCard from "./Component/administrator/MobileEventCard";
import UserProfile from "./UserComponent/UserProfile";
// import VilaySportsEvent from "./VilayComponent/VilayComponent/Vilay-Sub-Component/VilaySportsEvent";
import MessageSend from "./Message/MessageSend";
import EventCard01 from "./Component/administrator/EventCard";
import OurTeam from "./Component/OurTeam";
import TechventureEvent from "./TechnoparvComponent/TechventureComponent/TechventureEvents";
import DjNight from "./TechnoparvComponent/DjNightComponent copy/DjNight";
import SportEvent from "./TechnoparvComponent/SportsComponent copy/SportEvent";
import Table_P from "./Component/Tablefor_p";
import ViewAll_TechnoSchedule from "./TechnoparvComponent/technoschedule/viewall_schedules/ViewAll_TechnoSchedule";
import ViewAll_VilaySchedule from "./VilayComponent/VilayComponent/vilayschedule/viewall_schedules/ViewAll_VilaySchedule";
import HomeEvent_Cards from "./Component/administrator/HomeEvents/HomeEvent_Cards/HomeEvent_Cards";
import SubEvent from "./Component/administrator/DashboardComponent/SubEventDetailForm/SubEvent";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Table_P />} path={"/Table_P"}></Route>
        <Route element={<SubEvent />} path={"/SubEvent"}></Route>
        <Route element={<EventCard01 />} path={"/EventCard01"}></Route>
        <Route element={<OurTeam />} path={"/OurTeam"}></Route>
        <Route element={<UserProfile />} path={"/UserProfile"}></Route>
        <Route
          element={<UpdateSliderImage />}
          path={"/UpdateSliderImage"}
        ></Route>
        <Route
          element={<RegistrationPage />}
          path={"/RegistrationPage"}
        ></Route>
        <Route element={<SigninPage />} path={"/SigninPage"}></Route>
        <Route element={<Homepage />} path={"/homepage"}></Route>
        <Route
          element={<WorkshopMainEvent />}
          path={"/WorkshopMainEvent/*"}
        ></Route>
        <Route
          element={<TechventureEvent />}
          path={"/TechventureEvent/*"}
        ></Route>
        <Route element={<Dashboard />} path={"/Dashboard/*"}></Route>
        {/* <Route element={<Day />} path={"/day"}></Route> */}
        <Route element={<WorkShopCard />} path={"/WorkShopCard"}></Route>
        <Route
          element={<DisplayAllSponsor />}
          path={"/DisplayAllSponsor"}
        ></Route>
        <Route element={<Technoparv />} path={"/Technoparv/*"}></Route>
        <Route element={<Gallery />} path={"/gallery"}></Route>
        <Route element={<Gallery2018 />} path={"/Gallery2018"}></Route>
        <Route element={<RazorPay />} path={"/RazorPay"}></Route>
        <Route
          element={<StudentSigninPage />}
          path={"/StudentSigninPage"}
        ></Route>
        <Route element={<Vilay />} path={"/vilay"}></Route>
        <Route element={<VilayDanceEvent />} path={"/vilaydance"}></Route>
        <Route
          element={<VilayCreativityEvent />}
          path={"/vilaycreativity"}
        ></Route>
        <Route element={<VilayMusicEvent />} path={"/vilaymusic"}></Route>
        <Route element={<MobileEventCard />} path={"/mobileevent"}></Route>

        {/* *******************Technoparv */}

        <Route element={<DjNight />} path={"/DjNight"}></Route>
        <Route element={<SportEvent />} path={"/SportEvent/*"}></Route>
        <Route
          element={<ViewAll_TechnoSchedule />}
          path={"/ViewAll_TechnoSchedule"}
        ></Route>
        <Route
          element={<ViewAll_VilaySchedule />}
          path={"/ViewAll_VilaySchedule"}
        ></Route>
        <Route element={<HomeEvent_Cards />} path={"/HomeEvent_Cards"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
