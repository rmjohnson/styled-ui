import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import systemPropTypes from '@styled-system/prop-types';
import Transition from 'react-transition-group/Transition';
import { Button } from '../button';
import { X as Close } from '../icons/18px';
import * as Styled from './styled.jsx';
import { theme } from '../../theme';

const transitionTime = Styled.transitionTime; // milliseconds

/**
 * A mobile-first Toast. A toast indicates that an action is being taken that does not require the user's
 * specific attention.
 */
export class SimpleToast extends PureComponent {
	static propTypes = {
		/** In milliseconds */
		showTime: PropTypes.number,
		...systemPropTypes.color,
		...systemPropTypes.layout,
		...systemPropTypes.position,
	};

	static defaultProps = {
		showTime: 1000,
		theme: theme,
	};

	state = {
		toastHasEntered: false,
		transitionIn: false,
		messages: [],
	};

	_showTimeout = null;

	componentWillUnmount() {
		clearTimeout(this._showTimeout);
	}

	/** Accepts an object with a required `message` and an optional `icon` property */
	showMessage = newMessage => {
		if (newMessage.message) {
			this.setState(prevState => ({
				transitionIn: !prevState.toastHasEntered,
				messages: [...prevState.messages, newMessage],
			}));
		}
	};

	triggerExit = () => this.setState({ transitionIn: false });

	handleEntered = () => {
		const { messages } = this.state;
		this.setState({ toastHasEntered: true, transitionIn: messages.length === 1 });
		this._showTimeout = setTimeout(this.triggerExit, this.props.showTime);
	};

	handleExited = () => {
		const { messages } = this.state;
		const newMessages = [...messages];
		newMessages.shift();

		clearTimeout(this._showTimeout);
		this.setState({
			messages: newMessages,
			toastHasEntered: false,
			transitionIn: newMessages.length > 0,
		});
	};

	render() {
		const { messages, transitionIn } = this.state;
		const hasMultipleMessages = messages.length > 1;

		return (
			<Transition
				in={transitionIn}
				timeout={{
					enter: transitionTime,
					exit: hasMultipleMessages ? transitionTime / 2 : transitionTime,
				}}
				onEntered={this.handleEntered}
				onExited={this.handleExited}
			>
				{state => (
					<Styled.ToastContainer
						state={state}
						{...this.props}
						onAnimationEnd={this.handleAnimationEnd}
					>
						{messages.length > 0 && messages[0].icon}
						{messages.length > 0 && (
							<Styled.ToastContent>{messages[0].message}</Styled.ToastContent>
						)}
						<Styled.ToastClose>
							<Button
								variant="minorTransparent"
								icon={<Close />}
								onClick={this.triggerExit}
								height="unset"
								padding={0}
							/>
						</Styled.ToastClose>
					</Styled.ToastContainer>
				)}
			</Transition>
		);
	}
}
