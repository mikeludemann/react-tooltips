import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tooltips.css';

export default class Tooltip extends Component {
	render() {
		return (
			<div className="tooltip">
				<div className="tooltip-text">
					{this.props.defaultText}
				</div>
				<div className={"tooltip-text-" + this.props.position}>
					{this.props.tooltipsText}
				</div>
			</div>
		);
	}
}

Tooltip.propTypes = {
	defaultText: PropTypes.string.isRequired,
	tooltipsText: PropTypes.string.isRequired,
	position: PropTypes.oneOf(["top","left","right","bottom"]).isRequired
}
