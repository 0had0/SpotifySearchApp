import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ACTION from "../../actions";

const hash = window.location.hash
	.substring(1)
	.split("&")
	.reduce(function(initial, item) {
		if (item) {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);
		}
		return initial;
	}, {});

function GetToken({ dispatch }) {
	useEffect(() => {
		let _token = hash.access_token;
		if (_token) dispatch(ACTION.ADD_TOKEN(_token));
		if (_token) localStorage.setItem("token", _token);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <Redirect to="/" />;
}

export default connect(null, dispatch => ({
	dispatch
}))(GetToken);
