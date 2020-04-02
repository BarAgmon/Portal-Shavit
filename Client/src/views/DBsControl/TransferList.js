import React, {useState,useEffect} from 'react';
import {Transfer} from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import 'antd/dist/antd.css';

export default function TransferList() {
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:80/postgres/databases').then((response)=>{
            setData(response.data.databases.map((db)=> {
                return {
                    key: JSON.parse(db).name,
                    title : JSON.parse(db).name
                };
            }));
        }).catch((err)=>{
            alert(err);
        })
    });

    // Called when move button (> or <) clicked
    const handleChange = (nextTargetKeys, direction, moveKeys) => {
    setTargetKeys(nextTargetKeys);
    console.log("handleChange");
    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
    };

    // Called whan select button clicked
    const handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
        console.log("handleSelectedChange");
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
        console.log(selectedKeys);
    };

    return (
        <div>
        <StyledTransfer
            dataSource={data}
            titles={['DBs', 'Selected']}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={handleChange}
            onSelectChange={handleSelectChange}
            render={item => item.title}
        />
        </div>
    );
}

const StyledTransfer = styled(Transfer)`
    .ant-transfer-list-content {
        background: aliceblue;
    }
    .ant-transfer-list-body {
        background: aliceblue;
    }
`;
