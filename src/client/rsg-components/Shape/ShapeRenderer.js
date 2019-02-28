/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

export const styles = () => ({
	paddingRow: {
		paddingLeft: prop => 30 * prop.level + 'px',
	},
});

class ShapeRenderer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes, children } = this.props;
		return <div className={classes.paddingRow}>{children}</div>;
	}
}

ShapeRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	level: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
};

export default Styled(styles)(ShapeRenderer);
