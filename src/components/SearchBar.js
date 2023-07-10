import React from 'react';
import { AutoComplete, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

export class SearchBar extends React.Component {
    state = {
        options: [],
    }

    handleSearch = (value) => {
        this.setState({
            options: !value ?
                [] : nba.searchPlayers(value).map(player => ({
                    value: player.fullName,
                    label: (
                        <div>
                            <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`} />
                            <span className="player-option-label">{player.fullName}</span>
                        </div>
                    ),
                }))
        });
    }

    onSelect = (playerName) => {
        this.props.handleSelectPlayer(playerName);
    }

    render() {
        const { options } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                options={options}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search NBA Player"
            >
                <Input suffix={<SearchOutlined className="certain-category-icon" />} style={{ fontSize: 'large' }} />
            </AutoComplete>
        );
    }
}
