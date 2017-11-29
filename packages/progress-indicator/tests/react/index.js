import React from 'react';
import ReactDOM from 'react-dom';

import ProgressIndicator from './progress-indicator.js';


// Let’s show some dynamic interactions
class ProgressIndicatorWrapper extends React.Component {

	constructor( props ) {
		super();

		this.state = {
			items: [
				{
					link: '#url',
					text: 'Introduction',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Business Contacts',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Case Studies',
					status: 'todo',
				},
				{
					link: '#url',
					text: 'Personal Infos',
					status: 'doing',
				},
				{
					link: '#url',
					text: 'Spouses',
					status: 'todo',
				},
			],
		};
	}

	changeStatus( name, status ) {
		let newState = [];
		this.state.items.map( item => { // lacking IDs we just iterate over the state and id the one we need by it’s text
			if( item.text === name ) {
				item.status = status;
			}

			newState.push( item );
		});

		this.setState({ items: newState });
	}

	render() {
		return (
			<div>
				<ProgressIndicator theme={ this.props.theme } items={ this.state.items } />

				<button type="button" onClick={ () => { this.changeStatus( 'Personal Infos', 'done' ) } }>Mark "Personal Infos" as done</button>
				<button type="button" onClick={ () => { this.changeStatus( 'Spouses', 'doing' ) } }>Mark "Spouses" as doing</button>
				<button type="button" onClick={ () => { this.changeStatus( 'Business Contacts', 'todo' ) } }>Mark "Business Contacts" as todo</button>
			</div>
		);
	}
}


ReactDOM.render(
	<div className="split-wrapper">
		<div className="split au-body">
		<h2>progress-indicator default</h2>
			<ProgressIndicator items={[
				{
					link: '#url',
					text: 'Introduction',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Business Contacts',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Case Studies',
					status: 'todo',
				},
				{
					link: '#url',
					text: 'Personal Infos',
					status: 'doing',
				},
				{
					link: '#url',
					text: 'Spouses',
					status: 'todo',
				},
			]} />


			<hr />
			<h2>progress-indicator with no links and onClick</h2>

			<ProgressIndicator items={[
				{
					text: 'Introduction',
					status: 'done',
					onClick: event => {
						event.preventDefault();

						console.log('This function runs when the first item is clicked');
					},
				},
				{
					text: 'Business Contacts',
					status: 'doing',
					onClick: event => {
						event.preventDefault();

						console.log('This function runs when the second item is clicked');
					},
				},
				{
					text: 'Case Studies',
					status: 'todo',
					onClick: event => {
						event.preventDefault();

						console.log('This function runs when the third item is clicked');
					},
				},
			]} />


			<hr />
			<h2>progress-indicator with state</h2>

			<ProgressIndicatorWrapper />
		</div>
		<div className="split au-body au-body--dark">
		<h2>progress-indicator <code>--dark</code></h2>
			<ProgressIndicator theme="dark" items={[
				{
					link: '#url',
					text: 'Introduction',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Business Contacts',
					status: 'done',
				},
				{
					link: '#url',
					text: 'Case Studies',
					status: 'todo',
				},
				{
					link: '#url',
					text: 'Personal Infos',
					status: 'doing',
				},
				{
					link: '#url',
					text: 'Spouses',
					status: 'todo',
				},
			]} />


			<hr />
			<h2>progress-indicator with no links and onClick <code>--dark</code></h2>

			<ProgressIndicator theme="dark" items={[
				{
					text: 'Introduction',
					status: 'done',
					onClick: event => {
						event.preventDefault();

						console.log('This function runs when the first item is clicked');
					},
				},
				{
					text: 'Business Contacts',
					status: 'doing',
					onClick: event => {
						event.preventDefault();

						console.log('This function runs when the second item is clicked');
					},
				},
				{
					text: 'Case Studies',
					status: 'todo',
					onClick: event => {
						event.preventDefault();

						console.log('This function runs when the third item is clicked');
					},
				},
			]} />


			<hr />
			<h2>progress-indicator with state <code>--dark</code></h2>

			<ProgressIndicatorWrapper theme="dark" />
		</div>
	</div>,

	document.getElementById('root'),
);
