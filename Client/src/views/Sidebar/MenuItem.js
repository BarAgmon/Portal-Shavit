import React from "react";
import {Icon, Menu} from "semantic-ui-react";

export default function MenuItem ({iconName, iconText}) {
    return (
        <Menu.Item as='a'>
            <Icon name={iconName} />
            {iconText}
        </Menu.Item>
    )
}