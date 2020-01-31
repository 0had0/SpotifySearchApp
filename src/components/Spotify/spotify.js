import axios from "axios";
import gtag from '../../gtag'

export const client_id = process.env.REACT_APP_CLIENT_ID; // Your client id
export const client_secret = process.env.REACT_APP_CLIENT_SECRET; // Your secret
export const redirect_uri = process.env.REACT_APP_REDIRECT_URI; // Your redirect uri
export const scopes = process.env.REACT_APP_SCOPES;
export const state = "hello123";


const search = async function(input, token, setItems, setError, setIsLoading) {
	setIsLoading(true);
	await axios
		.get(
			"https://api.spotify.com/v1/search?q=" +
				input.split(" ").join("+") +
				"&type=artist",
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		.then(res => {
			gtag('event', 'Search', {
				'event_label': input,
				'value':1
			})
			setItems(res.data.artists.items);
			setIsLoading(false);
			if (res.data.artists.items.length === 0)
				setError({ message: "nothing found", severity: "info" });
		})
		.catch(error => {
			setIsLoading(false);
			if (error) {
				try {
					setError({
						...error.response.data.error,
						severity: "error"
					});
				} catch (error) {
					setError({ ...error, severity: "error" });
				}
			} else setError({ severity: "error", message: "Slow Connection" });
		});
};

const getAlbums = function(user, token, setAlbums, setError, setIsLoading) {
	setIsLoading(true);
	axios
		.get(`https://api.spotify.com/v1/artists/${user.id}/albums`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => {
			setAlbums(res.data.items);
			setIsLoading(false);
			if (res.data.items.length === 0)
				setError({ message: "nothing found", severity: "info" });
		})
		.catch(error => {
			setIsLoading(false);
			setError(Object.assign({}, error, { severity: "error" }));
		});
};

const isFollowing = async function(
	id,
	token,
	setIsLoading,
	setError,
	setIsFollowing,
	type = "artist"
) {
	setIsLoading(true);
	await axios
		.get(
			`https://api.spotify.com/v1/me/following/contains?type=${type}&ids=${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		.then(res => {
			setIsLoading(false);
			setIsFollowing(res.data[0]);
		})
		.catch(error => {
			setIsLoading(false);
			setError(error);
		});
};

const follow = async function(
	user,
	token,
	setError,
	setIsFollowing,
	setIsLoading
) {
	setIsLoading(true);
	await axios({
		url: "https://api.spotify.com/v1/me/following?type=artist&ids=" + user.id,
		method: "PUT",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`
		}
	})
		.then(() => {
			gtag('event', 'Follow', {
				'event_label': user.name + ' - ' + user.id,
				'value': 1
			})
			setIsLoading(false);
			setIsFollowing(true);
		})
		.catch(error => {
			setIsLoading(false);
			setError({ ...error, severity: "error" });
		});
};

const unfollow = function(user, token, setError, setIsFollowing, setIsLoading) {
	setIsLoading(true);
	axios
		.delete(
			"https://api.spotify.com/v1/me/following?type=artist&ids=" + user.id,
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		)
		.then(() => {
			gtag('event', 'Unfollow', {
				'event_label': user.name + ' - ' + user.id,
				'value': 1
			})
			setIsLoading(false);
			setIsFollowing(false);
		})
		.catch(error => {
			setIsLoading(false);
			setError({ ...error.error, severity: "error" });
		});
};

export { getAlbums, isFollowing, follow, unfollow };
export default search;
