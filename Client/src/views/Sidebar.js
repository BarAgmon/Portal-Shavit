import React from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

const SidebarApp = () => (
    <Sidebar.Pushable as={Segment}>
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
        >
            <Menu.Item as='a'>
                <Icon name='home' />
                Backup and restore
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='gamepad' />
                Documentation
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='camera' />
                Docker CLI
            </Menu.Item>
        </Sidebar>
    </Sidebar.Pushable>
);

export default SidebarApp