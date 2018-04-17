import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render () {
		if (!this.props.book) {
			return <div>Please click on a book to get started.</div>;
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps (state) {
	// Whatever is returned here is will end up as props inside BookDetail
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
