import { Outlet } from "react-router-dom";

 import SocialHeader from "./SocialHeader";
 import SocialFooter from "./SocialFooter";


function SocialLayout() {
  return (
    <div>
      <SocialHeader />

      <main>
        <Outlet />
      </main>

      <SocialFooter />
    </div>
  );
}

export default SocialLayout;