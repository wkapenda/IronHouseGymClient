import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="/facilities" onClick={toggle}>Facilities</SidebarLink>
                <SidebarLink to="/personalTraining" onClick={toggle}>Personal Training</SidebarLink>
                <SidebarLink to="/groupTraining" onClick={toggle}>Group Training</SidebarLink>
                <SidebarLink to="/membership" onClick={toggle}>Membership</SidebarLink>
                <SidebarLink to="/account" onClick={toggle}>Account</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact">Contact Us</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

