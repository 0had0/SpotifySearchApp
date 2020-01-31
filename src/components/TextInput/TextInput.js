import React, { useState } from "react";

import { makeStyles, IconButton } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";


import search from "../Spotify";

import {connect} from 'react-redux'

const useStyles = makeStyles(theme => ({
	root: {
		height: "100%",
		width: "100%",
		borderWidth: 0,
		background: "transparent",
		padding: theme.spacing(1, 0),
		"&:focus": {
			outline: "none"
		},
		"&::placeholder": {
			fontSize: theme.typography.fontSize,
			fontWeight: theme.typography.fontWeightLight,
			fontFamily: theme.typography.fontFamily
		}
	}
}));

function TextInput({
	setPostion,
	token,
	setItems,
	setShow,
	setError,
	setIsLoading,
	Sinput,
	dispatch
}) {
	const classes = useStyles();
	const [input, setInput] = useState(Sinput || '');
	let timeout = null;

	const handleChange = function() {
		if (input === "") return;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			search(input, token, setItems, setError, setIsLoading);
			setShow(true);
			dispatch({type:'ADD_INPUT', input} )
		}, 1000);

	};
	return (
		<React.Fragment>
			<input
				className={classes.root}
				placeholder="Search for Artists ..."
				value={input}
				onChange={function(event) {
					if (event.target.value === "") {
						setPostion("center");
						setInput("");
						setItems([]);
					} else {
						setPostion("flex-start");
						setInput(event.target.value);
					}
				}}
				onKeyDown={event => {
					if (event.key === "Enter") {
						console.log("Enter Pressed");
						handleChange();
					}
				}}
				onKeyUp={handleChange}
			/>
			<IconButton
				size="small"
				onClick={handleChange}
				disabled={input === "" ? true : false}
				children=<SearchIcon fontSize="small" />
			/>
		</React.Fragment>
	);
}

export default connect(state => ({Sinput: state.input}), dispatch=>({dispatch}))(TextInput)
