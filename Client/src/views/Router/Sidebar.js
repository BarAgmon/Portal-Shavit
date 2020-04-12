import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import '../../Semantic-UI-CSS-master/semantic.min.css';
const SidebarApp = () => {
    return(
        <Sidebar
            as={Menu}
            animation='uncover'
            direction={"left"}
            icon='labeled'
            inverted
            vertical
            visible='true'
            width='thin'
        >
            <Menu.Item as='a'>
                <Icon name='database' />
                Backup and restore
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='dochub' />
                Documentation
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='docker' />
                Docker CLI
            </Menu.Item>
        </Sidebar>
    );
}

export default SidebarApp