import { TabPanel, useTabs } from "react-headless-tabs";
import { useEffect } from "react";
import { connect } from "react-redux";

import { loadProfile } from "../../../state/ducks/profile/actions";

import NavList from "../../styled/NavList";
import ProfileContainer from "../../styled/ProfileContainer";

import Cover from "./Cover/";
import Career from "./Career";
import Education from "./Education/";
import Information from "./Information/";
import TabSelector from "./TabSelector";
import Gallery from "./Gallery/Gallery";

export function Profile({ loadProfile }){
    const [selectedTab, setSelectedTab] = useTabs(["information", "career", "education", "gallery"])

    useEffect(() => loadProfile())

    function onTabClick(tabName){
        setSelectedTab(tabName)
    }

    return (
        <div style={{position: 'relative'}}>
            <Cover />
            <ProfileContainer>
                <NavList>
                    <TabSelector
                        isActive={selectedTab === 'information'}
                        onClick={() => onTabClick('information')}
                    >
                        Information
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === 'career'}
                        onClick={() => onTabClick('career')}
                    >
                        Career
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === 'education'}
                        onClick={() => onTabClick('education')}
                    >
                        Education
                    </TabSelector>
                    <TabSelector
                        isActive={selectedTab === 'gallery'}
                        onClick={() => onTabClick('gallery')}
                    >
                        Gallery
                    </TabSelector>
                </NavList>
                <TabPanel hidden={selectedTab !== 'information'}>
                    <Information />
                </TabPanel>
                <TabPanel hidden={selectedTab !== 'career'}>
                    <Career />
                </TabPanel>
                <TabPanel hidden={selectedTab !== 'education'}>
                    <Education />
                </TabPanel>
                <TabPanel hidden={selectedTab !== 'gallery'}>
                    <Gallery />
                </TabPanel>
            </ProfileContainer>
        </div>
    );
}

export default connect(null, { loadProfile })(Profile)